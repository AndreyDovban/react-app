import styles from './App.module.css';
import { Header, JournalList, JournalAddButton, JournalForm } from './components';
import { useLocalStarage } from './hooks/useLocalStorage.hook';
import { LeftPanel } from './layout/LeftPanel/LeftPanel';
import { Body } from './layout/Body/Body';

function mapItems(items) {
	if (!items) {
		return [];
	}
	return items.map(i => ({ ...i, date: new Date(i.date) }));
}

function App() {
	const [items, setItems] = useLocalStarage('data');

	const addItem = item => {
		setItems([
			...mapItems(items),
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
				<JournalList>{mapItems(items)}</JournalList>
			</LeftPanel>

			<Body>
				<JournalForm addItem={addItem} />
			</Body>
		</div>
	);
}

export default App;
