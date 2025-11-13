import styles from './App.module.css';
import { Header, JournalList, JournalAddButton, JournalForm } from './components';
import { useLocalStarage } from './hooks/useLocalStorage.hook';
import { LeftPanel } from './layout/LeftPanel/LeftPanel';
import { Body } from './layout/Body/Body';
import { UserContextProvider } from './context/user.context-provider';

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
				...item,
				date: new Date(item.date),
				id: Math.random() + 1,
			},
		]);
	};

	return (
		<UserContextProvider>
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
		</UserContextProvider>
	);
}

export default App;
