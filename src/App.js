import React from "react";
import Header from "./Header";
import Post from "./Post";

const titulo01 = 'Titulo do primeiro Post';


function App() {

  return (
    <>
      <Header>
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      <Post
        likes={20}
        post={{
          title: titulo01,
          subtitle: 'Subtítulo da notícia 01'
        }}
      />

      <Post
        likes={10}
        post={{
          title: 'Título 02',
          subtitle: 'Subtítulo da notícia 02'
        }}
      />

      <Post
        likes={50}
        post={{
          title: 'Título 03',
          subtitle: 'Subtítulo da notícia 04'
        }}
      />

      <Post
        likes={25}
        post={{
          title: 'Título 04',
          subtitle: 'Subtítulo da notícia 04'
        }}
      />


    </>
  );
}

export default App;