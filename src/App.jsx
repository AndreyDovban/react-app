import styles from './App.module.css';
import { Header, JournalList, JournalAddButton, CartButton, JournalItem, JournalForm } from './components';
import { LeftPanel } from './layout/LeftPanel/LeftPanel';
import { Body } from './layout/Body/Body';

function App() {
	const data = [
		{
			title: 'Подготовка к обновлению курсов',
			text: 'Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и морально, дают возможность почувствовать себя первопроходцем. У горных походов свои секреты, приобщиться к которым можно только в команде единомышленников и профессионалов.',
		},
		{
			title: 'Поход в годы',
			text: 'Различают альпинизм и горный туризм. Если в альпинизме главная цель – покорение вершины, то горный туризм – это длительное путешествие в горах, связанное с прохождением многочисленных препятствий. В нем огромную роль играет физическая подготовка путешественников, их выносливость, способность переносить большие нагрузки и тяжести в условиях высокогорья.',
		},
		{
			title: 'Первая заметка',
			text: 'Большое значение в горном туризме придается бытовому обустройству в походе, ведь все необходимое для жизнеобеспечения группы нужно нести с собой в рюкзаке и вес каждого килограмма ноши на высоте ощущается особенно сильно. Существует множество способов существенно облегчить вес рюкзака и тем самым высвободить силы для перехода.',
		},
	];

	return (
		<div className={styles.app}>
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList>
					<CartButton>
						<JournalItem title={data[0].title} date={new Date()} text={data[0].text} />
					</CartButton>
					<CartButton>
						<JournalItem title={data[1].title} date={new Date()} text={data[1].text} />
					</CartButton>
					<CartButton>
						<JournalItem title={data[2].title} date={new Date()} text={data[2].text} />
					</CartButton>
				</JournalList>
			</LeftPanel>

			<Body>
				<JournalForm />
			</Body>
		</div>
	);
}

export default App;
