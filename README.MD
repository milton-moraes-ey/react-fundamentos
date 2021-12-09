

<div align="center">
  
  # FUNDAMENTOS DO REACT
  
</div>

  Esse repositório destina-se aos estudos dos fundamentos do REACT, acompanhado pelo curso [JSTACK](www.jstack.com.br), ministrado pelo Mateus Silva.

  Nesse módulo, o intuito é entender todos os processos básicos e fundamentais que moldam uma aplicação web construída com React, entendendo desde conceitos como os componentes, até como conffigurar o Babel e o WebPack para a aplicação.

  Destino esse repositório para o armazenamento dos respectivos pastas e arquivos gerados para construir uma aplicação web com React partindo do total zero, configurando cada etapa de modo a compreender o porque de usar o React para construir aplicações web escaláveis e de fácil manutenção.

--- 
## Entendendo o que é o React

React é uma *biblioteca* criada pelo Facebook, que tem o objetivo de auxiliar o programador na construção de UI de aplicações escaláveis. Seu core, é a possibilidade de criação de componentes utilizando código JavaScript + HTML em uma sintaxe chamada de JSX. Tais componentes aumentam muito a produtividade do desenvolvedor, bem como auxilia na manutenção de aplicações muito grandes. 

Além disso, o React traz algumas soluções tecnológicas modernas como o conceito de *Single Page Application (SPA)*. Aliado a outros *frameworks* de trabalho, como o [Next.js](https://nextjs.org/), o React ganha ainda mais super poderes para aumentar a produtividade e melhorar o funcionamento do código e aplicação em geral.

---
## Entendendo o que são PROPS

Via de regra, *props* ou *properties* servem para que possamos transmitir propriedades entre elementos. Por exemplo, caso necessitamos passar uma propriedade do elemento pai para o elemento filho, utilizaremos as props.

### Exemplos - Como funcionam no código

Imagine um blog, o qual temos uma lista de posts e cada Post desse blog seja um componente específico chamado Post.js. Como podemos deixar os valores dinâmicos, como título, subtítulo e descrição do post, para todos os componentes ? **Utilizando as props do *React*.**

E como podemos utilizar as props no React? As props se comportam como se fossem atributos HTML. Passamos o nome da propriedade no local em que o componente está sendo renderizado e declaramos as variáveis das props no código de construção do componente:

```jsx
import React from "react";
import Post from "./Post";

const category = 'Posts da semana';
const titulo01 = 'Titulo do primeiro Post';

// LOCAL EM QUE O COMPONENTES ESTÁ SENDO CONSTRUÍDO
function Post(props) {
  return (
    <>
      <article>
        <h3 >{props.title}</h3>
        <small>{props.subtitle}</small>
      </article>
    </>
  )

//LOCAL EM QUE O COMPONENTE ESTÁ SENDO RENDERIZADO:
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
```