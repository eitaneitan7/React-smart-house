  import React,{useState} from 'react'
  export default function AddProduct(props) {
  const [product,setProduct]=useState('Lamp')

  const checkProducts =() =>{
    let products = props.product // var which receives product from props, received from Room component, Which Room received it with props from App.js
    if (product === 'Stereo' && products.filter(x => x.type === 'Stereo').length > 0){
      alert('ERROR!! you can only have 1 stereo unit in each room')
    }else if( product === 'Heater' && props.type !== 'Bathroom'){
      alert('ERROR!! You can only have heater in the Bathrooms')
    }else if( products.length === 5){
      alert('ERROR!! You can only have up to 5 products in each room.')
    }else {
      props.addProduct(props.index, product)
    }
    props.show(false)
  }
 
  
    return (
      <div>
          
          <select className="btn" onChange={(e)=>{setProduct(e.target.value)}} >
              <option value="Lamp">Lamp</option>
              <option value="Stereo">Stereo</option>
              <option value="Air">Air</option>
              <option value="Heater">Heater</option>

          </select>
  
  <br /><br />
  <button className="btn" onClick={()=>{checkProducts() }}>Add Product</button>
  <br /><br />
      </div>
    )
  }

 