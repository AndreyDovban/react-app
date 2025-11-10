import styles from './JournalForm.module.css';
import cn from 'classnames';
import { Button } from '../Button/Button';
import { useState } from 'react';
import Archive from '../../assets/svg/archive.svg?react';
import Calendar from '../../assets/svg/calendar.svg?react';
import File from '../../assets/svg/file.svg?react';

// {
// 	title: 'Первая заметка',
// 	date: new Date(),
// 	text: 'Большое значение в горном туризме придается бытовому обустройству в походе, ведь все необходимое для жизнеобеспечения группы нужно нести с собой в рюкзаке и вес каждого килограмма ноши на высоте ощущается особенно сильно. Существует множество способов существенно облегчить вес рюкзака и тем самым высвободить силы для перехода.',
// },

export function JournalForm({ addItem }) {
	const [formValid, setFormValid] = useState({ title: true, post: true, date: true });

	const addJournalItem = e => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		let isFormValid = true;
		if (!formProps.title.trim().length) {
			setFormValid(t => ({ ...t, title: false }));
			isFormValid = false;
		} else {
			setFormValid(t => ({ ...t, title: true }));
		}

		if (!formProps.date.trim().length) {
			setFormValid(t => ({ ...t, date: false }));
			isFormValid = false;
		} else {
			setFormValid(t => ({ ...t, date: true }));
		}

		if (!formProps.post.trim().length) {
			setFormValid(t => ({ ...t, post: false }));
			isFormValid = false;
		} else {
			setFormValid(t => ({ ...t, post: true }));
		}

		if (!isFormValid) {
			return;
		}

		addItem(formProps);
	};

	return (
		<>
			<form className={styles.journal_form} onSubmit={addJournalItem}>
				<div>
					<input
						type="text"
						name="title"
						className={cn(styles.input_title, {
							[styles.invalid]: !formValid.title,
						})}
					/>
					{/* <Delete /> */}
				</div>

				<div className={styles.form_row}>
					<label htmlFor="date" className={styles.form_label}>
						<Calendar />
						<span>Дата</span>
					</label>
					<input
						id="date"
						type="date"
						name="date"
						className={cn({
							[styles.invalid]: !formValid.date,
						})}
					/>
				</div>

				<div className={styles.form_row}>
					<label htmlFor="tag" className={styles.form_label}>
						<File />
						<span>Метка</span>
					</label>
					<input id="tag" type="text" name="tag" className={styles.input} />
				</div>

				<textarea
					name="post"
					id=""
					cols="30"
					rows="10"
					className={cn(styles.input, styles.textarea, {
						[styles.invalid]: !formValid.post,
					})}
				></textarea>
				<Button text={'Сохранить'} />
			</form>
		</>
	);
}
