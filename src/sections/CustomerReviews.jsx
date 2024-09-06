import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center font-bold text-4xl">
      What Our <span className="text-coral-red">Customers </span>
      Say?</h3>
      <p className="mt-3 m-auto max-w-lg info-text text-center">Hear genuine stories from our satisfied customers 
        about thier exceptional experiences with us</p>
        <div className="mt-24 flex flex-1 flex-col md:flex-row justify-evenly items-center gap-14">
          {reviews.map((review)=>(
              <ReviewCard key={review.customerName}
              imgURL={review.imgURL} 
              customerName={review.customerName} 
              rating={review.rating} 
              feedback={review.feedback}/>
          ))}
        </div>
    </section>
  )
}

export default CustomerReviews
