import axios from 'axios'
import { data } from '../App';
const BaseUrl='http://localhost:4000/todo';




 export const addTodo=(text:data)=>{
        return axios.post(BaseUrl+"",text);
    }
 export const getTodo=()=>{
        return axios.get(BaseUrl);
    }
 export const deleteTodo=(id:string)=>{
        return axios.delete(BaseUrl+`/${id}`);
 }
export const updateTodo=(id:string,text:data)=>{
        return axios.put(BaseUrl+`/${id}`,text);
    }




