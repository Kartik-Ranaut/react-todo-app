import logo from './logo.svg';
import './App.css';
import Categories from './components/Categories';
import Description from './components/Description';
function App() {
  let categories=[
    {
      name:"Completed",
      color:"#4CAF50"
    },
    {
      name:"Urgent",
      color:"#FF5252"
    },
    {
      name:"Important",
      color:"#FFC107"
    },
    {
      name:"Later",
      color:"#9C27B0"
    },
    {
      name:"To study",
      color:"#25A7B8"
    }
   ]
  return (
    <div className="App">
      <h1 className='heading'>PERSONAL <br></br>TASK MANAGER</h1>
      <div className='interface'>
        <Categories categories={categories}></Categories>
        <Description className="description"></Description>
      </div>
    </div>
  );
}

export default App;
