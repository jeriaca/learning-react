const Greeting = (props) => {

    console.log(props);

    return(
      <>
        <h2>
            Hello, {props.name}!
        </h2>
        <h3>
            {props.name}'s role in the band is {props.role}.
        </h3>
        <h3>
            When the band formed, {props.name} was approximately {props.age} years old.
        </h3>
        <h3>
            If {props.name} is still alive, he is approximately {props.age + (2021-1967)} years old.
        </h3>
      </>
    );
  };

  export default Greeting;