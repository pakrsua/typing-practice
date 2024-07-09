function MenuBox(props) {

    const handleChangeLevel = (e) =>{
        props.setLevel(e)
    }

    return ( 
        <>
            <div className="menu-box">
                <div className={props.level === 4 ? "menus-clicked" : "menus"} onClick={()=>handleChangeLevel(4)}>
                    JLPT4
                </div>
                <div className={props.level === 5 ? "menus-clicked" : "menus"} onClick={()=>handleChangeLevel(5)}>
                    JLPT5
                </div>
            </div>
        </>
     );
}

export default MenuBox;