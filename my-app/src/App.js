import logo from './logo.svg';
import './App.css';

function App() {
  const myName = 'Megan'
  const handleToDo = () => {
      const toDoList = ['clean the dishes', 'vaccuum', 'fold your laundry', 'meal prep for the week', 'go to the gym'];
      const randomToDo = toDoList[Math.floor(Math.random() * toDoList.length)];
      return randomToDo;
  }
    return (
      <div className = "App">
        <header className = "App-header">
          <h1 className = "random">
            Hello, {myName}!  <br></br> Your task today is to {handleToDo()}!
          </h1>
          </header>
      </div>
      );
      };

export default App;
