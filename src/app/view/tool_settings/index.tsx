import React, { Component } from "react";
import { IRootState } from "../../store/reducer";
import { connect } from "react-redux";
import { changePenSize } from "../../actions/tool";
import { ToolType } from "../../../core/tool_type";
import { PenSettings } from "./pen_settings";

interface IProps {
    toolType: ToolType;
}

export class ToolSettingsComponent extends Component<IProps> {
    public render() {
        return (
            <div>
                {this.renderCurrentToolSettings()}
            </div>
        );  
    }

    renderCurrentToolSettings() {
        switch(this.props.toolType) {
            case ToolType.PEN: return <PenSettings />
            default: return false;
        }
    }
}

export const ToolSettings = connect(
    (state: IRootState) => ({
        toolType: state.tool.type,
    }),
)(ToolSettingsComponent);
