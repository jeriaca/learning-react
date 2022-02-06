import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';

const App = () => {
  return (
    <>
      <h1>
        Hello, Stooges!
      </h1>
      
      <Greeting 
        name='Iggy'
        role='vocals'
        age={20}
        />
      <Greeting 
        name='Dave'
        role='bass'
        age={20}
        albums={[
          'The Stooges',
          'Fun House'
        ]}
      />
      <Greeting 
        name='Ron'
        role='guitar'
        age={19}
        />
      <Greeting 
        name='Scott'
        role='drums'
        age={18}
        />
    </>
  );
};

export default App;
