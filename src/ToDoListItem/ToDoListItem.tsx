import React from "react";
import "./ToDoListItem.css";
import { ITodoListItem } from "../Interfaces/IToDoListItem";

const ToDoListItem = (props: ITodoListItem) => {
  const { label, important, done, onItemCheckBoxChange } = props;

  const className = done ? "done" : "";

  const style: React.CSSProperties = {
    fontWeight: important ? "bold" : "normal"
  };

  return (
    <div style={style} className={className}>
      <input type="checkbox" checked={done} onChange={onItemCheckBoxChange} />
      {label}
      <button className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-trash" />
      </button>
      <button className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-area-chart" />
      </button>
    </div>
  );
};

export default ToDoListItem;
