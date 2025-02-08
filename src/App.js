import './App.css';
import images from './constants/images';
import SvgIcon from './components/SvgIcon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={images.ItaloMelo} className="App-logo" alt="logo" />

        <div className='icon'>
          <SvgIcon name="resourse" size={32} />
        </div>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
