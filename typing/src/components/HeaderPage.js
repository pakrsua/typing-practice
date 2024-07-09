import React from 'react';

function HeaderPage(props) {
    const menuClickHandle = () => {
        props.setMenu(!props.menu)
    }

    return ( 
        <>
            <div className='header-box'>
                <div>
                    TYPING
                </div>
                <div onClick={menuClickHandle}>
                    메뉴
                </div>
            </div>
        </>
     );
}

export default HeaderPage;