import React from "react";
import { CgPen, CgCloseR } from "react-icons/cg";

function List(props) {
  return (
    <div className="w-full border-b-blace-1 mt-2 p-1 flex justify-between items-center shadow-xl bg-slate-100">
      <div className="flex items-center gap-1">
        <input type="checkbox" id="check" />
        <label for="check">{props.val}</label>
      </div>
      <div className="flex gap-2">
      <button onClick={e=>{props.editVal(props.index)}}>
        <CgPen />
      </button>
        <button onClick={e=>{props.deletVal(props.index)}}>
          <CgCloseR />
        </button>
      </div>
    </div>
  );
}
export default List;
