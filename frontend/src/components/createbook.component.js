
import React from 'react';
import { useNavigate } from 'react-router-dom';

class CreateBook extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       title:'', authors:'', publishers:''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit(event) {
        const{title, author, publisher} = this.state
        fetch("http://127.0.01:8000/api/book",{
            method:"POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                title: title,
                author: author,
                publisher: publisher
            })
        })
        .then(res => res.json())
        .then(
            (result) =>{
                this.setState({
                    isLoaded: true,
                });
                console.log(result);
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
        event.preventDefault();
        this.props.navigate('/');
        
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
            </label><br/>
            <label>
            Author
            <input type="text" name="author" value={this.state.author} onChange={this.handleChange}/>
            </label><br/>
            <label>
            Publisher
            <input type="text" name="publisher" value={this.state.publisher} onChange={this.handleChange}/> 
            </label><br/>
            <input type="submit" value ="Submit" />
        </form>
      );
    }
  }
function WithNavigate(props) {
    let navigate = useNavigate();
    return <CreateBook {...props} navigate={navigate} />
}
  export default WithNavigate;