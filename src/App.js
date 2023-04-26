
import { useState } from "react";
import List from "./comp/List";

function App() {
  const [list, setList] = useState([]);
  const [edval,setEdVal]=useState('');
  const [txt,setTxt]=useState('');
let edit='';
  function save(event) {
    if (event.key === "Enter" && event.target.value !== "") {
      setList([event.target.value, ...list]);
      event.target.value = "";
    }
  }

  function deletVal(key) {
    let newArr = [...list];
    newArr.splice(key, 1)
    setList([...newArr]);
  }

  function editVal(key){
    console.log(list[key])

    setEdVal(list[key])
    let newArr=[...list]
    
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
        {list.map((tar, i) => {
          return <List val={tar} index={i} deletVal={deletVal} editVal={editVal}></List>;
        })}

        <button className="bg-red-400 py-1 px-2 rounded-md absolute right-0 bottom-0 mr-1 mb-1">
          Delete Marked
        </button>
      </div>
    </div>
  );
}

export default App;
