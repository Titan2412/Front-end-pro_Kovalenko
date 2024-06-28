import './App.css';

function App() {
  return (
    <div className="App">
      <div className='m-5'>
        <h1>SWAPI</h1>
        <div className="d-flex border border-black bg-warning rounded-3 mb-3">
          <p className='border-end border-black mb-0 p-2 '>https://swapi.dev/api/</p>
          <input className="flex-grow-1 border-0" placeholder='people/1/'></input>
          <button className="btn" type="button">Get info</button>
        </div>
      </div>
    </div>
  );
}



export default App;
