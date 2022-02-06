const Greeting = ({
	name
	, role
	, age
	, albums
}) => {

    // console.log(props);

    return(
      <>
        <h2>
            Hello, {name}!
        </h2>
        <h3>
            {name}'s role in the band is {role}.
        </h3>
        <h3>
            When the band formed, {name} was approximately {age} years old.
        </h3>
        <h3>
					If {name} is still alive, he is approximately {age + (2021-1967)} years old.
        </h3>
        <h3>{name} contributed to these albums:</h3>
        <ul>
            {
							albums 
							&& [...new Set(albums)].map(x => (
							<li
								key={x}
							>
								{x}
							</li>))
            }
            {!albums && <li>Check back later.</li>}
        </ul>
      </>
    );
  };

  export default Greeting;