import React from 'react';
const MyContext = React.createContext();
const App = props => {
	return (
	  <MyContext.Provider name = "hello React" >
	    <Header />
		</MyContext.Provider>
	)
}
const Header = props => {
	return <Title />
}
const Title = props => {
	return (
	<MyContext.Consumer>
	{name => <h1> {name} </h1> }
	</MyContext.Consumer>
	)
}
export default App;
