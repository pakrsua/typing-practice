import { useEffect, useState } from "react";

function MenuModal(props) {
    const [browser, setBrowser] = useState()

    const menuClickHandle = () =>{
        props.setMenu(!props.menu)
    }
    const yomiganaHandle = () =>{
        props.setYomigana(!props.yomigana)
    }
    const alpabetHandle = () => {
        props.setAlpabet(!props.alpabet)
    }
    const speakHandle = () => {
        props.setWordSpeak(!props.wordSpeak)
    }

    useEffect(()=>{
        const user = navigator.userAgent;
        setBrowser("web")
    
        if ( user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1 ) {
            setBrowser("mobile")
        }
    },[])
    
    return ( 
        <>
            <div>
                <div className={props.menu ? "menu-modal-back-ground" : "menu-modal-back-ground-close" }
                onClick={menuClickHandle}>

                </div>
                <div className={props.menu ? "menu-modal" : "menu-modal-close"}>
                    <div>
                        메뉴
                    </div>
                    <div className="menu-check-box">
                        <form className="text-menu-select">
                            <span><input id="yomigana" type="checkbox" 
                             onChange={yomiganaHandle}/>요미가나 숨기기</span>
                            <span><input id="alpabet" type="checkbox" 
                             onChange={alpabetHandle}/>알파벳 가이드 숨기기(준비중)</span>
                             {browser==="web"?<span><input id="speak" type="checkbox"
                             onChange={speakHandle}/>일본어 읽기</span>:
                             <span><input id="speak" type="checkbox" disabled
                             onChange={speakHandle}/>일본어 읽기</span>}
                             

                        </form>
                    </div>
                </div>
            </div>
        </>
     );
}

export default MenuModal;