import styles from './JournalForm.module.css';
import cn from 'classnames';
import { Button } from '../Button/Button';
import { useEffect, useReducer, useRef } from 'react';
// import Archive from '../../assets/svg/archive.svg?react';
import Calendar from '../../assets/svg/calendar.svg?react';
import File from '../../assets/svg/file.svg?react';
import { INITIAL_STATE, formReducer } from './JournalForm.state';
import { Input } from '..';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

export function JournalForm({ addItem }) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formState;
	const titleRef = useRef();
	const dateRef = useRef();
	const postRef = useRef();
	const { userId } = useContext(UserContext);

	const focusError = isValid => {
		switch (true) {
			case !isValid.title:
				titleRef.current.focus();
				break;
			case !isValid.date:
				dateRef.current.focus();
				break;
			case !isValid.post:
				postRef.current.focus();
				break;

			default:
				break;
		}
	};

	useEffect(() => {
		let timerId;
		if (!isValid.title || !isValid.date || !isValid.post) {
			focusError(isValid);
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isFormReadyToSubmit]);

	useEffect(() => {
		dispatchForm({ type: 'SET_VALUE', payload: { userId } });
	}, [userId]);

	const addJournalItem = e => {
		e.preventDefault();
		dispatchForm({ type: 'SUBMIT' });
	};

	const changeInput = e => {
		dispatchForm({ type: 'SET_VALUE', payload: { [e.target.name]: e.target.value } });
	};

	return (
		<form className={styles.journal_form} onSubmit={addJournalItem}>
			<div>
				<Input
					type="text"
					name="title"
					appearence="title"
					isValid={isValid.title}
					ref={titleRef}
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
				<Input
					id="date"
					type="date"
					name="date"
					isValid={isValid.date}
					ref={dateRef}
					value={values.date}
					onChange={changeInput}
				/>
			</div>

			<div className={styles.form_row}>
				<label htmlFor="tag" className={styles.form_label}>
					<File />
					<span>Метка</span>
				</label>
				<Input id="tag" type="text" name="tag" value={values.tag} onChange={changeInput} />
			</div>

			<textarea
				name="post"
				id=""
				cols="30"
				rows="10"
				className={cn(styles.input, styles.textarea, {
					[styles.invalid]: !isValid.post,
				})}
				ref={postRef}
				value={values.post}
				onChange={changeInput}
			></textarea>
			<Button text={'Сохранить'} />
		</form>
	);
}
