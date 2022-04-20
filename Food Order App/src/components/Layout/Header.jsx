import { Fragment } from 'react';

import mealsImage from './../../assets/meals.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Food Order App</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A Table full of yum food!!" />
        </div>
    </Fragment>;
}
 
export default Header;