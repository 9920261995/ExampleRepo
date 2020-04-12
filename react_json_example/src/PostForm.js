import React from 'react'
import axios from 'axios'


export default class PostForm extends React.Component {

    state = {
        userId: "",
        title: "",
        body: ""
    }

    changeHandler = e =>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler = e =>{
        e.preventDefault()
        const url = "https://jsonplaceholder.typicode.com/posts"
        axios
        .post(url,this.state)
        .then(response =>{
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    render() {
        const {userId, title,body} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="userId" value={userId} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.changeHandler} />
                    </div>
                    
                        <button type = "submit"> Submit</button>
                </form>

            </div>

        );
    }
}