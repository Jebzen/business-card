import './App.css';
import Picture from './components/picture.js';
import Body from './components/body.js'
import footer from './components/footer.js'

function App() {
  return (
    <div className='card'>
        {Picture}
        {Body}
        {footer}
    </div>
  );
}

export default App;
