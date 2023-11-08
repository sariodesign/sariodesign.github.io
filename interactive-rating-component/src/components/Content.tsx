import { useEffect } from "react"

interface ContentProps {
	voted: boolean,
	image: string,
	title: string,
	text: string,
	rating?: number
}

function Content(props: ContentProps) {
	useEffect(() => {
		console.log('Voted')
	})

	return (
		<article className={props.voted ? `content thank-you` : `content`}>
			{!props.voted ? <div className="icon"><img src={props.image} alt="image" /></div> : <img className="thank-you-image" src={props.image} alt="image" width="162" height="108" /> }
			{props.rating && <div className="rating-message">You selected {props.rating} out of 5</div>}
			<h1>{props.title}</h1>
			<p>{props.text}</p>
		</article>
	)
}

export default Content