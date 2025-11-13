import styles from './Header.module.css';
import { SelectUser } from '..';

export function Header() {
	return (
		<>
			<img src="/logo.svg" className={styles.logo} />
			<SelectUser />
		</>
	);
}
