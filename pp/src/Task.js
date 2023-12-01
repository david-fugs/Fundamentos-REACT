import "./tasks.css";

export function TaskCard({ ready }) {
  //para poner estilos o se pueden importar desde css
  // const cardStyles = { background: "#202020",color:"#fff",padding:"20px" };
  // const titleStyle = {fontWeight:"lighter"};

  return (
    // <div style={cardStyles}> para usar variables de js
    //   <h1 style={titleStyle}>Mi primera tarea</h1>
    <div className="card">
      <h1 className="card">Mi primera tarea</h1>


      {/* para poner estilos dependiendo de algo */}
      {/* <span style={ready ? { background: "green" } : { background: "red" }}>
        {ready === true ? "Tarea Realizada" : "Tarea pendiente"}
      </span> */}

      <span className={ready ? 'bg-green' : 'bg-red'}>
      {ready === true ? "Tarea Realizada" : "Tarea pendiente"}

      </span>


      <p> Tarea otra</p>
    </div>
  );
}
