import React, { useState, useEffect } from "react";
import ReactDom from "react-dom/client";
import { Greeting, UserCard } from "./Greeting1";
import { Greeting1, UserCard1 } from "./Greeting2";
import Product, { NavBar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";
//hay que importar useState desde react

const root = ReactDom.createRoot(document.getElementById("root"));

const handleChange = (e) => {
  console.log(e.target.value);
};

// const users = [
//   {
//     id: 1,
//     name: "juan manuelo",
//     img: "https://robohash.org/usuario 1",
//   },
//   {
//     id: 2,
//     name: "joe",
//     image: "https://robohash.org/usuario 2",
//   },
//   {
//     id: 3,
//     name: "joelin",
//     image: "https://robohash.org/usuario 3",
//   },

// ];

//OJITO A ESTO DE LOS ESTADOS QUE ESTA CARNUDO
// function Counter() {
//   const [counter,setCounter]= useState(0)

//   return (
//     <div>
//       <h1>Counter : {counter}</h1>
//       <button onClick={()=> {
//        setCounter(counter + 1)
//       }}>
//         Sumar

//       </button>
//       <button onClick={()=>{
//         setCounter(counter - 1)
//       }}>
//         Restar
//       </button>
//       <button onClick={()=>{
//         setCounter(12)

//       }}  >
//         Resetear

//       </button>
//     </div>
//   );
// }

function Counter() {
  const [mensaje, setMensaje] = useState("");
  const [counter,setCounter]= useState(0)

  useEffect(function () {
    console.log("render");
  }, [counter]); //con esto le decimos que solo se realice una sola vez el render con el arreglo vacio
  //lo que este dentro del arreglo es lo que va a contar 
  return (
    <div>
      <input onChange={(e) => setMensaje(e.target.value)} />
      <button
        onClick={() => {
          alert("el mensaje es: " + mensaje);
        }}
      >
        save
      </button>
      <hr/>
      <h1>Counter : {counter}  </h1>
      <button onClick={()=> {
        setCounter(counter+1)
      }}>
        incrementar
      </button>
    </div>
  );
}

root.render(
  <>
    <Counter />
    {/* useState */}
    {/* map hace una copia del array sin modificarlo y puede obtener 2 parametros el primero el valro  y el segundo la posicion del array */}
    {/* {users.map((user, index) => {
      return (
        <div key={index}>
          <h1 > {user.name}</h1>
          <img src={user.image || user.img } alt="imagen" />
        </div>
      );
    })}

    <Posts /> */}
    {/* <TaskCard ready={false} />
    <Saludar />
    <Button text="saludar" />
    <form
      onSubmit={(e) => {
        e.preventDefault(alert("enviado"));
      }}
    >
      <h1> Registro usuario </h1>
      <button> Enviar</button>
    </form> */}
    {/* <input onChange={handleChange}/> */}
    {/* <input onClick={function() {
 alert('click al input')
}}/> */}
    {/* <Button text="Click me "/>
  <Button text="pay me "/>
  <Button name="davidsito"/> */}
    {/* <Greeting />
    <Greeting />
    <Greeting />
    <UserCard/>
    <Product name="Laptop" price={1900}/>
   <NavBar/> */}
    {/* para pasar parametros nombre y valor */}
    {/* <Greeting1 title="hola"/> */}
    {/* <Greeting1 x="aios"/> */}
    {/* <Greeting1 y={30}/> */}
    {/* <Greeting1 z={true}/> */}
    {/* <Greeting1 a={[1,2,3]}/> */}
    {/* <Greeting1 title="hola mundo" name="david"/>
   <Greeting1 title="hola react"/> 
   LOS DATOS QUE PUEDO MANDAR EN LAS ETIQUETAS 
   */}
    {/* <UserCard1
      name="Ryan rayan"
      amount={300}
      married={true}
      points={[99, 20, 11]}
      address={{ street: "12 main", city: "niuyork" }}
      greet={function(){alert('holita')}}
    /> */}
  </>
);
