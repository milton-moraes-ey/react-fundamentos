import React from "react";
import propTypes from "prop-types";

export default function Post(props) {
  return (
    <>
      <article>
        <strong>{props.post.title}</strong>
        <br />
        <small>{props.post.subtitle}</small>
        <br />
        Media: {props.likes / 2}
      </article>
      <button
        onClick={() => {
          props.onRemove(props.post.id);
        }}
      >
        Remover
      </button>
      <br />
      <br />
    </>
  );
}

Post.propTypes = {
  likes: propTypes.number.isRequired,
  onRemove: propTypes.func.isRequired,
  post: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,
  }).isRequired,
};
