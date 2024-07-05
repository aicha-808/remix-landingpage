

export default function Logo() {
    return(
        <section className="container grid grid-cols-2 gap-3 lg:flex lg:justify-between items-center mt-9 lg:mt-24 md:flex lg:justify-between   px-3 mx-auto " id="projects">
            <div className=" w-32 h-15  mb-3"> 
                <img src="/logo1.png" alt="" className=" fill "/> 
            </div>
            <div className=" w-32 h-15 mb-3">
                 <img src="/logo2.jpg" alt="" className=" fill"/>
            </div>
            <div className=" w-32 h-15 mb-3">
                <img src="/logo3.png" alt="" className=" fill"/>
            </div>
            <div className=" w-32 h-15 mb-3">
                <img src="/logo4.jpg" alt="" className=" fill"/>
            </div> 
        </section>
    )
}