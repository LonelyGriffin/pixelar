import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ViewportComponent } from "./viewport_component";
import { changeViewportSize, changeViewportMousePosition, changeViewportScaleBy } from "../../actions/viewport";
import { IRootState } from "../../store/reducer";
import { IVector } from "../../../core/vector";
import { KeyTypes } from "../../../core/keys";
import { changeKey } from "../../actions/keys";

export const Viewport = connect(
    (state: IRootState) => ({}),
    (dispatch: Dispatch) => ({
        onResize: (size: IVector) => {
            dispatch(changeViewportSize(size));
        },
        onMousePositionChange: (position?: IVector) => {
            dispatch(changeViewportMousePosition(position));
        },
        onChangeKey: (keyType: KeyTypes, value: boolean) => {
            dispatch(changeKey(keyType, value));
        },
        onChangeScaleBy: (scaleOffset: number) => {
            dispatch(changeViewportScaleBy(scaleOffset));
        }
    }),
)(ViewportComponent);
