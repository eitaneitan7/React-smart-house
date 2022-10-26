import './App.css';
import {HashRouter,Routes,Route} from 'react-router-dom'
import Main from './Comp/Main';
import AddRoom from './Comp/AddRoom';
import Rooms from './Comp/Rooms';
import Header from './Comp/Header';
import{useState} from 'react';


function App() {
const [room,setRoom]=useState([]);
//------------------------------------------------------------
  const add = (n, c, t) => {
  setRoom([...room,{name:n, color:c,type:t, product:[]}])
  };
//------------------------------------------------------------
  
// הוספת מוצר  וקבלת המצב שלו כבוי או דלוק
const addProduct =(index,typeOfProduct)=>{
  let temp = {condition:false,type:typeOfProduct}
  room[index].product.push(temp)
  setRoom([...room])
  }
  // עדכון המצב של המוצרים כבוי או דולק 
  const changeCondition =(indexOfRoom,IndexOfProduct)=>{
  room[indexOfRoom].product[IndexOfProduct].condition  = !room[indexOfRoom].product[IndexOfProduct].condition
  setRoom([...room])
  }

  return (
    <div className="App"  >
      <Header/>
      <HashRouter>
      

      <Routes>

      <Route path='/' element={<Main room={room}/>}/>

      <Route path='/AddRoom' element={<AddRoom add={add}/>}/>
      {room.map((val,index)=>{   
        return <Route path={`room${val.name}`} element={<Rooms changeCondition={changeCondition} index={index} type={val.type} product={val.product} addProduct={addProduct} name={val.name} />}/>
      })}                  
                           (//backtick (`) andd $ sign to add path with the name of the room)

      </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
