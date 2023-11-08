import { useState } from 'react'
import Card from '../components/Card'
import Content from '../components/Content'
import Rating from '../components/Rating'

function RatingForm() {
	const [voted, setVoted] = useState(false)
	const [rating, setRating] = useState(0)

	const contentText = {
		beforeVoted: {
			voted: false,
			image: 'icon-star.svg',
			title: 'How did we do?',
			text: 'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!'
		},
		afterVoted: {
			voted: true,
			image: 'illustration-thank-you.svg',
			title: 'Thank you!',
			text: 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!',
			rating: rating
		}
	}

	function onSubmitHandler(e:React.FormEvent) {
		e.preventDefault()
		// Check if rate is selected		
		if(rating) {
			setVoted(prev => !prev)
		} else {
			alert('Please select rate')
		}
	}

	function onVoteHandler(e:React.ChangeEvent<HTMLInputElement>) {
		// Set rate value
		setRating(Number(e.target.value))
	}

	return (
		<Card>
			{!voted ? <Content {...contentText.beforeVoted } /> : <Content {...contentText.afterVoted} />}
			{!voted && 	<Rating ratingValue={5} submitHandler={onSubmitHandler} ratingHandler={onVoteHandler} />}
		</Card>
	)
}

export default RatingForm