import { useState } from 'react'
import './App.css'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const App=()=>{

  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [characterAllowed, setCharacterAllowes]=useState(false);
  const [password,setPassword]=useState("");

 
 useEffect(()=>{
  passwordGenerator();
 },[length,numberAllowed,characterAllowed]);


 const passwordRef=useRef(null);

 const copyToClipBoard= useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
 },
[password])

  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="123456890"
    if(characterAllowed) str+="!@#$%^&{}|"

    for(let i=1; i<=length;i++){
      let char= Math.floor(Math.random()* str.length +1);

      pass+=str.charAt(char);
    }

    setPassword(pass);
  },[length,numberAllowed,characterAllowed,setPassword])


  return (
    <>
    <div className='w-fit mx-auto shadow-md rounded-lg p-4 bg-gray-700 text-orange-500'>
      <div className='flex shadow-md rounded-lg overflow-hidden'>
        <input
        type='text'
        value={password}
        className='outline-none w-full p-2'
        placeholder='Password'
        readOnly
        ref={passwordRef}/>
        <button className='bg-blue-500 text-white px-3'
        onClick={copyToClipBoard}
        >Copy</button>
      </div>
      <div className='flex gap-2 items-center p2 m-1'>
        <div className='flex gap-1 items-center p-2'>
          <input 
          type='range'
          min={6}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}/>
          <label>Length:{length}</label>          
        </div>
        <div>
          <input
          type='checkbox'
          defaultChecked={numberAllowed}
          id="NumIn"
          onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
          <label>Number</label>
        </div>
        <div>
          <input
          type='checkbox'
          defaultChecked={characterAllowed}
          id="ChatIn"
          onChange={()=>{setCharacterAllowes((prev)=>!prev)}}/>
          <label>Character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
