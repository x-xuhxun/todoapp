import { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import './App.css';
import Template from './components/Template';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';


function App() {
  const [insertToggle, setInsertToggle] = useState(false)
  const [todos, SetTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true
    },
    {
      id: 2,
      text: "할일 2",
      checked: false
    },
    {
      id: 3,
      text: "할일 3",
      checked: true
    }
  ]);

const onInsertToggle = () => {
  setInsertToggle(prev => !prev);
}

  return (
    <div className="App">
      <Template todolength={todos.length}>
        <TodoList todos={todos}/>
        <div className='add-todo-button' onClick={onInsertToggle}>
          <MdAddCircle/>
        </div>
        {insertToggle && <TodoInsert onInsertToggle={onInsertToggle}/>}
      </Template>
    </div>
  );
}

export default App;
