import * as React from 'react';
import * as Router from 'react-router-dom';
import * as paths from '../routes/paths';
import MainRoute from './routes/main';
import UserRoute from './routes/user';
import '../../node_modules/normalize.css/normalize.css';

const App: React.FC = () => (
  <Router.Switch>
    <Router.Route exact path={paths.MAIN_PATH}>
      <MainRoute />
    </Router.Route>
    <Router.Route exact path={paths.USER_PATH}>
      <UserRoute />
    </Router.Route>
  </Router.Switch>
);

export default App;
