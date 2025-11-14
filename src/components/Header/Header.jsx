import { useState } from 'react';

import { SelectUser, Button } from '..';
import Logo from '../Logo/Logo';

export function Header() {
	const [logoIndex, setLogoIndex] = useState(0);

	console.log('Header');

	const toggleLogo = () => {
		setLogoIndex(state => Number(!state));
	};

	return (
		<>
			<Logo logoIndex={logoIndex} />
			<SelectUser />
			<Button onClick={toggleLogo}>Toggle</Button>
		</>
	);
}
