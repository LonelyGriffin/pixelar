import * as React from "react";
import { IVector } from "../../../core/vector";
import { ViewportGrid } from "./viewport_grid";
import { Resizeable } from "../../../components/resizeable";
import { mousePositionOnElement } from "../../../core/mouse_position_on_element";
import styles from "./viewport_component.module.css";

export interface ViewportComponentProps {
	className?: string;
    onResize: (size: IVector) => void;
    onMousePositionChange: (position?: IVector) => void;
}

export class ViewportComponent extends React.PureComponent<ViewportComponentProps> {
    public render() {
        return (
            <Resizeable
                className={this.props.className}
                onResize={this.props.onResize}
                handleInitResizeEvent={true}
            >
                <ViewportGrid className={styles.Grid}/>
            </Resizeable>
        );
    }

    private handleOnMouseMove = (e: MouseEvent) => {
        this.props.onMousePositionChange(mousePositionOnElement(e));
    }
}
