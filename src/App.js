// import './App.css';
// import DisplayData from './FetchData/DisplayData';
// import Main from './Tict-tac-toe/Main';
// import MainTodo from "./todoApp/MainTodo";
// import Todo from "./todoApp/Todo";
import Pagination from "./Pagination/Pagination";
import TodoApp from "./todoApp/TodoApp";

const App = () => {
  return (
    <div className="App">
      <Pagination />
      {/* <Main />
      <DisplayData /> */}
      {/* <MainTodo /> */}
      {/* <Todo /> */}
      <TodoApp />
    </div>
  );
}

export default App;
