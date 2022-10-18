import React from "react";
import "./Template.css";

const Template = ({children, todolength}) => {
    return (
       <div className="Template">
            <div className="title">오늘의 할일 ({todolength})</div>
            <div>{children}</div>
       </div> 
    )
}

export default Template;