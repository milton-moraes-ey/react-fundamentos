import React from "react";
import Header from "./Header";
import Post from "./Post";

const titulo01 = 'Titulo do primeiro Post';


function App() {
  return (
    <>
      <Header title="Meu BLOG">
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      <Post title={titulo01} subtitle="Subtítulo da notícia 01" />
      <Post title="Título do Post 02" subtitle="Subtítulo da notícia 02" />
      <Post title="Título do Post 03" subtitle="Subtítulo da notícia 03" />
      <Post title="Título do Post 04" subtitle="Subtítulo da notícia 04" />

    </>
  );
}

export default App;