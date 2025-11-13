import styles from './JournalList.module.css';
import { CartButton, JournalItem } from '..';
import { UserContext } from '../../context/user.context';
import { useContext } from 'react';

export function JournalList({ children }) {
	const { userId } = useContext(UserContext);

	return (
		<div className={styles.journal_list}>
			{children.length == 0 && <p>Записей пока нет, добавьте первую</p>}
			{children.length > 0 &&
				children
					.sort((a, b) => b.date - a.date)
					.map(el => {
						if (userId == el.userId) {
							return (
								<CartButton key={el.id}>
									<JournalItem title={el.title} date={el.date} post={el.post} />
								</CartButton>
							);
						}
					})}
		</div>
	);
}
