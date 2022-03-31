import React from "react";
import Header from "./Header";
import Post from "./Post";

const titulo01 = "Titulo do primeiro Post";

function App() {
  const posts = [
    {
      title: "Title#01",
      subtitle: "Sub#01",
      likes: 20,
    },
    {
      title: "Title#02",
      subtitle: "Sub#02",
      likes: 12,
    },
    {
      title: "Title#03",
      subtitle: "Sub#03",
      likes: 5,
    },
  ];

  return (
    <>
      <Header>
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
          key={post.title}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      ))}
    </>
  );
}

export default App;
