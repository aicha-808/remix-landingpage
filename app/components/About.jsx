import Entete from "./Entete";
import { StarIcon } from "@heroicons/react/16/solid";
import { Carousel } from "flowbite-react";


const About = () => {
    

    return(
        <section className="container mx-auto mt-9 md:mt-24 lg:mt-24 md:w-auto" id="about">
            <div className='flex items-center justify-center h-full'>
                <div className="">
                    <Entete
                        titre='Client Testmonials'
                        sousTitre='What our clients tell about us?'/>
                </div>
            </div>
            
            <div className=" w-1/2 mx-auto h-96  ">
                <Carousel className="mt-0 pt-0">
                    <div className="dark:bg-gray-700 dark:text-white border  rounded-lg p-4">
                        <div className="flex justify-between">
                            <div className="profil flex gap-3">
                            <div className='w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center p-1'>
                                <img src="/avatar.jfif" className="h-6 w-6" alt=""/>
                            </div>
                            <div>
                                <h4 className="font-bold font-sans">Jane Cooper</h4>
                                <p className="font-sans ">01/01/2021</p>
                            </div>
                            </div>
                            <div className="icone flex gap-2">
                            <StarIcon className="h-4 w-4 text-orange-500" />
                            <StarIcon className="h-4 w-4 text-orange-500" />
                            <StarIcon className="h-4 w-4 text-orange-500" />
                            <StarIcon className="h-4 w-4 text-orange-500" />
                            <StarIcon className="h-4 w-4 text-orange-500" />
                            </div>
                        </div>
                        <h4 className="font-semibold px-3 mt-3 display">Amazing Service</h4>
                        <div className=" px-3 mb-3 md:w-block">
                            <p className="text-xs leading-5 font-sans">Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Krofask nystartsjobb det vill säga vinde.   Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad.  Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Krofask nystartsjobb det vill säga vinde.   Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Krofask nystartsjobb det vill säga vinde. 
                                Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad.</p>
                        </div>
                    </div>  
                    <div className="dark:bg-gray-700 dark:text-white border  rounded-lg p-4">
                        <div className="flex justify-between">
                            <div className="profil flex gap-3">
                            <div className='w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center p-1'>
                                <img src="/avatar.jfif" className="h-6 w-6" alt=""/>
                            </div>
                            <div>
                                <h4 className="font-bold font-sans">Jonh Denis</h4>
                                <p className="font-sans ">01/01/2021</p>
                            </div>
                            </div>
                            <div className="icone flex gap-2">
                            <StarIcon className="h-4 w-4 text-orange-500" />
                            <StarIcon className="h-4 w-4 text-orange-500" />
                            <StarIcon className="h-4 w-4 text-orange-500" />
                            <StarIcon className="h-4 w-4 text-orange-500" />
                            <StarIcon className="h-4 w-4 text-orange-500" />
                            </div>
                        </div>
                        <h4 className="font-semibold px-3 mt-3 display">Amazing Service</h4>
                        <div className=" px-3 mb-3 md:w-block">
                            <p className="text-xs leading-5 font-sans">Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Krofask nystartsjobb det vill säga vinde.   Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad.  Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Krofask nystartsjobb det vill säga vinde.   Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad. Krofask nystartsjobb det vill säga vinde. 
                                Lörem ipsum sorad Madeleine Engström. Du kan vara drabbad.</p>
                        </div>
                    </div> 
                </Carousel>
            </div>
        </section>
    )
}

export default About;