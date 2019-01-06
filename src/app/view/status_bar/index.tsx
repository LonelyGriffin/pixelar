import React from "react";
import { connect } from "react-redux";
import { IVector, vectorX, vectorY } from "../../../core/vector";
import { IRootState } from "../../store/reducer";

interface IProps {
    mousePosition?: IVector;
}

const StatusBarComponent = (props: IProps) => (
    <div>
        {
            props.mousePosition &&
            `x: ${vectorX(props.mousePosition)} y: ${vectorY(props.mousePosition)}`
        }
    </div>
);

export const StatusBar = connect((state: IRootState) => ({
    mousePosition: state.viewport.mousePosition
}))(StatusBarComponent);
