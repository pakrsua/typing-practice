import React, { useEffect, useRef, useState } from 'react';
import sample from "../datas/sample"
import jlpt_5 from "../datas/jlpt_5.json"
import jlpt_4 from "../datas/jlpt_4.json"
import TypeingBox from './mainContents/TypeingBox';
import TextBox from './mainContents/TextBox';
import MenuBox from './mainContents/MenuBox';
import KeyBoardBox from './mainContents/KeyBoardBox';
import MenuModal from './mainContents/MenuModal';


function Content(props) {
    const [number, setNumber] = useState(0);
    const [wordNum, setwordNum] = useState(748);
    const [oNum, setONum] = useState(0);
    const [xNum, setXNum] = useState(0);
    const inputRef = useRef(null)
    const [textData, setTextData] = useState(null);
    const [composing, setComposition] = useState(false)
    const startComposition = () => setComposition(true);
    const endComposition = () => setComposition(false)
    const [level, setLevel] = useState(5);
    const [word, setWord] = useState(jlpt_5)
    const [typingWord, setTypingWord] = useState()

    const textClear = () => {
        inputRef.current.value = null;
    }
    const handlePress = (e) => {
        if(e.keyCode === 13){
            // console.log(e.target.value)
            // console.log(sample[number])
            // if(e.target.value === sample[number].value){
            if(e.target.value === word[number].value){
                setONum(oNum + 1)
                console.log(oNum)
            }
            if(composing){

            }
        }
    }

    useEffect(()=>{
        if(textData === 13){
            console.log("typing : ", typingWord)
            console.log("word : ", word[number].value)
            if(typingWord === word[number].value){
                setONum(oNum + 1)
            }
            setNumber(Math.floor(Math.random()*wordNum))
            
        }
    },[textData])
    
    useEffect(()=>{
        if(level === 5){
            setwordNum(748)
            setWord(jlpt_5)
            setNumber(Math.floor(Math.random()*wordNum))
        }else{
            setwordNum(712)
            setWord(jlpt_4)
            setNumber(Math.floor(Math.random()*wordNum))
        }
    },[level])

    return (
        <>
            <div className='content-box'>
                <MenuBox setLevel={setLevel} level={level}></MenuBox>
                <div>{oNum}</div>
                <TextBox jlpt_5={word} number={number} yomigana={props.yomigana} alpabet={props.alpabet}></TextBox>
                <TypeingBox setTextData={setTextData} setTypingWord={setTypingWord} textData={textData} startComposition={startComposition} endComposition={endComposition}></TypeingBox>
                <KeyBoardBox textData={textData}></KeyBoardBox>
            </div>
        </>
    );
}

export default Content;