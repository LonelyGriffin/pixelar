import * as React from "react";
import { IVector } from "../../../core/vector";
import { ViewportGrid } from "./viewport_grid";
import { Resizeable } from "../../../components/resizeable";
import { mousePositionOnElement } from "../../../core/mouse_position_on_element";
import styles from "./viewport_component.module.css";
import { KeyTypes } from "../../../core/keys";
import { ViewportImage } from "./viewport_image";
import { ViewportTool } from "./viewport_tool";

export interface ViewportComponentProps {
	className?: string;
    onResize: (size: IVector) => void;
	onMousePositionChange: (position?: IVector) => void;
	onChangeKey: (keyType: KeyTypes, value: boolean) => void;
	onChangeScaleBy: (scaleOffset: number) => void;
}

export class ViewportComponent extends React.PureComponent<ViewportComponentProps> {
    public render() {
        return (
            <Resizeable
                className={this.props.className}
				handleInitResizeEvent={true}
                onResize={this.props.onResize}
				onMouseMove={this.handleMouseMove}
				onMouseLeave={this.handleMouseLeave}
				onMouseDown={this.handleMouseDown}
				onMouseUp={this.handleMouseUp}
				onWheel={this.handleMouseWheel}
            >
                <ViewportImage className={styles.Layer}/>
                <ViewportGrid className={styles.Layer}/>
				<ViewportTool className={styles.Layer}/>
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

	private handleMouseWheel = (e: MouseWheelEvent) => {
		const delta = e.deltaY || e.detail;

		this.props.onChangeScaleBy(Math.sign(delta));
	}
}
