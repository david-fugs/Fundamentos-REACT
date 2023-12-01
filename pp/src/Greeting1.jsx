
export  function Greeting() {
    function add(x, y) {
      return x + y;
    }
    const user = {
        //los objetos no se pueden mostrar en react del html pero se puede cambiar con JSON
        fistName: "Joe",
        lastName: "Ray",
      },
      married = true;
    // return <h1>{JSON.stringify(user)}</h1>
    return (
      <>
       <h1>{married.toString()}</h1>
        {/* para cambiar el true por string
       
        <h3> {user.fistName}</h3>
        <h3> {user.lastName}</h3>
        <h1>{add(1, 50)}</h1>, */}
      </>
    );
    //   const married = true;
  
    // if (married ) {
    //     return <h1>Estoy casado</h1>
    // }
    // else {
    //     return <h1>no estoy</h1>
    // }
    //para interpretar codigo se colocan {}
    //operador ternario
    //   return <h1> {married ? "estoy casado 😀" : "no estoy 😅	"}</h1>;


    
  }
  export function UserCard(){
    return <h1>User Card</h1>
  }