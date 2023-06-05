
import React, { ChangeEvent, useState } from "react";
import List from "./comp/List";
import { addTodo } from "./service/todoService";


export type data={
  text:string
}

export interface listP{
  _id:string
  text:string
}

function App() {
  const [list, setList] = useState<listP[]>([]);
 async function save(event:React.KeyboardEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
  if (event.key === "Enter" && value !== "") {
    let data:data={text:value}
    addTodo(data)
      .then(res=>{
      setList(res.data)
      })
      .catch(error=>console.log(error))
    event.currentTarget.value = "";
  }
  }



  return (
    <div className="w-full h-[100vh] bg-slate-200">
        <h1 className="text-center font-bold text-2xl ">Todo List</h1>
      <div className="max-w-[400px] shadow-white bg-slate-900 p-5 mx-auto  h-[500px] overflow-y-auto relative shadow-inner">
       
        <input
          type="text"
          onKeyDown={save}
          placeholder="Enter Todo" 
          className="w-full mb-2  p-1 border-2 outline-none shadow-white shadow-2xl rounded-md font-semibold"
        ></input>
   
  <List list={list} setList={setList}/>


      </div>
    </div>
  );
}

export default App;
