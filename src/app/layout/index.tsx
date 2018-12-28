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
1
                    </div>
                    <div className={style.Layout_Content_Center}>
2
                    </div>
                    <div className={style.Layout_Content_Right}>
3
                    </div>
                </div>
                <div className={style.Layout_StatusBar}>

                </div>
            </div>
        );
    }
}