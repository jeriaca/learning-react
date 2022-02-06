import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';

const App = () => {
  const styles = {
    container: {
      padding: 30
      //If seconds are even, make bg orange. If odd, make magenta
      , backgroundColor: new Date().getSeconds() % 2 === 0 ? 'orange' : 'magenta'
    }
    , heading: {
        textTransform: 'uppercase'
    }
  };

  return (
    <div
      style={styles.container}
    >
      <h1
        style={styles.heading}  
      >
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
          'Fun House',
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
    </div>
  );
};

export default App;
