import styles from './JournalForm.module.css';
import { Button } from '../Button/Button';

// {
// 	title: 'Первая заметка',
// 	date: new Date(),
// 	text: 'Большое значение в горном туризме придается бытовому обустройству в походе, ведь все необходимое для жизнеобеспечения группы нужно нести с собой в рюкзаке и вес каждого килограмма ноши на высоте ощущается особенно сильно. Существует множество способов существенно облегчить вес рюкзака и тем самым высвободить силы для перехода.',
// },

export function JournalForm({ addItem }) {
	const addJournalItem = e => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		addItem(formProps);
	};

	return (
		<>
			<form className={styles.journal_form} onSubmit={addJournalItem}>
				<input type="text" name="title" />
				<input type="date" name="date" />
				<input type="text" name="tag" />
				<textarea name="post" id="" cols="" rows=""></textarea>
				<Button text={'Сохранить'} />
			</form>
		</>
	);
}
