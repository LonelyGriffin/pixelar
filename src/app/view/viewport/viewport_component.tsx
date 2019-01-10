import * as React from "react";
import { IVector } from "../../../core/vector";
import { ViewportGrid } from "./viewport_grid";
import { Resizeable } from "../../../components/resizeable";
import { mousePositionOnElement } from "../../../core/mouse_position_on_element";
import styles from "./viewport_component.module.css";
import { KeyTypes } from "../../../core/keys";

export interface ViewportComponentProps {
	className?: string;
    onResize: (size: IVector) => void;
	onMousePositionChange: (position?: IVector) => void;
	onChangeKey: (keyType: KeyTypes, value: boolean) => void;
}

export class ViewportComponent extends React.PureComponent<ViewportComponentProps> {
    public render() {
        return (
            <Resizeable
                className={this.props.className}
                onResize={this.props.onResize}
				handleInitResizeEvent={true}
				onMouseMove={this.handleMouseMove}
				onMouseLeave={this.handleMouseLeave}
				onMouseDown={this.handleMouseDown}
				onMouseUp={this.handleMouseUp}
            >
                <ViewportGrid className={styles.Grid}/>
            </Resizeable>
        );
    }

    private handleMouseMove = (e: MouseEvent) => {
        this.props.onMousePositionChange(mousePositionOnElement(e));
	}
	
	private handleMouseLeave = (e: MouseEvent) => {
		this.props.onMousePositionChange(undefined);
	}

	private handleMouseDown = () => {
		this.props.onChangeKey(KeyTypes.MOUSE_LEFT, true);
	}

	private handleMouseUp = () => {
		this.props.onChangeKey(KeyTypes.MOUSE_LEFT, false);
	}
}
