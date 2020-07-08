import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Layout from './components/hoc/Layout/layout';
import NewsArticle from './components/articles/News/Posts/index';
import VideoArticle from './components/articles/Videos/Video/index';
import NewsMain from './components/articles/News/Main/indes';
import VideosMain from './components/articles/Videos/Main/index';
class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/articles/:id" exact component={NewsArticle} />
          <Route path="/news" exact component={NewsMain} />
          {/* react will be listening for the id that w e will set and will call newsArticle component */}
          <Route path="/videos/:id" exact component={VideoArticle} />
          <Route path="/videos" exact component={VideosMain} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
