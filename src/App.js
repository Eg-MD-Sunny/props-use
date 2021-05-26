import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
		  <p>I am a React Person</p>

		  <Person name="Munna" job="Football"></Person>   {/*<<======React Component Call*/}
		  <Person name="Masum" job="Dorshok"></Person>   {/*<<======React Component Call*/}
      </header>
    </div>
  );
}

//======>>Component Function Create
function Person(dataStore){
	let personStyle = {
		border:'1px solid white',
		padding:'20px',
		marginBottom:'15px',
		borderRadius:'7px'
	}

	return (
		// <div style={{border:'1px solid white'}}>
		<div style={personStyle}>
			<h3>My Name : {dataStore.name}</h3>
			<p>My Profession : {dataStore.job}</p>
		</div>
	)
}

export default App;
