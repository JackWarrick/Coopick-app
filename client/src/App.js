import './App.css';
import { Button } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
     <h1>Blog Posts</h1>
     <Button>Test Button</Button>

     <div className="form">
     <label>Post title</label>
     <input type="text" name="blogPostTitle"></input>
     <label>Post content</label>
     <input type="text" name="blogPostContent"></input>

     <Button>Submit</Button>
     <Button>Submit</Button>
     </div>

    </div>
  );
}

export default App;
