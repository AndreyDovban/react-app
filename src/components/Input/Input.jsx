import styles from './Input.module.css';
import cn from 'classnames';
import { forwardRef } from 'react';

export const Input = forwardRef(function Input({ className, isValid = true, appearence, ...props }, ref) {
	return (
		<input
			{...props}
			ref={ref}
			className={cn(className, styles.input, {
				[styles.input_title]: appearence === 'title',
				[styles.invalid]: !isValid,
			})}
		/>
	);
});
