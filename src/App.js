import React, { useState } from "react";
import Header from "./Header";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Title#01",
      subtitle: "Sub#01",
      likes: 20,
    },
    {
      id: Math.random(),
      title: "Title#02",
      subtitle: "Sub#02",
      likes: 12,
    },
    {
      id: Math.random(),
      title: "Title#03",
      subtitle: "Sub#03",
      likes: 5,
    },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Sub#0${prevState.length + 1}`,
        likes: 40,
      },
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => (
      prevState.filter(post => post.id !== postId)
    ));
  }

  return (
    <>
      <Header>
        <h2>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map(({ id, likes, title, subtitle }) => (
        <Post
          key={id}
          likes={likes}
          onRemove={handleRemovePost}
          post={{
            id: id,
            title: title,
            subtitle: subtitle,
          }}
        />
      ))}
    </>
  );
}

export default App;
