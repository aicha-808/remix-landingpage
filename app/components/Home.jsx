// import homeImg from '../../public/home.jpg'
import { PlayCircleIcon } from "@heroicons/react/16/solid"


export default function Home() {
    return(
        <section className="container mx-auto  mt-40  px-3 lg:flex lg:justify-between md:flex md:justify-between" id="home">
            <div className="lg:w-1/2 h-auto mx-auto w-block">
                <h1 className="text-blue-500 lg:text-sm px-3 font-semibold font-display text-xl">A Trusted Digital Agency</h1>
                <div className="lg:w-80 mb-2 w-80">
                    <h4 className="font-bold text-3xl font-sans">We’re A Creative
                    Digital Agency.</h4>
                </div>
                <div className="lg:w-96 px-3 mb-2 w-block md:w-96">
                    <p className="lg:text-md text-lg font-display ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem arcu adipiscing quis. </p>
                </div>
                <div className="bouton mt-8 flex items-center space-x-2">
                    <button className="p-1 text-lg w-48  lg:p-1 lg:w-32 lg:text-sm bg-blue-500 text-white rounded font-sans"> Get started</button>
                    <button className="p-1 text-lg w-48 lg:p-1 lg:w-32  lg:text-sm ml-3 flex items-center space-x-2 font-sans"><PlayCircleIcon className="h-4 w-4 text-green-500 mr-1" />How It Works</button>
                </div>
            </div>
            <div className=" lg:w-1/2 lg:h-auto  mt-0 mx-0 lg:px-5 ">
                <img src='/home.png' alt="homeImg"  className="h-64 w-96 object-cover lg:max-w-lg"/>
            </div>
        </section>
    )
}