import './App.css';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query'
// import { ReactQueryDevtools } from 'react-query/devtools'
import Signin from './components/Signin';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Private from './components/Private';
import Home from './components/Home'
import Post from './components/Post'
import RevokeAccess from './utilities/RevokeAccess';
import UsersProfile from './components/UsersProfile';
import PostDetail from './components/PostDetail';
import HomeLeft from './components/HomeLeft';
import HomeRight from './components/HomeRight';
import UploadPosts from './components/UploadPosts';
import Layout from './components/Layout';
import UserSearch from './components/UserSearch';
import Create from './components/Create';
import HomePage from './components/HomePage';
const queryClient = new QueryClient();
const RouteJSX = (
  <>
    {/* <Route index element={<HomeLeft />} /> */}
    <Route path='/' element={<Private><Layout /></Private>} >

      {/* <Route index element={<Home />} /> */}
      <Route index element={<HomePage />} />
      {/* <Route index element={<HomeLeft/>} /> */}
      <Route path='/post' element={<Post />} />
      <Route path="/users/:userId" element={<UsersProfile />} />
      <Route path='/uploadPost' element={<UploadPosts />} />
      <Route path='/userSearch' element={<UserSearch />} />
      <Route path="/post/:postId" element={<PostDetail />} />
      <Route path='*' element={<div style={{ color: "white" }}>Page Not Found</div>} />
    </Route>
    {/* <Route path="/users/:userId" element={<UserProfile />} /> */}



    <Route path='/login' element={<Login />} />
    <Route path='/create' element={<Create />} />
    <Route path='/signin' element={<Signin />} />
    {/* <Route path='/post' element={<Post />} /> */}
    <Route path='/homeright' element={<HomeRight />} />
    {/* <Route path='' element={<UserProfile/>}/> */}
  </>

);
const routes = createRoutesFromElements(RouteJSX);

const router = createBrowserRouter(routes);
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App ">
        <RevokeAccess />

        {/* <Router>

          <Routes>

          </Routes>
        </Router> */}
        {/* <RevokeAccess/> */}
        <RouterProvider router={router} />
      </div>
      {/* <ReactQueryDevtools initialIsOpen={false} position='bottom-right' /> */}

    </QueryClientProvider>
  );
}

export default App;
