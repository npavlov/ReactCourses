import React from "react";
import ToDoList from "../ToDoList";
import { ITodoListItem } from '../Interfaces/IToDoListItem';

const Application = () => {
    const data: ITodoListItem[] = [
        { id: 1, label: "test1", important: true, done: true },
        { id: 2, label: "test2", important: false, done: true },
        { id: 3, label: "test2", important: true, done: false }
        ];

    return (
        <div>
            <ToDoList toDo={data} />
            <button type="button" className="btn btn-outline-success btn-sm">
                test
                <i className="fa fa-area-chart" />
            </button>
        </div>
    );
};

export default Application;