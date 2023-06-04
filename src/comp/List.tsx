import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import {  CgCloseR } from "react-icons/cg";
import {  AiFillEdit} from "react-icons/ai";

interface pros{
  list:Array<string>
  setList:Dispatch<SetStateAction<string[]>>
}



function List ({list,setList}:pros) {
const [change, setChange] = useState('')
const[ind,setInd]=useState<number>(0)
const[edit,setEdit]=useState(false)

const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  setChange(event.currentTarget.value);
};

const handleKeyboard: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
  if (event.key === 'Enter') {
    setList((prevList) => {
      const newList = [...prevList];
      newList[ind] = change;
      return newList;
    });

    setEdit(false)
  }
};



  function deleteVal( key: number) {
    setEdit(false)
    let newArr = [...list];
    newArr.splice(key, 1);
    setList(newArr);
  }

  function editVal(key: number,text:string){
setInd(key) 
setChange(text)
setEdit(true)
   
    let newArr=[...list]
    
  }

  return (
    <div className="">

    {list?.map((li,index)=>(
      <div key={index} className="w-full border-b-blace-1 mt-2 p-1 flex justify-between items-center shadow-xl bg-slate-100">
      <div className="flex items-center gap-1">
        <input type="checkbox" id="check" />
        {!(edit && ind===index ) && <p className="font-semibold text-slate-600">{li}</p> }
     {(edit && ind===index ) && <input type="text" name="textValue" value={change} className="px-1 w-full rounded-md outline-none font-semibold text-slate-600" onChange={handleChange}  onKeyDown={handleKeyboard}/>}
      </div>
      <div className="flex gap-2">
      <button onClick={()=>editVal(index,li)}>
        <AiFillEdit />
      </button>
        <button type="button">
          <CgCloseR className="text-red-400" onClick={()=>deleteVal(index)}/>
        </button>
      </div>
    </div>
    ))}
</div>
  );
}
export default List;
