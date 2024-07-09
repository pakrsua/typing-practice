import { useEffect, useState } from "react";

function TextBox(props) {
    return ( 
        <>
            {/* <div className="text-box">
                {props.sample[props.number].value}
            </div> */}
            <div className="textBox">
                {
                    props.yomigana ?
                    <div className="pron">
                    {props.jlpt_5[props.number].pron}
                    </div> :
                    <></>
                }

                <div className="value">
                    {props.jlpt_5[props.number].value}
                </div>
                {
                    props.alpabet ?
                    <div className="eng">
                    {props.jlpt_5[props.number].eng}
                    </div> :
                    <></>
                }

                <div className="mean">
                    {props.jlpt_5[props.number].mean}
                </div>
            </div>
        </>
     );
}

export default TextBox;