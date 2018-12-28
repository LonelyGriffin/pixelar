import React, {Component} from "react";
import style from "./index.module.css";



export class Layout extends Component {
    public render() {
        return (
            <div className={style.Layout}>
                <div className={style.Layout_Menu}>

                </div>
                <div className={style.Layout_Content}>
                    <div className={style.Layout_Content_Left}>

                    </div>
                    <div className={style.Layout_Content_Center}>

                    </div>
                    <div className={style.Layout_Content_Right}>

                    </div>
                </div>
                <div className={style.Layout_StatusBar}>

                </div>
            </div>
        );
    }
}