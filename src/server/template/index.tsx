import * as redux from 'redux';
import { Provider } from 'react-redux';
import * as React from 'react';
import { StaticRouter } from 'react-router-dom';
import App from '../../app';
import Layout from './layout';

export interface TemplateProps {
  location: string;
  store: redux.Store;
  staticVersion: number;
}

const Template: React.FC<TemplateProps> = ({
  location, store, staticVersion,
}) => (
  <Provider store={store}>
    <Layout staticVersion={staticVersion}>
      <StaticRouter location={location}>
        <App />
      </StaticRouter>
    </Layout>
  </Provider>
);

export default Template;
