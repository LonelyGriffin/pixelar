import React, {Component} from "react";
import style from "./layer_list_item.module.css";
import classNames from "classnames";

interface IProps {
    name: string;
    is_active?: boolean;
}

export class LayerListItem extends Component<IProps> {
    public render() {
       return (
           <div
               className={classNames(
                   style.Root,
                   this.props.is_active && style.Active,
               )}
           >
               {this.props.name}
            </div>
       );
    }
}
