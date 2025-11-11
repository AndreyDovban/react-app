import styles from './JournalForm.module.css';
import cn from 'classnames';
import { Button } from '../Button/Button';
import { useEffect, useReducer } from 'react';
import Archive from '../../assets/svg/archive.svg?react';
import Calendar from '../../assets/svg/calendar.svg?react';
import File from '../../assets/svg/file.svg?react';
import { INITIAL_STATE, formReducer } from './JournalForm.state';

export function JournalForm({ addItem }) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formState;

	useEffect(() => {
		let timerId;
		if (!isValid.title || !isValid.date || !isValid.post) {
			timerId = setTimeout(() => dispatchForm({ type: 'RESET_VALIDITY' }), 2000);
		}
		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	useEffect(() => {
		if (isFormReadyToSubmit) {
			addItem(values);
			dispatchForm({ type: 'RESET_VALUES' });
		}
	}, [isFormReadyToSubmit]);

	const addJournalItem = e => {
		e.preventDefault();
		dispatchForm({ type: 'SUBMIT' });
	};

	const changeInput = e => {
		dispatchForm({ type: 'SET_VALUE', payload: { ...values, [e.target.name]: e.target.value } });
	};

	return (
		<>
			<form className={styles.journal_form} onSubmit={addJournalItem}>
				<div>
					<input
						type="text"
						name="title"
						className={cn(styles.input_title, {
							[styles.invalid]: !isValid.title,
						})}
						value={values.title}
						onChange={changeInput}
					/>
					{/* <Archive /> */}
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
							[styles.invalid]: !isValid.date,
						})}
						value={values.date}
						onChange={changeInput}
					/>
				</div>

				<div className={styles.form_row}>
					<label htmlFor="tag" className={styles.form_label}>
						<File />
						<span>Метка</span>
					</label>
					<input
						id="tag"
						type="text"
						name="tag"
						className={styles.input}
						value={values.tag}
						onChange={changeInput}
					/>
				</div>

				<textarea
					name="post"
					id=""
					cols="30"
					rows="10"
					className={cn(styles.input, styles.textarea, {
						[styles.invalid]: !isValid.post,
					})}
					value={values.post}
					onChange={changeInput}
				></textarea>
				<Button text={'Сохранить'} />
			</form>
		</>
	);
}
