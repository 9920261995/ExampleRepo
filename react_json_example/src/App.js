import React, { Component } from 'react';
import './App.css';
import PostForm from './PostForm';


class App extends Component {
  state = {
    loading: true,
    person : null

  }

  async componentDidMount(){
    // const Url =  UXA5-N8HG-XLKV-3WC3
    const Url = "https://api.randomuser.me"
    const Response = await fetch(Url)
    const data = await Response.json();
    this.setState({person:data.results[0] , loading:false});
    console.log(this.state.person.name.title);
   
  }
  render() {
    return (
      <div>
        <PostForm/>
        <br/>
        <br/>
        <br/>
        {this.state.loading || this.state.person ===false ? 
        (<div> loading....</div> ): 
        (<div >
          
         <div >  {this.state.person.name.title} </div>
         <div >  {this.state.person.name.first} </div>
         <div > {this.state.person.name.last}</div>
         <image src = {this.state.person.picture.medium}>Some image</image>
        </div>
        )}
      </div>
    );
  }
}

export default App;
