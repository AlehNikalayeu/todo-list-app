import './App.css';
import TodoList from "./components/TodoList";
import Form from "./components/Form";

function App() {
  return (
      <div className="App">
        <div className="app-container">
          <h1>Conquer Your Tasks!</h1>
          <TodoList />
          <Form />
          <footer>
            <p>created by <span>Aleh Nikalayeu</span></p>
          </footer>
        </div>
      </div>
  );
}

export default App;
