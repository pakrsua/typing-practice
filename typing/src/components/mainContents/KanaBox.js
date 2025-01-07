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
                {props.word[0].value}
            </>
         );
    }
}

export default KanaBox;