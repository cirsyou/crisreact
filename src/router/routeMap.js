import React from 'react';

import { Route, Switch } from 'react-router-dom';

import App from '../App';
import Home from '../views/Home';
import List from '../views/List';
import Detail from '../views/Detail';
import NotFound from '../views/NotFound';

class RouteMap extends React.Component {
  // 路由更改时触发
  updateHandle () {
    console.log('路由发生了更改');
  }
  render () {
    return (
      // 定义路由
      <Switch>
        {/* 默认首页 */}
        <Route exact component={Home}></Route>
        <Route path='list' component={List}></Route>
        <Route path='detail/:id' component={Detail}></Route>
        {/* 缺省页 */}
        <Route path='*' component={NotFound}></Route>
      </Switch>
    )
  }
}

export default RouteMap;
