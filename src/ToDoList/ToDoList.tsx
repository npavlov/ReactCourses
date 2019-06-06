import React from "react";
import { ITodoListItem } from '../Interfaces/IToDoListItem';
import ToDoListItem from '../ToDoListItem';
import './ToDoList.css'
import {IData} from "../Interfaces/IData";

interface TodoListProps {
    toDo: IData[],
    onItemCheckBoxChange(e: any): void;
}

export default class ToDoList extends React.Component<TodoListProps, TodoListProps> {
    render() {
        const { toDo,onItemCheckBoxChange } = this.props;

        const elements = toDo.map((item) => {
            const { id, ...itemProps } = item;
            return (
                <li key={id} className="list-group-item">
                    <ToDoListItem {...itemProps} onItemCheckBoxChange={onItemCheckBoxChange}/>
                </li>);
        });

        return (
            <ul className="list-group">
                {elements}
            </ul>);
    }
}