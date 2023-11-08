
interface CardProps {
	classes?: string[],
	children: React.ReactNode;
}

function Card(props: CardProps) {
	const cls = props.classes?.join(' ')

	return (
		<div className={props.classes ? `card ${cls}` : `card`}>
			{props.children}
		</div>
	)
}

export default Card