import React from "react";
import { ITodoListItem } from '../Interfaces/IToDoListItem';
import ToDoListItem from '../ToDoListItem';
import "../css/bootstrap.css";

interface TodoListProps {
    toDo: ITodoListItem[]
}

export default class ToDoList extends React.Component<TodoListProps, TodoListProps> {
    render() {
        const { toDo } = this.props;

        const elements = toDo.map((item) => {
            const { id, ...itemProps } = item;
            return (
                <li key={id} className="list-group-item">
                    <ToDoListItem {...item}/>
                </li>);
        });

        return (
            <ul className="list-group">
                {elements}
            </ul>);
    }
}