import styles from './CartButton.module.css';
import cn from 'classnames';

export function CartButton({ children, className }) {
	return <button className={cn(className, styles.cart_button)}>{children}</button>;
}
