import React, { Component } from 'react';
import styles from './videosList.css';
import axios from 'axios';
import { URL } from '../../../config';
import Button from '../buttons/buttons';
import VideosListTemplate from './videosListTemplate';
class VideosList extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    amount: this.props.amount,
    end: this.props.start + this.props.amount,
  };
  renderTitle = () => {
    return this.props.title ? <h3>NBA</h3> : null;
  };
  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }
  request = (start, end) => {
    if (this.state.teams < 1) {
      axios.get(`${URL}/teams`).then((response) => {
        this.setState({
          teams: response.data,
        });
      });
    }
    axios.get(`${URL}/videos?_start=${start}&_end=${end}`).then((response) => {
      this.setState({
        videos: [...this.state.videos, ...response.data],
        start,
        end,
        // end previously because this wasn't updatet we got the same 3 news
      });
    });
  };
  renderVideos = () => {
    let template = null;
    switch (this.props.type) {
      case 'card':
        console.log(this.state.teams + 'should have an array of teams');
        template = (
          <VideosListTemplate
            data={this.state.videos}
            teams={this.state.teams}
          />
        );
        break;
      default:
        template = null;
    }
    return template;
  };
  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end);
  };
  renderButton = () => {
    return this.props.loadmore ? (
      <Button
        type="loadmore"
        cta="Load more videos"
        loadMore={() => this.loadMore()}
      />
    ) : (
      <Button type="linkTo" cta="More videos" linkTo="/videos" />
    );
  };
  render() {
    return (
      <div className={styles.videoList_wrapper}>
        {this.renderTitle()}
        {this.renderVideos()}
        {this.renderButton()}
      </div>
    );
  }
}

export default VideosList;
