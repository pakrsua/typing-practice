import { useState } from "react";

function MenuModal(props) {

    const menuClickHandle = () =>{
        props.setMenu(!props.menu)
    }

    const yomiganaHandle = () =>{
        props.setYomigana(!props.yomigana)
    }
    const alpabetHandle = () => {
        props.setAlpabet(!props.alpabet)
    }
    
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
                             onChange={yomiganaHandle}/>요미가나 숨기기</span><br></br>
                            <span><input id="alpabet" type="checkbox" 
                             onChange={alpabetHandle}/>알파벳 가이드 숨기기</span>
                        </form>
                    </div>
                </div>
            </div>
        </>
     );
}

export default MenuModal;