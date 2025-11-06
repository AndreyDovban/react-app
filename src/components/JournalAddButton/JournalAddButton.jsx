import styles from './JournalAddButton.module.css';
import { CartButton } from '..';
import Plus from '../../assets/svg/plus.svg?react';

export function JournalAddButton() {
	return (
		<CartButton className={styles.journal_add_button}>
			<Plus /> Новое воспоминание
		</CartButton>
	);
}
