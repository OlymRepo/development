import React from 'react';
import ReactDOM from 'react-dom';
import {next} from './info.js';

var base = 'https://raw.githubusercontent.com/OlymRepo/pdf_files';

class Navigator extends React.Component
{
	constructor(props)
	{
		super(props);
		
		this.state = {
			ans:[],
			node:"master",
			children:next['master'],
			path:"/master"
		}
		for(var i = 0; i < this.state.children.length;i++)
		{
			this.state.ans = this.state.ans.concat(
				<button onClick = {this.handleClick(this.state.children[i])}>
					{this.state.children[i]}
				</button>);
		}

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick = data => e =>
	{
		e.preventDefault();
		console.log("CLICKED: " + data);
		console.log("Current Path: " + this.state.path);
		if(data==="Back")
		{
			this.setState({path:this.state.path.substring(0,this.state.path.lastIndexOf('/'))}, () =>
			{
				console.log("Updated Path: " + this.state.path);
				this.setState({ node:this.state.path.substring(this.state.path.lastIndexOf('/')+1,this.state.path.length)},() =>
				{
					console.log("prev: " + this.state.node);
					var temp = [];
					this.setState({children:next[this.state.node]}, () =>
					{
						for(var i = 0; i < this.state.children.length;i++)
						{
							temp = temp.concat(
								<button onClick = {this.handleClick(this.state.children[i])}>
									{this.state.children[i]}
								</button>
							);
						}
					this.setState({ans:temp});
					});
				});
			});
		}
		else if(data.substring(data.length-3,data.length) ==="pdf")
		{
			console.log("PDF Detected");
			window.open(base + this.state.path + '/' + data);
		}
		else
		{
			this.setState({node:data},() =>
			{
				this.setState({path:this.state.path + '/' + this.state.node}, () =>
				{
					console.log("Updated Path: "+ this.state.path);
					var temp = [];
					this.setState({children:next[this.state.node]}, () =>
					{
						for(var i = 0; i < this.state.children.length;i++)
						{
							temp = temp.concat(
								<button onClick = {this.handleClick(this.state.children[i])}>
									{this.state.children[i]}
								</button>
							);
						}
					this.setState({ans:temp});
					});
				});
			});
		}
		
	}
	render()
	{
		return(
			<div className = "Navigator">
				<div className = "path">
					{this.state.path}
				</div>
				<div className = "buttons">
					{this.state.ans}
				</div>
			</div>
		);
	}
}
class About extends React.Component
{
	render()
	{
		return(
			<div className = "About">
				<div className = "aboutheader">
					What is <span className = "special">OlymRepo.me</span> ?
				</div>
				<div className = "aboutpara">
					OlymRepo.me is a collection of Olympiad 
					problems from various competitions, countries and years.
					It was designed in React JS and is my first real life project.
				</div>
			</div>
		);
	}
}
class ContentManager extends React.Component
{
	constructor(props)
	{
		super(props)
		this.state = {
			isAbout: false,
			display: <Navigator />
		}
	this.handleClick = this.handleClick.bind(this);
	

	}
	handleClick(e)
	{
		if(this.state.isAbout)
		{
			this.setState({
				isAbout: false,
				display: <Navigator />
			});
		}
		else
		{
			this.setState({
				isAbout: true,
				display: <About />
			});
		}
	}
	render()
	{
		return(
			<div className = "ContentManager">
				<div className = "head">
					<span className = "titletoggle" onClick = {this.handleClick}>OlymRepo.me</span>
				</div>
				{this.state.display}
			</div>
		);
	}
}
const element = <ContentManager />

ReactDOM.render(element, document.getElementById('root'));
console.log('testing');