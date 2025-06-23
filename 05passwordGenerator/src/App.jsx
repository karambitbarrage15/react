import { useState,useCallback ,useEffect,useRef} from 'react'

function App() {
  const [length,setLength]=useState(8);
  const [numberAllowed,setnumberAllowed]=useState(false);
  const [charAllowed,setcharAllowed]=useState(false);
  const [password,setpasswoord]=useState("");
  //ref hook
  const passwordRef=useRef(null); 
  const cpoyPasswordToClipBoard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,8);
    window.navigator.clipboard.writeText(password);

  },[password])
  const passwordGenerator=useCallback(()=>{
    let pass="";

    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*()_+=-{}][:;',./?><`~";

    for(let i=1;i<=length;i++){
      let chara =Math.floor(Math.random()*str.length+1);//generating random no
      pass+=str.charAt(chara);

    }

    setpasswoord(pass);
     
  },[length,numberAllowed,charAllowed,setpasswoord])
 //passwordGenerator();
 useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator]);
  return (
    <>
    <div className="w-full max-w-md mx-auto rounded -lg shadow-md px-4 my-8   bg-gray-800 text-orange-500">
    <h1 className='text-white text-center my-3'>Password Generator</h1>
<div className="flex shadow rounded-lg bg-white overflow-hidden mb-4">
  <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef} />
  <button onClick={cpoyPasswordToClipBoard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-9'>copy</button>
  </div>  
  
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-cneter fap-x-1'>
<input type="range"
min={8}
max={100}
value={length}
className='cursor-pointer py-1.5' 
onChange={(e)=>{
  setLength(e.target.value)

}}
/>
<label>Length:{length}</label>
    </div>
    <div className='flex items-cneter fap-x-1'>
    <input type="checkbox"
defaultChecked={numberAllowed}
id="numberInput"
onChange={()=>{
  setnumberAllowed((prev)=>!prev)

}}
/>
<label htmlFor='numberInput'>Numbers</label>
    </div>
    <div className='flex items-cneter fap-x-1'>
      <input type="checkbox"
      defaultChecked={charAllowed}
      id='charInput'
      onChange={()=>{
        setcharAllowed((prev)=>!prev)
      }
}
      />
      <label htmlFor='charInput'>Characters</label>
    </div>
  </div>
    </div>
     
    </>
  )
} 

export default App
