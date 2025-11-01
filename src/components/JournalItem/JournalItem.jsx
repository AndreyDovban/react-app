import styles from './JournalItem.module.css';

export function JournalItem({ title, date, text }) {
	const formateDate = new Intl.DateTimeFormat('ru-Ru').format(date);

	return (
		<>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.body}>
				<span className={styles.date}>{formateDate}</span>
				<span className={styles.text}>{text}</span>
			</p>
		</>
	);
}
