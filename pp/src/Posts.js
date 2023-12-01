import { VscGlobe} from "react-icons/vsc"
export const Posts = () => {
  return <button onClick={()=> {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=> response.json())
    .then(data=>console.log(data))
    .catch(error => console.error(error))
  }}> <VscGlobe/>Traer datos </button>;
//   material ui importante que ya trae cosas de react a hechas

  {
    /* <li>Titulo de una publicacion </li>
        <li>Tistulo de una publicacion 2</li> */
  }
};
