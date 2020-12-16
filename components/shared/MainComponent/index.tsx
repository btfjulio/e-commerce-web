import React from 'react';
import Header from '../Header/StorefrontHeader';
import StorefrontFooter from '../Footer/StorefronFooter'

const MainComponent: React.FC = ({ children }) => {
  return (
    <div className="d-flex flex-column sticky-footer-wrapper">
      <Header />
      <div className="container flex-fill">
        { children }
      </div>
      <StorefrontFooter />
    </div>
  )
}

export default MainComponent;