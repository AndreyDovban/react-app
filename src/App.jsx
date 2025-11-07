import styles from './App.module.css';
import { useState } from 'react';
import { Header, JournalList, JournalAddButton, CartButton, JournalItem, JournalForm } from './components';
import { LeftPanel } from './layout/LeftPanel/LeftPanel';
import { Body } from './layout/Body/Body';

const INITIAL_DATA = [
	// {
	// 	id: 1,
	// 	title: 'Подготовка к обновлению курсов',
	// 	date: new Date(),
	// 	text: 'Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и морально, дают возможность почувствовать себя первопроходцем. У горных походов свои секреты, приобщиться к которым можно только в команде единомышленников и профессионалов.',
	// },
	// {
	// 	id: 2,
	// 	title: 'Поход в годы',
	// 	date: new Date(),
	// 	text: 'Различают альпинизм и горный туризм. Если в альпинизме главная цель – покорение вершины, то горный туризм – это длительное путешествие в горах, связанное с прохождением многочисленных препятствий. В нем огромную роль играет физическая подготовка путешественников, их выносливость, способность переносить большие нагрузки и тяжести в условиях высокогорья.',
	// },
];

function App() {
	const [items, setItems] = useState(INITIAL_DATA);

	const addItem = item => {
		setItems(t => [
			...t,
			{
				title: item.title,
				date: item.date ? new Date(item.date) : new Date(),
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
