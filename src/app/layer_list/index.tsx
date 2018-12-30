import React, {Component} from "react";
import {LayerListItem} from "./layer_list_item";
import style from "./index.module.css";
import classNames from "classnames";

interface IProps {
    className?: string;
}

export class LayerList extends Component<IProps> {
    public render() {
        return (
            <div
                className={classNames(
                    style.Root,
                    this.props.className,
                )}
            >
                <LayerListItem name={"name 1"} is_active={true}/>
                <LayerListItem name={"name 2"}/>
                <LayerListItem name={"name 3"}/>
                <LayerListItem name={"name 4"}/>
                <LayerListItem name={"name 5"}/>
            </div>
        );
    }
}
