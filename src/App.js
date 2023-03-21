
import { useState } from 'react';
import './App.css';

function App() {
  const friends =[
    {name:'sakib', age: 22},
    {name:'sakib', age: 22},
    {name:'galib', age: 22},
    {name:'rakib', age: 24}
  ]
  
  return (
    <div className="App">
      <Counter></Counter>
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
      <h1>count:{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default App;
