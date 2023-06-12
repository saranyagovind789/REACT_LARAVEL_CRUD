import React from 'react';
import { Link } from 'react-router-dom';

class BookList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        books: []
      };
    }
    delBook(id){
      console.log(id);
      fetch('http://127.0.01:8000/api/book/'+id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      }
      )

      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            });
            console.log(result);
        },
      (error) => {
        console.log(error);
      }
      )
      
    }
  
    componentDidMount() {
      fetch("http://127.0.0.1:8000/api/books")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              books: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    render() {
        const { error, isLoaded, books } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
          <table border = "3">
            <thead>
              <tr>
                <th> ID </th>
                <th> Title </th>
                <th> Author </th>
                <th> Publisher </th>
              </tr>
            </thead>
            <tbody>
              {books.map(book => (
                <tr key ={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.publisher}</td>
                  <td><button><Link to={{pathname:"/book/edit/"+book.id}}>Edit</Link></button></td>
                  <td><button onClick={()=>this.delBook(book.id)}>&nbsp; Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          );
        }
      }
    }

    export default BookList;