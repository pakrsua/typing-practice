import { useEffect, useState } from "react";

function TextBox(props) {

    if(props.number < Object.keys(props.word).length){
        return ( 
            <>
                {/* <div className="text-box">
                    {props.sample[props.number].value}
                </div> */}
                <div>
                    {
                        props.yomigana ? 
                        <div className="pron">
                            {props.word[props.number].pron}
                        </div> :
                        <></>
                    }

                    <div className="value">
                        {props.word[props.number].value.map((number,idx)=>(
                            <span>{props.word[props.number].value[idx]}</span>
                        ))}
                    </div>
                    {
                        props.alpabet ? 
                        <div className="eng">
                            {props.word[props.number].eng}
                        </div> : 
                        <></>
                    }

                    <div className="mean ">
                        {props.word[props.number].mean}
                    </div>
                </div>
            </>
         );
    }
    else{
        return ( 
            <>
                {/* <div className="text-box">
                    {props.sample[props.number].value}
                </div> */}
                <div>
                    {
                        props.yomigana ? 
                        <div className="pron">
                            {props.word[0].pron}
                        </div> :
                        <></>
                    }
                    <div className="value">
                        {props.word[0].value}
                    </div>
                    {
                        props.alpabet ? 
                        <div className="eng">
                            {props.word[0].eng}
                        </div> : 
                        <></>
                    }
                    <div className="mean ">
                        {props.word[0].mean}
                    </div>
                </div>
            </>
         );
    }

}

export default TextBox;