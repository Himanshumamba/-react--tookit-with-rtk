import React from 'react';

const PostList = ({ post }) => {
  return (
    <div>
      {' '}
      <h1> {post.title}</h1>
      <p> {post.body}</p>
    </div>
  );
};

export default PostList;
