import { useState, useEffect } from "react";
import Post from "./components/post/Post";
import "./style.scss";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    document.title = "Canonical Task";
    fetch(
      "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json"
    )
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  return (
    <main className="l-main">
      <div className="row u-sv3">
        <h1>Canonical Task</h1>
        <em className="u-sv3">&mdash; by Pravesh Pansari</em>
      </div>
      <div className="row u-equal-height u-clearfix">
        {posts.map((post, index) => {
          return (
            <Post
              key={index}
              title={post.title.rendered}
              image={post.featured_media}
              author={post._embedded.author[0].name}
              date={post.date}
              link={post.link}
              authorLink={post._embedded.author[0].link}
              topic={post._embedded["wp:term"][2][0]?.name}
              category={post._embedded["wp:term"][0][0]?.name}
            />
          );
        })}
      </div>
    </main>
  );
};

export default App;
