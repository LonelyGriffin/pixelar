import { ViewportGridContainer } from "./container";
import { connect } from "react-redux";
import { IRootState } from "../../../store/reducer";

export const ViewportGrid = connect(
    (state: IRootState) => ({
        viewportSize: state.viewport.size,
        viewportOffset: state.viewport.offset,
        imageSize: state.imageSetup.size,
    })
)(ViewportGridContainer);