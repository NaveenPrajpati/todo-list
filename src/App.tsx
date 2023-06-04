
import React, { ChangeEvent, useState } from "react";
import List from "./comp/List";

function App() {
  const [list, setList] = useState<string[]>([]);
  const [edval,setEdVal]=useState<string | number>('');
  const [txt,setTxt]=useState('');
let edit='';
  function save(event:React.KeyboardEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
  if (event.key === "Enter" && value !== "") {
    setList([value, ...list]);
    event.currentTarget.value = "";
  }
  }



  return (
    <div className="w-full h-[100vh]">
      <div className="w-[400px] shadow-2xl p-5 mx-auto mt-[200px] min-h-[500px] relative">
        <input
          type="text"
          onKeyDown={save}
          placeholder="enter text" 
          className="w-full mb-2 bg-slate-100 p-1 rounded-md"
          
      
        ></input>
        <List list={list} setList={setList}/>

        <button className="bg-red-400 py-1 px-2 rounded-md absolute right-0 bottom-0 mr-1 mb-1">
          Delete Marked
        </button>
      </div>
    </div>
  );
}

export default App;
