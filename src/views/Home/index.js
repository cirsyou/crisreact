import React from 'react';
import { Route, Link } from 'react-router-dom';

import List from '../List';
import Detail from '../Detail';

export default class Home extends React.Component {
  render () {
    return (
      <div>Home page
        <div>这里是首页</div>
      </div>
    )
  }
}