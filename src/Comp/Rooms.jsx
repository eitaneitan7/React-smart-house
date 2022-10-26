import React,{useState} from 'react'
import AddProduct from './AddProduct'
import './Rooms.css';
// import AddRoom from './AddRoom';
// import AddProduct from './AddProduct'

export default function Rooms(props) {

  const [flag,setFlag] =useState(false)   // flag that changes if component will render or not, conditional rendering
  
  const change =()=>{
    setFlag(!flag)
}

  const show =()=>{
      if(flag === false){
  
          return <div> <AddProduct index={props.index} type={props.type} addProduct={props.addProduct} product={props.product}/></div>
      }else{
          return <button onClick={change}>+</button>
      }
  }

  
    return (
      <div>
  
  <h1 className='room-header'>Room Name: {props.name}</h1>
  <h1 className='room-header'>Room Type: {props.type}</h1>
  
  {show()}
  
  {/* החלק שבו יוצגו המוצרים לאחר בחירתם עם המצב שלהם כבוי או דולק */}
  
        {/* אם נכון?  : */}
  
  {/* לולאה שרצה על מערך המוצרים של החדר ומחזירה את המוצרים עם הצבע שלהם כאשר תמיד נבדק אם כבוי או דולק ובלחיצת כפתור זה משתנה */}
  {props.product.map((val,index)=>{
  
  let condition = val.condition ? 'green' : 'red'
  return (
  
  <button  className="btn" onClick={()=>{props.changeCondition(props.index,index)}}   style={{backgroundColor:condition}}>{val.type}</button>
  
  
  )
  
  })}
  
  
  
  
      </div>
    )
  }
