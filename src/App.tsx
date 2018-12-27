import React, {Component, MouseEventHandler} from 'react';
import './App.css';
import {Draggable} from "./commonComponents/DragAndDrop/Draggable";
import {DraggableType} from "./commonComponents/DragAndDrop/DraggableType";
import {DroppableType} from "./commonComponents/DragAndDrop/DroppableType";

const TestDraggable = (handleStartDrag: MouseEventHandler<HTMLDivElement>) => (
    <div onMouseDown={handleStartDrag} style={{width: 100, height: 100, border: "solid 1px red"}}>

    </div>
);


export class App extends Component {
    render() {
        return (
            <div className="App">
                <Draggable type={DraggableType.Test} relevantDroppableTypes={[DroppableType.Test]}>
                    {TestDraggable}
                </Draggable>
            </div>
        );
    }
}
