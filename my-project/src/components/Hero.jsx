import { Link } from "react-router-dom"

import slider1 from '../assets/matrixx.jpg'
import slider2 from '../assets/elon-books-4.png'
import slider3 from '../assets/elon-books-2.png'
import slider4 from '../assets/elon-books.png'

const carouselImages = [slider1,slider2,slider3,slider4]

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">Choose Your Side Red Or Blue Pill</h1>
            <p className="mt-8 max-w-xl text-lg leading-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem obcaecati doloremque rerum. Ratione tempore omnis placeat delectus, fugiat nesciunt! Optio labore veritatis ex eveniet aliquid cupiditate quaerat atque impedit?</p>
            <div className="mt-10">
                <Link to='/products' className="btn btn-primary">
                    Our Products
                </Link>
            </div>
        </div>
        <di v className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box "> 
            {carouselImages.map((image) => {
                    return (
                    <div key={image} className="carousel-item">
                        <img src={image} className="rounded-box h-full w-80 object-cover" />
                    </div>
                    );
                })}
        </di>
    </div>
  )
}

export default Hero