import React,{useState} from "react";
import TodoList from "./components/todolist";
import Additem from "./components/additem";

import "./App.css";
const App = () =>{

const [listitems,setListItems] = useState( []);
    
//      [
//          { itemid : Math.trunc (Math.random()*100+1) , itemname:"Buy Food"},
//          { itemid : Math.trunc (Math.random()*100+1) , itemname:"Watch Tv"},
//          { itemid : Math.trunc (Math.random()*100+1) , itemname:"Study"},
//          { itemid : Math.trunc (Math.random()*100+1) , itemname:"PlayGames"},

//     ]
// );

    const addItemHandler = (newitem) =>{
        
        setListItems ((previousList)=>{
              return previousList.concat(newitem);
        });
        // listitems.push(newitem);
        // console.log(listitems);

    };
    const name = "MERN";

    return ( 
        <div className="container">
            <h1>{name}'s To-Do List</h1>

            <Additem onAddItem = {addItemHandler}/>   
           <TodoList list ={listitems} />
        </div>
    );
   
    
};

export default App; 


