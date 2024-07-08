import React from 'react';
import { useDispatch } from 'react-redux';
import { editPost } from '../redux/postsSlice';
import './post.css'

const PostItem = ({ post }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    const newTitle = prompt('Edit Title', post.title);
    const newContent = prompt('Edit Content', post.content);
    if (newTitle && newContent) {
      dispatch(editPost({ id: post.id, title: newTitle, content: newContent }));
    }
  };

  return (
    <div className='post'>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <button  className='button' onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default PostItem;