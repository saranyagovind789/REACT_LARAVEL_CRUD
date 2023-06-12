import logo from './logo.svg';
import './App.css';
import BookList from './components/list.component';
import CreateBook from './components/createbook.component';
import EditBook from './components/editbook.component';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>  
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">BookList</Link>
            </li>
            <li>
            <Link to="/create/book">Create Book Record</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path="/" element={<BookList/>}/>
        <Route path="/create/book" element={<CreateBook/>}/>
        <Route path="/book/edit/:id" element={<EditBook/>}/>
        </Routes>;
      </div>
    </Router>
  );
}

export default App;
