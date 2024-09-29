function KanaTypeBox(props) {
    const handleChangeType = (e) =>{
        props.setKanaTypeData(e)
        if(e === 1){
            props.setLevel(6)
        }
        else{
            props.setLevel(7)
        }
        
    }
    
    return ( 
        <> 
            <div className="kana-box">
                <div className={props.kanaTypeData === 0 ? "menus-clicked" : "menus"} onClick={()=>handleChangeType(0)}>
                    히라가나
                </div>
                <div className={props.kanaTypeData === 1 ? "menus-clicked" : "menus"} onClick={()=>handleChangeType(1)}>
                    가타카나
                </div>
            </div>
        </>
     );
}

export default KanaTypeBox;