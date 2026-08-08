// import './App.css';
// import DisplayData from './FetchData/DisplayData';
// import Main from './Tict-tac-toe/Main';
// import MainTodo from "./todoApp/MainTodo";
// import Todo from "./todoApp/Todo";
import Pagination from "./Pagination/Pagination";
import TodoApp from "./todoApp/TodoApp";
import DigitalClock from './dititalClock/TimeClock'
import FilterHighlightText from "./FiltlerData/FilterHighlightText";
import AutoCompleteSearch from "./autocompleteSearch/AutoCompleteSearch";

const App = () => {
  return (
    <div className="App">
      <Pagination />
      <AutoCompleteSearch />
      {/* <Main />
      <DisplayData /> */}
      {/* <MainTodo /> */}
      {/* <Todo /> */}
      {/* <TodoApp />
      <DigitalClock /> */}
      <FilterHighlightText />
    </div>
  );
}

export default App;
