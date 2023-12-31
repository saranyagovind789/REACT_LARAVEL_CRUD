
import React, { useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditBook = () => {
    let navigate = useNavigate();
    const {id} = useParams();
    const [book, setBook] = useState([]);
    useEffect( ()=>{
        getBook();
    },[]
    );

    const getBook =() =>{
        fetch('http://127.0.0.1:8000/api/book/'+id).then(res => res.json()).then(data=> {
            setBook(data);
        })
    }

    const handleChange = (event) => {
        setBook({...book,[event.target.name] : event.target.value});
    }

    const handleSubmit = (event) => {
        console.log(book);
        fetch('http://127.0.0.1:8000/api/book/'+id,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: book.title,
                author: book.author,
                publisher: book.publisher
            })
        }
        )
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
            },
            (error) => {
                setBook({
                    isLoaded: true,
                    error
                });
            }
        )
        event.preventDefault();
        navigate('/');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" name="title" value={book.title} onChange={handleChange} />
            </label><br/>
            <label>
                Author
                <input type="text" name="author" value={book.author} onChange={handleChange} />
            </label>
            <label>
                Publisher
                <input type="text" name="publisher" value={book.publisher} onChange={handleChange} />
            </label>
            <input type="submit" value ="Submit" />
        </form>
    );


}
export default EditBook;