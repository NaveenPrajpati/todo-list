import React, { ChangeEvent, Dispatch, SetStateAction, useState, useEffect, useRef } from "react";
import { CgCloseR } from "react-icons/cg";
import { AiFillEdit } from "react-icons/ai";
import { deleteTodo, getTodo, updateTodo } from "../service/todoService";
import { data } from "../App";
import { listP } from "../App";

interface pros {
  list: listP[]
  setList: Dispatch<SetStateAction<listP[]>>
}


function List({ list, setList }: pros) {
  const [change, setChange] = useState<string>('')
  const [ind, setInd] = useState<string>('')
  const [edit, setEdit] = useState(false)
  const editRef=useRef<HTMLInputElement>(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChange(event.currentTarget.value);
  };

  const handleKeyboard: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      let data: data = { text: change }
      async function updatText() {
        await updateTodo(ind, data)
          .then(res => {
            setList(res.data)
          })
          .catch(error => console.log(error))
      }
      updatText()

      setEdit(false)
    }
  };

  useEffect(() => {
    async function getAlltodo() {
      await getTodo()
        .then(res => {
          setList(res.data)
        })
        .catch(error => console.log(error))
    }
    getAlltodo()

  }, [edit])


  async function deleteVal(key: string) {
    setEdit(false)
    await deleteTodo(key)
      .then(res => {
        setList(res.data)
      })
      .catch(error => console.log(error))
  }

  function editVal(key: string, text: string) {
    setInd(key)
    setChange(text)
    setEdit(true)
  

  }
  useEffect(() => {
    if (edit && editRef.current) {
      editRef.current.focus();
    }
  }, [edit]);



  return (
    <div className="">

      {list?.map((li, index) => (
        <div key={index} className="w-full border-b-blace-1 mt-2 p-1 flex justify-between items-center shadow-white shadow-2xl  bg-slate-200 rounded-lg">
          <div className="flex items-center gap-1">
            {/* <input type="checkbox" id="check" /> */}
            {!(edit && ind === li._id) && <p className="font-semibold text-slate-600">{li.text}</p>}
            {(edit && ind === li._id) && <input type="text" ref={editRef} name="textValue" value={change} className="px-1  rounded-md outline-none font-semibold text-slate-600 w-[300px]" onChange={handleChange} onKeyDown={handleKeyboard} />}
          </div>
          <div className="flex gap-2">
            <button onClick={() => editVal(li._id, li.text)}>
              <AiFillEdit />
            </button>
            <button type="button">
              <CgCloseR className="text-red-600" onClick={() => deleteVal(li._id)} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default List;
