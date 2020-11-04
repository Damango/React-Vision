import React from 'react';
import MultipliedNumber from "../MutipliedNumber/MultipliedNumber"
import "./BaseNumber.css"
const BaseNumber = (props) => {
    return (<div className="base-number-container">{props.number}



        <MultipliedNumber number={props.number * props.number} />
    </div>);
}

export default BaseNumber;