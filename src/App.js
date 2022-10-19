import './App.css';
import Stars from './Components/Stars';

let num = 2;

if (num < 0 || num > 5) {
  num = null
}

function App() {
  return (
      <Stars count={num} />
  )
}

export default App;

Stars.defaultProps = {
  count: 1
};
