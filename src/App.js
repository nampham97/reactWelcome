import Navbar from './Component/Navbar';
import './App.css';
import Hello from './Component/Hello';
import Posts from './Component/Posts';
import Counter from './Component/counter';

function App() {

  return (
    <div className="App">
        <Navbar />
        <Counter counter='0'/>
        <Counter counter='1'/>
        <Counter counter='12'/>
        <br/>
        <Hello myName='Nampd'/>
      <Posts />
    </div>
  );
}

export default App;
