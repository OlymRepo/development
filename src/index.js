import React from 'react';
import ReactDOM from 'react-dom';
import {next, Emoji} from './info.js';

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
		if(data==="Back")
		{
			this.setState({path:this.state.path.substring(0,this.state.path.lastIndexOf('/'))}, () =>
			{
				this.setState({ node:this.state.path.substring(this.state.path.lastIndexOf('/')+1,this.state.path.length)},() =>
				{
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
			window.open(base + this.state.path + '/' + data);
		}
		else
		{
			this.setState({node:data},() =>
			{
				this.setState({path:this.state.path + '/' + this.state.node}, () =>
				{
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
					OlymRepo.me is a work-in-progress.
					Currently I plan on adding problems related to the Linguistics
					Olympiad to the repository.
				</div>
				<div className = "aboutheader">
					Linguistics Olympiad
				</div>
				<div className = "aboutpara">
					I expect to add problems from the following competitions.
					<ul>
						<li>The International Linguistics Olympiad(<Emoji name = "world" />)</li>
						<li>The Panini Linguistics Olympiad(<Emoji name = "india" />)</li>
						<li>The North American Computational Linguistics Olympiad(<Emoji name = "usa" />+<Emoji name = "canada" />)</li>
						<li>The All Ireland Linguistics Olympiad(<Emoji name = "ireland" />)</li>
						<li>The United Kingdom Linguistics Olympiad(<Emoji name = "uk" />)</li>
						<li>The Australian Computational Linguistics Olympiad(<Emoji name = "australia" />)</li>
					</ul>
				</div>
				<div className = "aboutheader">
					Contact Me
				</div>
				<div className = "aboutpara">
					If there is any specific contest and/or problem that you think
					should be added to this repository,feel free to email me 
					at <a href = "mailto:umang26112003@gmail.com">umang26112003@gmail.com
					</a> and I shall try to get it added as soon as possible.
					<br />
					Check out the <a href = "https://github.com/OlymRepo/">webapp's GitHub page
					</a> or the <a href = "https://github.com/ZeroDawn0D/">developer's GitHub page</a>
				</div>

				<div className = "aboutfooter">
					<span className = "special">Umang Majumder &#169; 2020.
					<br />
					The rights to all problems belong to their respective
					authors, organizations or countries.
					</span>
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
					<img src = "./logo512.png" alt = "logo" width = "128" height = "128" />
					<br />
					<span className = "titletoggle" onClick = {this.handleClick}>OlymRepo.me</span>
				</div>
				{this.state.display}
			</div>
		);
	}
}
ReactDOM.render(<ContentManager />, document.getElementById('root'));
