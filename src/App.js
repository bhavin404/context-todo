import './App.css';
import Todos from './components/Todos';
import TodoProvider from './context/TodoProvider';

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <Todos />
      </div>
    </TodoProvider>

  );
}

export default App;
