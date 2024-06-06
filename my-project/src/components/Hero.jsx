import { Link } from "react-router-dom"


import hero1 from '../assets/matrixx.jpg'
import hero2 from '../assets/elon-books-4.png'
import hero3 from '../assets/elon-books-2.png'
import hero4 from '../assets/elon-books.png'

const carouselImages = [hero1 , hero2 , hero3, hero4];

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
        <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box "> 
            {carouselImages.map((image) => {
                    return (
                    <div key={image} className="carousel-item">
                        <img src={image} className="rounded-box h-full w-80 object-cover" />
                    </div>
                    );
                })}
        </div>
    </div>
  )
}

export default Hero