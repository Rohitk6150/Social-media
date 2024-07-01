import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import CreatePost from './components/CreatePost.jsx';
//import { PostList } from './store/post-list-store.jsx';
import PostList from './components/PostList.jsx';

const router = createBrowserRouter([
  {path: "/", element: <App></App>, children:[{path : "/", element: <PostList></PostList>},
    {path:"/create-post", element:<CreatePost></CreatePost>}]},
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
;