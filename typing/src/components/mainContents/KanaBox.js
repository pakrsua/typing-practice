function KanaBox(props) {
    if(props.number < Object.keys(props.word).length){
        return ( 
            <>
                {props.word[props.number].value}
            </>
         );
    }
    else{
        return ( 
            <>
                <div>
                    
                </div>
            </>
         );
    }
}

export default KanaBox;