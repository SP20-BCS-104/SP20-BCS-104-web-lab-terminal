import { useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState();
  const [page, setPage] = useState(0);

  const fetchPosts = async (page) => {
    console.log("page: ", page);
    const response = await fetch(
      `https://dummyjson.com/posts?limit=10&skip=${page}0`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();
    console.log(json);
    setPosts(json.posts);
  };

  const onClick = async () => {
    setPage(page + 1);
    fetchPosts(page);
  };

  return (
    <div className="container">
      {posts &&
        posts.map((post) => {
          return (
            <>
              <p>
                {post.id}
                <br />
                {post.title}
                <br />
                {post.reactions}
                <br />
                {post.userId}
              </p>
              <hr />
            </>
          );
        })}
      <button className="btn btn-success" onClick={onClick}>
        Go to Next Page
      </button>
    </div>
  );
}
export default App;