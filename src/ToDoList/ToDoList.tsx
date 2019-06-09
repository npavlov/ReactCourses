import React from "react";
import ToDoListItem from "../ToDoListItem";
import "./ToDoList.css";
import { IData } from "../Interfaces/IData";

interface TodoListProps {
  toDo: IData[];
  onItemChange(id: number, action: string): void;
}

export default class ToDoList extends React.Component<
  TodoListProps,
  TodoListProps
> {
  render() {
    const { toDo, onItemChange } = this.props;

    const elements = toDo.map(item => {
      const { id, ...itemProps } = item;
      return (
        <li key={id} className="list-group-item">
          <ToDoListItem
            {...itemProps}
            onItemCheckBoxChange={() => onItemChange(id, "DONE")}
            onItemDelete={() => onItemChange(id, "DELETE")}
            onItemImportant={() => onItemChange(id, "IMPORTANT")}
          />
        </li>
      );
    });

    return <ul className="list-group">{elements}</ul>;
  }
}
