
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const friends =[
    {name:'sakib', age: 22},
    {name:'rakib', age: 24}
  ]
  
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUser></ExternalUser>
      {
        friends.map(friend => <Friend name={friend.name} age={friend.age}></Friend>)
      }
      {/* <Friend name='Anwar Jahid'></Friend>
      <Friend name='sakib khan'></Friend>
      <Friend></Friend>
      <Friend></Friend> */}
      
    </div>
  );
}

function Friend(props){
  return (
    <div className='container'>
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
    </div>
  )

}

function Counter (){
  const [count, setCount]= useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

function ExternalUser (){
  const [users, setUsers] = useState([]);
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);

  return (
    <div>
      {
        users.map(user => <User name={user.name} email={user.email}>{user.name}</User>)
      }
    </div>
  )
}

function User(props){
  return (
    <div style={{backgroundColor :'green', color:'white', padding:'20px', margin:'20px auto', width:'500px'}}>
      <h2>{props.name}</h2>
      <p>Email:{props.email}</p>
    </div>
  )
}

export default App;
