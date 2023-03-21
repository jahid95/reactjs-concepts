
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

export default App;
