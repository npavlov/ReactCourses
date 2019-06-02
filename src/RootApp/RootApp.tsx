import React from "react";

interface RootAppProps {
    label: string;
    redLabel? : boolean;
}

const RootApp = ({label, redLabel = false}: RootAppProps) => {
    const style = {
        color: redLabel ? "tomato" : "green"
    };

    return <div>
        <h1 style={style}>{label}</h1>
    </div>;
};

export default RootApp;