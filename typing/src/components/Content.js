import React, { useEffect, useRef, useState } from 'react';
import jlpt_5 from "../datas/jlpt_5_updated.json"
import jlpt_4 from "../datas/jlpt_4.json"
import jlpt_3 from "../datas/jlpt_3.json"
import jlpt_2 from "../datas/jlpt_2.json"
import jlpt_1 from "../datas/jlpt_1.json"
import hiragana from "../datas/hiragana.json"
import gatakana from "../datas/gatakana.json"
import TypeingBox from './mainContents/TypeingBox';
import TextBox from './mainContents/TextBox';
import MenuBox from './mainContents/MenuBox';
import KeyBoardBox from './mainContents/KeyBoardBox';
import MenuModal from './mainContents/MenuModal';
import TypingType from './mainContents/TypingType';
import KanaTypeBox from './mainContents/KanaTypeBox';
import KanaBox from './mainContents/KanaBox';


function Content(props) {
    const [number, setNumber] = useState(0);
    const [wordNum, setwordNum] = useState(2);
    const [oNum, setONum] = useState(0);
    const [xNum, setXNum] = useState(0);
    const inputRef = useRef(null)
    const [textData, setTextData] = useState(null);
    const [composing, setComposition] = useState(false)
    const startComposition = () => setComposition(true);
    const endComposition = () => setComposition(false)
    const [level, setLevel] = useState(6);
    const [word, setWord] = useState(hiragana)
    const [typingWord, setTypingWord] = useState()
    const [typingTypeData, setTypingTypeDate] = useState(0)
    const [kanaTypeData, setKanaTypeData] = useState(0)


    const speech = (txt) => {
        const lang = "ja-JP";
        const utterThis = new SpeechSynthesisUtterance(txt);
    
        utterThis.lang = lang;

        utterThis.rate = 0.7
    
        // utterance를 재생(speak)한다.
        window.speechSynthesis.speak(utterThis);

      };

    const textClear = () => {
        inputRef.current.value = null;
    }
    const handlePress = (e) => {
        if(e.keyCode === 13){
            if(e.target.value === word[number].value){
                setONum(oNum + 1)
            }
            if(composing){

            }
        }
    }

    useEffect(()=>{
        if(textData === 13){
            if(word[number].value.includes(typingWord)){
                setONum(oNum + 1)
            }
            setNumber(Math.floor(Math.random()*wordNum))
            // setNumber(21)
        }

    },[textData])

    useEffect(()=>{
        if(props.wordSpeak){
            if(number > wordNum){
                speech(word[0].pron)
            }else{
                speech(word[number].pron) 
                console.log(word[number].pron)
            }
        }

    },[number])
    
    useEffect(()=>{
        if(level === 5){
            setwordNum(747)
            setWord(jlpt_5)
            setNumber(Math.floor(Math.random()*wordNum))
        }else if(level === 4){
            setwordNum(1036)
            setWord(jlpt_4)
            setNumber(Math.floor(Math.random()*wordNum))
        }else if(level === 3){
            setwordNum(1545)
            setWord(jlpt_3)
            setNumber(Math.floor(Math.random()*wordNum))
        }else if(level === 2){
            setwordNum(2498)
            setWord(jlpt_2)
            setNumber(Math.floor(Math.random()*wordNum))
        }else if(level === 1){
            setwordNum(3244)
            setWord(jlpt_1)
            setNumber(Math.floor(Math.random()*wordNum))
        }else if(level === 6){
            setWord(gatakana)
            setwordNum(38)
            setNumber(Math.floor(Math.random()*wordNum))
        }else if(level === 7){
            setWord(hiragana)
            setwordNum(38)
            setNumber(Math.floor(Math.random()*wordNum))
        }
        console.log(word)
    },[level, typingTypeData])
    // console.log(level,number,word.length, word)
    return (
        <>
            <div className='content-box'>
                <TypingType typingTypeData={typingTypeData} setTypingTypeDate={setTypingTypeDate} setLevel={setLevel}></TypingType>
                <>
                    {
                        typingTypeData === 0 ?
                        <>
                            <KanaTypeBox kanaTypeData={kanaTypeData} setKanaTypeData={setKanaTypeData} level={level} setLevel={setLevel} setWord={setWord}></KanaTypeBox>
                            <KanaBox word={word} number={number} yomigana={props.yomigana} alpabet={props.alpabet}></KanaBox>
                        </>
                         :
                         <> 
                            {
                                word.length === 38 ?
                                <>
                                <MenuBox setLevel={setLevel} level={level}></MenuBox>
                                <TextBox word={jlpt_5} number={number} yomigana={props.yomigana} alpabet={props.alpabet}></TextBox>
                                </> :
                                <>
                                <MenuBox setLevel={setLevel} level={level}></MenuBox>
                                <TextBox word={word} number={number} yomigana={props.yomigana} alpabet={props.alpabet}></TextBox>
                                </>
                            }
                            
                         </>        
                    }
                </>          
                <TypeingBox setTextData={setTextData} setTypingWord={setTypingWord} textData={textData} startComposition={startComposition} endComposition={endComposition}></TypeingBox>
                {/* <KeyBoardBox textData={textData}></KeyBoardBox> */}
                
            </div>
        </>
    );
}

export default Content;