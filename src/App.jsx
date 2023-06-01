import React, { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import PostContext from './contexts/PostContext'
import ListPosts from './components/ListPosts'
import CreatedPost from './components/CreatedPost'
import ChangedPost from './components/ChangedPost'


function App() {
  const [posts, setPosts] = useState([]);

  const loadingData = async () => {
    const response = await fetch(import.meta.env.VITE_DATA_URL);
    const data = await response.json();
    setPosts(data);
  }

  useEffect (() => {
    loadingData();
  }, []);

  const updatePosts = async ({ id = 0, content }) => {
    await fetch(import.meta.env.VITE_DATA_URL, {
      method: 'POST',
      body: JSON.stringify({ id, content }),
    });
    loadingData();
  }

  const deletePosts = async (id) => {
    await fetch(import.meta.env.VITE_DATA_URL + `/${id}`, {
      method: 'DELETE',
    });
    loadingData();
  }

  return (
    <>
      <PostContext.Provider value={{ posts, updatePosts, deletePosts }}>
        <BrowserRouter>
          <Routes>
            <Route path='/posts/new' element={<CreatedPost />} />
            <Route path='/posts/:id' element={<ChangedPost />} />
            <Route path='/' element={<ListPosts />} />
          </Routes>
        </BrowserRouter>
      </PostContext.Provider>
    </>
  );
}

export default App