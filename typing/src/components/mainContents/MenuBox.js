function MenuBox(props) {

    const handleChangeLevel = (e) =>{
        props.setLevel(e)
    }

    return ( 
        <>
            <div className="menu-box">
                <div className={props.level === 1 ? "menus-clicked" : "menus"} onClick={()=>handleChangeLevel(1)}>
                    JLPT1
                </div>
                <div className={props.level === 2 ? "menus-clicked" : "menus"} onClick={()=>handleChangeLevel(2)}>
                    JLPT2
                </div>
                <div className={props.level === 3 ? "menus-clicked" : "menus"} onClick={()=>handleChangeLevel(3)}>
                    JLPT3
                </div>
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