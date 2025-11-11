import styles from './App.module.css';
import { useEffect, useState } from 'react';
import { Header, JournalList, JournalAddButton, CartButton, JournalItem, JournalForm } from './components';
import { LeftPanel } from './layout/LeftPanel/LeftPanel';
import { Body } from './layout/Body/Body';

function App() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('data'));
		if (data) {
			setItems(data.map(el => ({ ...el, date: new Date(el.date) })));
		}
	}, []);

	useEffect(() => {
		if (items.length) {
			localStorage.setItem('data', JSON.stringify(items));
		}
	}, [items]);

	const addItem = item => {
		setItems(t => [
			...t,
			{
				title: item.title,
				date: new Date(item.date),
				text: item.post,
				id: Math.random() + 1,
			},
		]);
	};

	return (
		<div className={styles.app}>
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList>{items}</JournalList>
			</LeftPanel>

			<Body>
				<JournalForm addItem={addItem} />
			</Body>
		</div>
	);
}

export default App;
