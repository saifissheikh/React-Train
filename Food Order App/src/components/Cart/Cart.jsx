import classes from './Cart.module.css';

const Cart = () => {
    const cartItems = (<ul>{[{id:'s1', name: 'shawarma', amount: 2, price: 6.5}].map((item) => 
                        <li>{item.name}</li>)}</ul>);
    return ( 
        <div>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.22</span>
            </div>
            <div className={classes.action}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>
     );
}
 
export default Cart;