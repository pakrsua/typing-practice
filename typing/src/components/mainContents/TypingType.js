function TypingType(props) {
    const handleChangeType = (e) =>{
        props.setTypingTypeDate(e)
        if (e === 1){
            props.setLevel(5)
        }
        
    }
    return ( 
        <>
            <div className="typing-type-box">
                <div  onClick={()=>handleChangeType(0)}>
                    가나
                </div>
                <div onClick={()=>handleChangeType(1)}>
                    단어
                </div>
            </div>
        </>
     );
}

export default TypingType;