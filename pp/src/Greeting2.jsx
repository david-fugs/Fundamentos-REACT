export function Greeting1({ title, name = "User" }) {
  console.log(title, name);
  return (
    <h1>
      {title}, dice {name}
    </h1>
  );
}
export function UserCard1(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <p>💵{props.amount}</p>
      <p>{props.married ? "married" : "single"}</p>
      <ul>
        <li>City: {props.address.city} </li>
        <li>calle: {props.address.street}</li>
      </ul>
      {props.greet}
    </div>
  );
}
