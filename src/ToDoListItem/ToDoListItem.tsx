import React from "react";
import { ITodoListItem } from '../Interfaces/IToDoListItem';
import "./ToDoListItem.css";


export default class ToDoListItem extends React.Component<ITodoListItem, ITodoListItem> {
    constructor(props: ITodoListItem) {
        super(props);
        this.state = {...props};
    }

    onButtonClick= () => {
        debugger;
        this.setState(({done}) => {
            return {
                done: !done
            }
        });
    };

    render() {
        const { label, important, done, onItemCheckBoxChange } = this.state;

        const className = done ? "done" : "";

        const style: React.CSSProperties  = {
            fontWeight : important ? 'bold': 'normal'
        };

        return(
            <div style={style} className={className}>
                <input type="checkbox" checked={done} onChange={this.onButtonClick}/>
                {label}
                <button className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-trash" />
                </button>
                <button className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-area-chart" />
                </button>
            </div>);
    }
}