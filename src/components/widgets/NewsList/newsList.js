import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../../../config';
import styles from './newsList.css';
import Button from '../buttons/buttons';
import CardInfo from '../../widgets/CardInfo/cardInfo';
class NewsList extends Component {
  state = {
    teams: [],
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount,
  };
  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }
  request = (start, end) => {
    if (this.state.teams.length < 1) {
      axios.get(`${URL}/teams`).then((response) => {
        this.setState({
          teams: response.data,
        });
      });
    }

    axios
      .get(`${URL}/articles?_start=${this.state.start}&_end=${this.state.end}`)
      .then((response) => {
        this.setState({
          items: [...this.state.items, ...response.data],
          start,
          end,
          // we want to have the last items from before and additionaly when we click load more there are more articles and it doesn't get overwrited
        });
      });
  };

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end, end); //with this tehnique we will always load the number of articles that is provided by the amout in state
  };

  renderNews = (type) => {
    let template = null;
    switch (type) {
      case 'card':
        template = this.state.items.map((item, i) => (
          <CSSTransition
            classNames={{
              enter: styles.newsList_wrapper,
              enterActive: styles.newsList_wrapper_enter,
            }}
            timeout={500}
            key={i}
          >
            <div>
              <div className={styles.newslist_item} key={i}>
                <Link to={`/articles/${item.id}`}>
                  {/* so this is for the names of the teams and dates */}
                  <CardInfo
                    teams={this.state.teams}
                    teamId={item.team}
                    date={item.date}
                  />
                  <h2>{item.title}</h2>
                </Link>
              </div>
            </div>
          </CSSTransition>
        ));
        break;
      case 'cardMain':
        template = this.state.items.map((item, i) => (
          <CSSTransition
            classNames={{
              enter: styles.newsList_wrapper,
              enterActive: styles.newsList_wrapper_enter,
            }}
            timeout={500}
            key={i}
          >
            <Link to={`/articles/${item.id}`}>
              <div className={styles.flex_wrapper}>
                <div
                  className={styles.left}
                  style={{
                    background: `url('images/articles/${item.image})`,
                  }}
                >
                  <div></div>
                </div>
                <div className={styles.right}>
                  <CardInfo
                    teams={this.state.teams}
                    teamId={item.team}
                    date={item.date}
                  />
                  <h2>{item.title}</h2>
                </div>
              </div>
            </Link>
          </CSSTransition>
        ));
        break;
      default:
        template = null;
    }
    return template;
  };
  render() {
    return (
      <div>
        <TransitionGroup component="div" className="list">
          {this.renderNews(this.props.type)}
        </TransitionGroup>
        <Button
          type="loadmore"
          loadMore={() => this.loadMore()}
          cta="LOAD MORE" //call to action
        />
      </div>
    );
  }
}
export default NewsList;
