import React from "react";
import ToDoList from "../ToDoList";
import { IData } from "../Interfaces/IData";

export default class Application extends React.Component<
  { TODOs: IData[] },
  { TODOs: IData[] }
> {
  constructor(props: any) {
    super(props);
    this.state = { ...props };
  }

  HandleDoneClick = (id: number) => {
    this.setState(({ TODOs }) => {
      const idx = TODOs.findIndex(x => x.id === id);
      const oldItem = TODOs[idx];
      const newItem = { ...oldItem, done: !oldItem.done };

      const newArr = [...TODOs.slice(0, idx), newItem, ...TODOs.slice(idx + 1)];

      console.log(newItem);

      return {
        TODOs: newArr
      };
    });
  };

  render() {
    return (
      <div>
        <ToDoList
          toDo={this.state.TODOs}
          onItemCheckBoxChange={this.HandleDoneClick}
        />
      </div>
    );
  }
}
