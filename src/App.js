import React from 'react';
import './App.css';
// 路由模式
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './views/Home';
import List from './views/List';
import Detail from './views/Detail';
import NotFound from './views/NotFound';
class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>首页</Link></li>
            <li><Link to='/list'>列表</Link></li>
            <li><Link to='/detail'>详情</Link></li>
          </ul>
        </div>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/list' component={List}></Route>
          <Route path='/detail' component={Detail}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
