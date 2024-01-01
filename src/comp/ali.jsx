import React from "react";
import { useState } from "react";
import"./App.css"


function APP(){
  const [num, setNum ] = useState (0)
  const [name, setName] = useState("ahmed")
  function changeNUM(){
    setNum(num+1)
  }
  function changeName(){
    setName("basit","ali","wasif")
  }

return(

<div>
  <h1>{name}</h1>
  <p>Its change name</p>
<button onClick={changeName}>change the name</button>
<h1>{num}</h1>
<p>Its changing num</p>

<button onClick={changeNUM}>its changing</button>



</div>



)

}

export default APP






