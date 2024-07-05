import { Link } from "@remix-run/react";



export default function Footer() {


  return (
  <section className="container mx-auto mt-9  lg:mt-24 :w-auto font-display">
    <div className="lg:flex lg:justify-between  lg:gap-2  grid-cols-1 gap-1  ">
        <div className="mb-3">
           <div className="w-24"> <h1 className="self-center  font-semibold whitespace-nowrap text-dark-600 bg-blue-600 font-display text-3xl">Cölab</h1></div>
            <div className="w-96 mt-3 md:w-block">
                <p className="text-sm leading-4 font-sans leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem arcu adipiscing quis.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas lorem arcu adipiscing quis. </p>
            </div>
            <div className=' flex gap-3 mt-3'>
                <span className=""><i className="fab fa-facebook"></i></span>
                <span><i className="fab fa-linkedin"></i></span>
                <span><i className="fab fa-pinterest"></i></span>
            </div>
        </div>
        <div className="mb-3">
            <h4 className="text-lg font-semibold">Links</h4>
            <ul className="w-block mt-2 font-display leading-5">
               <li> <Link to="/about" className="text-sm">About</Link></li>
               <li> <Link to="/services" className="text-sm">Services</Link></li>
               <li> <Link to="/blog" className="text-sm">Blog</Link></li>
               <li> <Link to="/about" className="text-sm">About</Link></li>
               <li> <Link to="/Contact" className="text-sm">Contacts</Link></li>
            </ul>
        </div>
        <div className="mb-3">
            <h4 className="text-lg font-semibold  leading-4">Our Office</h4>
            <div className="w-96 mt-3 md:w-block">
                <p className="text-sm font-display  leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem arcu adipiscing quis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas lorem arcu adipiscing quis. </p>
            </div>
        </div>
    </div>
        <hr className="mt-4 font-display" />
        <p className="text-center mt-2  leading-4 text-sm">© 2022 All Righjt Reserved</p>
  </section>
  );
}
