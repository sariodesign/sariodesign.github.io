const animations = {
	initial: { scale: 0, opacity: 0 },
	animate: { scale: 1, opacity: 1 },
	exit: { scale: 0, opacity: 0 },
	transition: { type: "spring", stiffness: 900, damping: 40 }
};

interface RatingProps {
	ratingValue: number,
	ratingHandler: (e:React.ChangeEvent<HTMLInputElement>) => void
	submitHandler: (e:React.FormEvent) => void
}

function Rating(props:RatingProps) {
	const ratingInputs:number[] = []; 
	
	for(let i = 1; i <= props.ratingValue; i++) {
		ratingInputs.push(i)
	}

	return (
		<form className="rating" onSubmit={props.submitHandler} >
			{ratingInputs.map(rate => <label {...animations} htmlFor={rate.toString()} key={rate}><input onChange={props.ratingHandler} id={rate.toString()} name="rating" type="radio" value={rate} />{rate}</label>)}
			<button type="submit" >Submit</button>
		</form>
	)
}

export default Rating