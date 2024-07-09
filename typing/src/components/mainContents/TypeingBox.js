import { useEffect, useRef, useState } from "react"

function TypeingBox(props) {
    const inputRef = useRef(null)


    const textClear = () => {
        inputRef.current.value = null;
    }
    const setTextData = (e) => {
        props.setTextData(e.keyCode)
        props.setTypingWord(e.target.value)
        if (e.keyCode === 13){
            textClear()
        }
    }
    const setTextReset = () => {
        props.setTextData("")
    }
    return ( 
        <>
            <div>
                <input type="text" name="typeingbox" className="typing-box"
                    // onCompositionStart={props.startComposition}
                    // onCompositionEnd={props.endComposition}
                    onKeyDown={setTextData}
                    onKeyUp={setTextReset}
                    ref={inputRef}
                    >
                    </input>
            </div>
        </>
     );
}

export default TypeingBox;