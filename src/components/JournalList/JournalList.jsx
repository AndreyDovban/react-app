import styles from './JournalList.module.css';
import { CartButton, JournalItem } from '..';

export function JournalList({ children }) {
	return (
		<div className={styles.journal_list}>
			{children.length == 0 && <p>Записей пока нет, добавьте первую</p>}
			{children.length > 0 &&
				children
					.sort((a, b) => b.date - a.date)
					.map(el => {
						return (
							<CartButton key={el.id}>
								<JournalItem title={el.title} date={el.date} text={el.text} />
							</CartButton>
						);
					})}
		</div>
	);
}
