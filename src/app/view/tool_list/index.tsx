import React, {Component} from "react";
import style from "./index.module.css";
import {CheckableButton} from "../../../components/checkable_button";
import classNames from "classnames";

interface IProps {
    className?: string;
}

export class ToolList extends Component<IProps> {
    public render() {
        return (
            <div className={classNames(style.Root, this.props.className)}>
                <CheckableButton center={true} checked={true}>
                    H
                </CheckableButton>
                <CheckableButton center={true}>
                    P
                </CheckableButton>
                <CheckableButton center={true}>
                    R
                </CheckableButton>
            </div>
        );
    }
}