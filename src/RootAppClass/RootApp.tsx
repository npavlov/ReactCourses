import React from "react";

interface RootAppProps {
    label: string;
    redLabel? : boolean;
}

export default  class RootApp extends React.Component<RootAppProps,RootAppProps> {
    render(){
        const {label, redLabel = false} = this.props;

        const style = {
            color: redLabel ? "tomato" : "green"
        };

        return <div>
            <h1 style={style}>{label}</h1>
        </div>;
    }
}