import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';


import Post from './components/post';
import { fetchGetPost, fetchAddPost, fetchUpdatePost, fetchDeletePost } from './reducers/postsReducer';



class App extends Component {

  componentDidMount() {
    this.props.fetchGetPost();
  }

  render() {
    const posts = this.props.posts;
    console.log("posts", posts);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React + Redux + API</h1>
        </header>
        <div className="App-intro">
          <h2>Posts</h2>
          {
            posts.map(post =>
              <Post {...post} />
            )}
        </div>
      </div>
    );
  }
}

export default connect(
  //función que mapea propiedades del state con propiedades del componente
  (state) => ({
    posts: state.posts.posts,
  }),
  //mapeo de funciones
  {
    fetchGetPost, fetchAddPost, fetchUpdatePost, fetchDeletePost
  }
)(App);
