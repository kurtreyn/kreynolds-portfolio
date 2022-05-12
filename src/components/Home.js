import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPosts, setLoading, setUser } from '../redux/actions';
import Navigation from './Navigation';
import ProjectContainer from './ProjectContainer';

function Home() {
  const { posts } = useSelector((state) => state.Reducer);
  const dispatch = useDispatch();
  return (
    <div className="container-fluid main-container">
      <Navigation />
      <ProjectContainer />
    </div>
  );
}

export default Home;
