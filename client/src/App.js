import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Blog Posts</h1>

     <div className="form">
     <label>Post title</label>
     <input type="text" name="blogPostTitle"></input>
     <label>Post content</label>
     <input type="text" name="blogPostContent"></input>

     <button>Submit</button>
     </div>

    </div>
  );
}

export default App;
