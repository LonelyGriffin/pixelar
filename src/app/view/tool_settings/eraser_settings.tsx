import React, { Component } from "react";
import { IRootState } from "../../store/reducer";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { changeEraserSize } from "../../actions/tool";

interface IProps {
    size: number;
    changeSize: (size: number) => void;
}

export class EraserSettingsComponent extends Component<IProps> {
    public render() {
        return (
            <div>
                Size: <input type="number" min={1} value={this.props.size} onChange={this.handleChange}/>
            </div>
        );
    }

    private handleChange = (e: any) => {
        this.props.changeSize(e.currentTarget.value);
    }
}

export const EraserSettings = connect(
    (state: IRootState) => ({
        size: state.tool.ERASER.size,
    }),
    (dispatch: Dispatch) => ({
        changeSize: (size: number) => {
            dispatch(changeEraserSize(size));
        },
    }),
)(EraserSettingsComponent);
