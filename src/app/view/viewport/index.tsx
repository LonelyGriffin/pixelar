import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ViewportComponent } from "./viewport_component";
import { changeViewportSize, changeViewportMousePosition } from "../../actions/viewport";
import { IRootState } from "../../store/reducer";
import { IVector } from "../../../core/vector";

export const Viewport = connect(
    (state: IRootState) => ({}),
    (dispatch: Dispatch) => ({
        onResize: (size: IVector) => {
            dispatch(changeViewportSize(size));
        },
        onMousePositionChange: (position?: IVector) => {
            dispatch(changeViewportMousePosition(position));
        },
    }),
)(ViewportComponent);
