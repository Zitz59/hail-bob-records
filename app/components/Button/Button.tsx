import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './Button.module.scss'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
	xType?: string
}

const Button: React.FC<ButtonPropsType> = (
	{
		xType,
		className,
		disabled,
		...restProps // все остальные пропсы попадут в объект restProps, там же будет children
	}
) => {

	const finalClassName = [
		s.button,
		disabled
			? s.disabled
			: xType === 'red'
				? s.red
				: xType === 'secondary'
					? s.secondary
					: s.default,
		className
	].filter(Boolean).join(' ')


	return (
		<button
			disabled={disabled}
			className={finalClassName}
			{...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
		/>
	)
}

export default Button