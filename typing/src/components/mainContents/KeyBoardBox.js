import { useEffect, useState } from "react";

function KeyBoardBox(props) {
    const [keyCode, setKeyCode] = useState("");
    const [keyOpen, setKeyOpen] = useState(false)

    const openButtonHandle = () => {
        setKeyOpen(!keyOpen)
    } 
    
    useEffect(()=>{
        setKeyCode(props.textData)
    },[props])
    return ( 
        <>
            <div>
                <div className={keyOpen ? "keyboard-box" : "keyboard-box-close"}>

                    <div>
                        <div className="n-key">
                            `~
                        </div>
                        <div className="n-key">
                            1
                        </div>
                        <div className="n-key">
                            2
                        </div>
                        <div className="n-key">
                            3
                        </div>
                        <div className="n-key">
                            4
                        </div>
                        <div className="n-key">
                            5
                        </div>
                        <div className="n-key">
                            6
                        </div>
                        <div className="n-key">
                            7
                        </div>
                        <div className="n-key">
                            8
                        </div>
                        <div className="n-key">
                            9
                        </div>
                        <div className="n-key">
                            10
                        </div>
                        <div className="n-key">
                            -
                        </div>
                        <div className="n-key">
                            =
                        </div>
                        <div className="backspace">
                            Backspace
                        </div>
                    </div>
                    <div>
                        <div className="tab">
                            Tab
                        </div>
                        <div className={keyCode === "KeyQ" ? 'n-click' : 'n-key'}>
                            ㅂ
                        </div>
                        <div className={keyCode === "KeyW" ? 'n-click' : 'n-key'}>
                            ㅈ
                        </div>
                        <div className={keyCode === "KeyE" ? 'n-click' : 'n-key'}>
                            ㄷ
                        </div>
                        <div className={keyCode === "KeyR" ? 'n-click' : 'n-key'}>
                            ㄱ
                        </div>
                        <div className={keyCode === "KeyT" ? 'n-click' : 'n-key'}>
                            ㅅ
                        </div>
                        <div className={keyCode === "KeyY" ? 'n-click' : 'n-key'}>
                            ㅛ
                        </div>
                        <div className={keyCode === "KeyU" ? 'n-click' : 'n-key'}>
                            ㅕ
                        </div>
                        <div className={keyCode === "KeyI" ? 'n-click' : 'n-key'}>
                            ㅑ
                        </div>
                        <div className={keyCode === "KeyO" ? 'n-click' : 'n-key'}>
                            ㅐ
                        </div>
                        <div className={keyCode === "KeyP" ? 'n-click' : 'n-key'}>
                            ㅔ
                        </div>
                        <div className="n-key">
                            []
                        </div>
                        <div className="n-key">
                            
                        </div>
                        <div className="tab">
                            \ |
                        </div>
                    </div>
                    <div>
                        <div className="caps-lock">
                            Caps Lock
                        </div>
                        <div className={keyCode === "KeyA" ? 'n-click' : 'n-key'}>
                            ㅁ
                        </div>
                        <div className={keyCode === "KeyS" ? 'n-click' : 'n-key'}>
                            ㄴ
                        </div>
                        <div className={keyCode === "KeyD" ? 'n-click' : 'n-key'}>
                            ㅇ
                        </div>
                        <div className={keyCode === "KeyF" ? 'n-click' : 'n-key'}>
                            ㄹ
                        </div>
                        <div className={keyCode === "KeyG" ? 'n-click' : 'n-key'}>
                            ㅎ
                        </div>
                        <div className={keyCode === "KeyH" ? 'n-click' : 'n-key'}>
                            ㅗ
                        </div>
                        <div className={keyCode === "KeyJ" ? 'n-click' : 'n-key'}>
                            ㅓ
                        </div>
                        <div className={keyCode === "KeyK" ? 'n-click' : 'n-key'}>
                            ㅏ
                        </div>
                        <div className={keyCode === "KeyL" ? 'n-click' : 'n-key'}>
                            ㅣ
                        </div>
                        <div className="n-key">
                            ;
                        </div>
                        <div className="n-key">
                            ''
                        </div>
                        <div className="enter">
                            Enter
                        </div>
                    </div>
                    <div>
                        <div className="shift">
                            Shift
                        </div>
                        <div className={keyCode === "KeyZ" ? 'n-click' : 'n-key'}>
                            ㅋ
                        </div>
                        <div className={keyCode === "KeyX" ? 'n-click' : 'n-key'}>
                            ㅌ
                        </div>
                        <div className={keyCode === "KeyC" ? 'n-click' : 'n-key'}>
                            ㅊ
                        </div>
                        <div className={keyCode === "KeyV" ? 'n-click' : 'n-key'}>
                            ㅍ
                        </div>
                        <div className={keyCode === "KeyB" ? 'n-click' : 'n-key'}>
                            ㅠ
                        </div>
                        <div className={keyCode === "KeyN" ? 'n-click' : 'n-key'}>
                            ㅜ
                        </div>
                        <div className={keyCode === "KeyM" ? 'n-click' : 'n-key'}>
                            ㅡ
                        </div>
                        <div className="n-key">
                            ,
                        </div>
                        <div className="n-key">
                            .
                        </div>
                        <div className="n-key">
                            /
                        </div>
                        <div className="shift">
                            Shift
                        </div>
                    </div>
                    <div>
                        <div className="option">
                            Ctrl
                        </div>
                        <div className="option">
                            Option
                        </div>
                        <div className="option">
                            Alt
                        </div>
                        <div className="space">
                            Space
                        </div>
                        <div className="option">
                            Alt
                        </div>
                        <div className="option">
                            Fn
                        </div>
                        <div className="option">
                            Ctrl
                        </div>
                    </div>
                </div>
                <div className={keyOpen ? "keyboard-handle" : "keyboard-handle-close"}
                    onClick={openButtonHandle}>
                    {
                        keyOpen ? 
                        <span>키보드 숨기기</span> : <span>키보드 보이기</span>
                    }
                </div>
            </div>
            
        </>
     );
}

export default KeyBoardBox;