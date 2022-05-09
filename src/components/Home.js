import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPosts, setLoading, setUser } from '../redux/actions';
import Navigation from './Navigation';

function Home() {
  const { posts } = useSelector((state) => state.Reducer);
  const dispatch = useDispatch();
  return <div>Home Screen</div>;
}

export default Home;
