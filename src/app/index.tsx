import React, {Component} from 'react';
import style from './index.module.css';
import {Layout} from "./layout";

export class App extends Component {
    render() {
        return (
            <div className={style.App}>
                <Layout/>
            </div>
        );
    }
}
