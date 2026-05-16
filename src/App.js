// import './App.css';
import DisplayData from './FetchData/DisplayData';
import Main from './Tict-tac-toe/Main';
import MainTodo from "./todoApp/MainTodo";
import Todo from "./todoApp/Todo";

const App = () => {
  return (
    <div className="App">
      <Main />
      <DisplayData />
      {/* <MainTodo /> */}
      {/* <Todo /> */}
    </div>
  );
}

export default App;
