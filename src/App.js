import './App.css';
import Form from './components/Form';
import Graph from './components/Graph';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>App</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Graph />
          </div>
          <div className="col">
            <Form />  
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
