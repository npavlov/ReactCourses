import React from "react";
import { ITodoListItem } from '../Interfaces/IToDoListItem';
import "./ToDoListItem.css";


export default class ToDoListItem extends React.Component<ITodoListItem, ITodoListItem> {
    render() {
        const { label, important, done } = this.props;

        let className = done ? "" : "done";

        const style = {
            color: important ? "tomato" : "green"
        };

        return(
            <div>
                <h1 style={style} className={className}>{label}</h1>
            </div>);
    }
}