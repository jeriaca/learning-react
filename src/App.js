import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';

const App = () => {
  return (
    <>
      <h1>
        Hello, Stooges!
      </h1>
      
      <Greeting name='Iggy (vocals)'/>
      <Greeting name='Dave (bass)'/>
      <Greeting name='Ron (guitar)'/>
      <Greeting name='Scott (drums)'/>
    </>
  );
};

export default App;
