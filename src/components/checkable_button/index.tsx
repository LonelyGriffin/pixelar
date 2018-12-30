import React, {ReactNode} from "react";
import classNames from "classnames"
import style from "./index.module.css";

interface IProps {
    children?: ReactNode;
    checked?: boolean;
    center?: boolean;
    className?: string;
    onClick?: (e: React.MouseEvent) => void;
}

export const CheckableButton = (props: IProps) => (
    <div
        className={classNames(
            style.Root,
            props.checked && style.Checked,
            props.center && style.Center,
            props.className,
        )}
        onClick={props.onClick}
    >
        {props.children}
    </div>
);