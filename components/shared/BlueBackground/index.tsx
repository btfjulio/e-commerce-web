import React from 'react';
import styles from '../../../styles/Background.module.css';

const Logo: React.FC = ({ children }) => {
  return (
    <div className={styles.main}>
      { children }
    </div>
  )
}

export default Logo;