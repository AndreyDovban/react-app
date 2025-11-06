import styles from './JournalForm.module.css';
import { useState } from 'react';
import { Button } from '../Button/Button';

export function JournalForm() {
	const [state, setState] = useState({ age: 31 });

	const addJournalItem = e => {
		e.preventDefault();
		state.age++;
		console.log(state);
		setState({ ...state });

		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
	};

	return (
		<>
			<div>{state.age}</div>
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
