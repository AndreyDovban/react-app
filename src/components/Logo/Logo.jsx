import styles from './Logo.module.css';
import { memo } from 'react';

const logos = ['/logo.svg', '/vite.svg'];

function Logo({ logoIndex }) {
	console.log('Logo');

	return <img src={logos[logoIndex]} className={styles.logo} />;
}

export default memo(Logo);
