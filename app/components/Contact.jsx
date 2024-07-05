


export default function Contact() {
    return(
        <section className="container mt-9 p-5 lg:mx-auto md:mx-auto lg:flex lg:justify-between lg:mt-24 md:w-auto" id="contacts">  
            <div className=" lg:w-1/2 h-64 w-block ">
                <h1 className="text-blue-500 block font-display text-xl font-semibold">Contact Us</h1>
                <div className="lg:w-80 mt-3 w-auto">
                    <h4 className="font-bold  text-3xl font-sans">Ready to get started?</h4>
                </div>
                <div className="lg:w-96  mt-4 w-block">
                    <p className="lg:text-md text-lg font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem arcu adipiscing quis. </p>
                </div>
                <div className="bouton mt-6 ">
                    <button className="p-1 text-lg w-48 lg:py-2 lg:px-3  lg:w-32 bg-blue-500 text-white rounded font-sans">Get In Touch</button>
                </div>
            </div>
            <div className="lg:w-1/2 h-64 lg:h-64 md:w-block ">
                <img src='/entre.jpg' alt="homeImg"  className="h-auto lg:cover lg:max-w-lg lg:me-auto"/>
            </div>
        </section>
    )
}