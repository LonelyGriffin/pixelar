import { ViewportGridContainer } from "./container";
import { connect } from "react-redux";
import { IRootState } from "../../../store/reducer";

export const ViewportGrid = connect(
    (state: IRootState) => ({
        viewportSize: state.viewport.size,
        viewportOffset: state.viewport.offset,
        scale: state.viewport.scale,
        imgSize: state.imageSetup.size,
    })
)(ViewportGridContainer);