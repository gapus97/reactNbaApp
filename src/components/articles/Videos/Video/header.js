import React from 'react';
import TeamNfo from '../../Elements/teamNfo';

const header = (props) => {
  const teamNfo = (team) => {
    return team ? <TeamNfo team={team} /> : null;
  };
  console.log(JSON.stringify(props) + 'dsaiuhdkash');
  return <div>{teamNfo(props.teamData)}</div>;
};
export default header;
