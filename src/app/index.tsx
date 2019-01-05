import React, {Component} from 'react';
import style from './index.module.css';
import {Layout} from "./view/layout";
import { Provider } from 'react-redux';
import { store } from './store';

export class App extends Component {
    render() {
        return (
            <Provider store={store} >
                <div className={style.App}>
                    <Layout/>
                </div>
            </Provider>
        );
    }
}
