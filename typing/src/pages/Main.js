import React, { useState } from 'react';
import pages from '../styles/index.css'

import Content from '../components/Content';
import HeaderPage from '../components/HeaderPage';
import MenuModal from '../components/mainContents/MenuModal';

function Main() {
    const [menu, setMenu] = useState(false)
    const [yomigana, setYomigana] = useState(true)
    const [alpabet, setAlpabet] = useState(true)

    return ( 
        <div className='container'>
            <HeaderPage menu={menu} setMenu={setMenu}></HeaderPage>
            <MenuModal menu={menu} setMenu={setMenu}
                yomigana={yomigana} setYomigana={setYomigana}
                alpabet={alpabet} setAlpabet={setAlpabet}></MenuModal>
            <Content
                yomigana={yomigana} setYomigana={setYomigana}
                alpabet={alpabet} setAlpabet={setAlpabet}></Content>
        </div>
     );
}

export default Main;