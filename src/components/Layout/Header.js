import { Fragment } from 'react';
import Navbar from './Navbar'

import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
     <div className={classes.container}>
      <header className={classes.header}>
          <h1>Brnyr Foods</h1>
          <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <Navbar />
     </div>
    </Fragment>
  );
};

export default Header;
