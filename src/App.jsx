import './App.css';
import { Button, CartButton, JournalItem } from './components';

function App() {
	return (
		<>
			<h1>Заголовк</h1>
			<p>какой-то текст</p>

			<CartButton>Новое воспоминание</CartButton>
			<CartButton>
				<JournalItem
					title={'Заголовок'}
					date={new Date()}
					text={'fslkjdflks djfklsjflksj dflksjdflkjskldf sdfsdfsd  sdfv'}
				/>
			</CartButton>
			<Button />
		</>
	);
}

export default App;
