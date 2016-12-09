class Song extends React.Component{
	render(){
		return (
		<div>
			<h1>{this.props.song.title}</h1>
			<hr/>
			<ul>
			{this.props.song.tags.map( (tag) => <li>{tag}</li> )}
			</ul>
			<hr/>
			{this.props.song.lyrics}
			<hr/>
			{this.props.children}
		</div>
		)
	}    
	
}



class App extends React.Component {
	
	render() {
		
		var song = {
			title: "Donna Summer - Hot stuff",
			lyrics: "asdasdasd asdasd sa das dsa d",
			tags: ["disco","kate"]
		};
		

		return (
			<div>
				<Song song={song}/>
			</div>
		); 
	}
}


const app = document.getElementById('app');
ReactDOM.render(<App/>, app);