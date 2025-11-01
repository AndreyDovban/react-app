import styles from './CartButton.module.css';

export function CartButton({ children }) {
	return <button className={styles.cart_button}>{children}</button>;
}
