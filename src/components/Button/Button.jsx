import styles from './Button.module.css';

export function Button({ children, ...props }) {
	console.log('Button');

	return (
		<button className={styles.button} {...props}>
			{children}
		</button>
	);
}
