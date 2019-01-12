import React, {Component} from "react";
import style from "./index.module.css";
import {ToolList} from "../tool_list";
import {LayerList} from "../layer_list";
import {Palet} from "../palet";
import { Viewport } from "../viewport";
import { StatusBar } from "../status_bar";



export class Layout extends Component {
    public render() {
        return (
            <div className={style.Layout}>
                <div className={style.Layout_Menu}>
                    {`PIXELAR - Beautiful editor for tiles and pixel art`}
                </div>
                <div className={style.Layout_Content}>
                    <div className={style.Layout_Content_Left}>
                        <ToolList/>
                    </div>
                    <div className={style.Layout_Content_Center}>
                        <Viewport className={style.Layout_Viewport}/>
                    </div>
                    <div className={style.Layout_Content_Right}>
                        <LayerList/>
                        <Palet/>
                    </div>
                </div>
                <div className={style.Layout_StatusBar}>
                    <StatusBar />
                </div>
            </div>
        );
    }
}