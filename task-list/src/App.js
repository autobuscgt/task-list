import { useEffect, useState } from "react";
import { primaryColor } from "./assets/consts";

const tasks = [
  {id: 1, name: `Task №1`, description:'Описание', completed: false},
  {id: 2, name: `Task №2`, description:'Описание', completed: true},
  {id: 3, name: `Task №3`, description:'Описание', completed: false},
  {id: 4, name: `Task №4`, description:'Описание', completed: true},
  {id: 5, name: `Task №5`, description:'Описание', completed: false},
]
let nextId = 6;

function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState('');

  function render(){
    return tasks
  }

  useEffect(()=> {
    render();
  }, [tasks])

  function handleSubmit(){
    tasks.push({
      id: nextId++,
      name:name,
      description: description,
      completed: completed
    });

    console.log(tasks);
  }

  return (
    <div className="App">
    <div className="header-container">
      <div className="logo">
        <h1>logo</h1>
        <img src={primaryColor} alt="purple-square-texture"/>
      </div>
        <div className="header-container-block-1">block1</div>
        <div className="header-container-block-2">block2</div>
    </div>
    <div className="interactive-container">
      <input src={name} placeholder="Введите имя" onChange={(e) => setName(e.target.value)}/>
      <input src={description} placeholder="Описание" onChange={(e) => setDescription(e.target.value)}/>
      <input src={completed} placeholder="" onChange={(e) => setCompleted(e.target.value)}/>
      <button className="submit-btn" onClick={handleSubmit}>Добавить таску</button>
    </div>
    <div className="tasks-container">
        {tasks.map(task => (
          <div key={task.id} className="task-card">
            <h1>{task.name}</h1>
            <p>{task.description}</p>
            <input value={task.completed} type="checkbox"/>
          </div>
        ))}
    </div>

    <div className="footer-container">

    </div>

    </div>
  );  
}

export default App;
