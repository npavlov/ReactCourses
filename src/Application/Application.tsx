import React from "react";
import ToDoList from "../ToDoList";
import {IData} from "../Interfaces/IData";

const Application = () => {
    function HandleCheckBoxChange(e: Event) {
        console.log(e.target);
    }

    const data: IData[] = [
        { id: 1, label: "test1", important: true, done: true },
        { id: 2, label: "test2", important: false, done: true },
        { id: 3, label: "test2", important: true, done: false }
        ];

    return (
        <div>
            <ToDoList toDo={data} onItemCheckBoxChange={HandleCheckBoxChange} />
        </div>
    );
};

export default Application;