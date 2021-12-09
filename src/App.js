import React from "react";
import Post from "./Post";

const category = 'Posts da semana';
const titulo01 = 'Titulo do primeiro Post';


function App() {
  return (
    <>
      <h1>Meu BLOG</h1>
      <h2>{category}</h2>

      <hr />

      <Post title={titulo01} subtitle="Subtítulo da notícia 01"/>
      <Post title="Título do Post 02" subtitle="Subtítulo da notícia 02"/>
      <Post title="Título do Post 03" subtitle="Subtítulo da notícia 03"/>
      <Post title="Título do Post 04" subtitle="Subtítulo da notícia 04"/>
   
    </>
  );
}

export default App;