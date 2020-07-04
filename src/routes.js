import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Layout from './components/hoc/Layout/layout';
import NewsArticle from './components/articles/News/Posts/index';
class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/articles/:id" exact component={NewsArticle} />
          {/* react will be listening for the id that we will set and will call newsArticle component */}
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
