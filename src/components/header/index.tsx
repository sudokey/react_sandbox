import * as React from 'react';
import * as styles from './styles.css';

export interface HeaderProps {
  title?: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({
  title = 'React Sandbox',
  description,
}) => (
  <div className={styles.header}>
    <h1 data-test="title">{title}</h1>
    <p>{description}</p>
  </div>
);

export default Header;
