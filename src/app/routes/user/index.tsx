import { Link } from 'react-router-dom';
import * as React from 'react';
import * as styles from './styles.css';
import * as urls from '../../../routes/urls';
import Header from '../../../components/header';

const User: React.FC = () => (
  <div className={styles.container}>
    <Header
      description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    />

    <h2>User</h2>

    <p>
      <Link to={urls.getMainUrl()}>Main</Link>
    </p>
  </div>
);

export default User;
