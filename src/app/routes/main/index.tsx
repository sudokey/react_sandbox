import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as React from 'react';
import * as styles from './styles.css';
import * as urls from '../../../routes/urls';
import { selectServices } from '../../../store/selectors';
import Header from '../../../components/header';
import { ServicesData } from '../../../store/modules/services/types';
import { RootState } from '../../../store/rootReducer';

export interface ComponentProps {
  services: ServicesData;
}

export const Component: React.FC<ComponentProps> = ({ services }) => {
  const servicesList = Object.values(services);

  return (
    <div className={styles.container}>
      <Header
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, eum!"
      />

      <h2>Main</h2>

      <ul>
        {servicesList.map((service) => (
          <li key={service.id}>{`${service.id} ${service.title}`}</li>
        ))}
      </ul>

      <p>
        <Link to={urls.getUserUrl({ userId: 1 })}>User</Link>
      </p>
    </div>
  );
};

const connector = connect(
  (state: RootState): ComponentProps => ({
    services: selectServices(state),
  }),
);

export default connector(Component);
