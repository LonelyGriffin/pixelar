import React, {Component} from "react";
import { Dispatch } from "redux";
import style from "./index.module.css";
import {CheckableButton} from "../../../components/checkable_button";
import classNames from "classnames";
import { IRootState } from "../../store/reducer";
import { ToolType } from "../../../core/tool_type";
import { connect } from "react-redux";
import { changeToolType } from "../../actions/tool";

interface IProps {
    className?: string;
    curToolType: ToolType;
    onChangeToolType: (toolType: ToolType) => void;
}

export class ToolListComponent extends Component<IProps> {
    public render() {
        return (
            <div className={classNames(style.Root, this.props.className)}>
                <CheckableButton 
                    center={true}
                    checked={this.props.curToolType === ToolType.HAND}
                    onClick={() => this.props.onChangeToolType(ToolType.HAND)}
                >
                    H
                </CheckableButton>
                <CheckableButton
                    center={true}
                    checked={this.props.curToolType === ToolType.PEN}
                    onClick={() => this.props.onChangeToolType(ToolType.PEN)}
                >
                    P
                </CheckableButton>
                <CheckableButton
                    center={true}
                    checked={this.props.curToolType === ToolType.ERASER}
                    onClick={() => this.props.onChangeToolType(ToolType.ERASER)}
                >
                    R
                </CheckableButton>
            </div>
        );
    }
}

export const ToolList = connect(
    (state: IRootState) => ({
        curToolType: state.tool.type,
    }),
    (dispatch: Dispatch) => ({
        onChangeToolType: (toolType: ToolType) => {
            dispatch(changeToolType(toolType));
        }
    })
)(ToolListComponent);