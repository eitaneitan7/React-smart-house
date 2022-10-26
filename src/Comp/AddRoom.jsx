import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './addRoom.css';

export default function AddRoom(props) {

  const [name,setName]=useState('');
  const [color,setColor]=useState('');
  const [type,setType]=useState('default');




  const nav = useNavigate();

  const checkRoom = ()=>{
    let room =document.getElementById('room')
    if(room.value === "default" || name < 1 ){
      alert('ERROR');
      nav('/')
   
  } else{
      alert('A Room Has Been Added')
      props.add(name, color, type);
      nav('/')
  }
 }



  return (
    <div>

<select onChange={(e)=>{setType(e.target.value)}} className="btn" id="room" name="rooms">
  <option value="default">Choose a room</option>
  <option value="Bedroom">Bedroom</option>
  <option value="Bathroom">Bathroom</option>
  <option value="Kitchen">Kitchen</option>
</select>
<br /><br />
<input className="btn" onChange={(e)=>{setName(e.target.value) }} type="text" maxLength='5' minLength='1' placeholder='Enter A Room Name'/>
<br /><br />
<input className="btn" onChange={(e)=>{setColor(e.target.value) }} type="color" />
<br /><br />
<button className="btn" onClick={checkRoom}>Create</button>
 </div>
  )
}
