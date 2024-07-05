import { Cog6ToothIcon, UserGroupIcon, UserMinusIcon} from "@heroicons/react/16/solid"; 
import BlogSingle from '../components/BlogSingle';

const Blog = () => {

    const blogdata = [
        { Icon: Cog6ToothIcon, titre: 'Working Process', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem arcu adipiscing quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        { Icon: UserGroupIcon, titre: 'Dedicated Team', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem arcu adipiscing quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        { Icon: UserMinusIcon, titre: '24/7 Support', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem arcu adipiscing quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    ]

    return(
        <section className='container mt-9 mx-auto  lg:flex lg:justify-between lg:mt-24 w-auto' id="blog">
            <div className="left w-3/5 h-[40rem] md:w-block  p-1 md:h-auto ">
                <div className="top">
                    <h1 className="text-blue-500 md:block lg:text-lg  font-semibold mb-2 font-display text-xl">Why You Choose Us?</h1>
                    <div className="w-96 mb-2 md:w-block px-4">
                        <h4 className="font-bold  text-2xl lg:text-xl font-sans">Specialist in aviding clients on financial challenges</h4>
                    </div>
                    <div className="w-96 px-3 mb-2 md:w-block px-2">
                        <p className="text-md font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Maecenas lorem arcu adipiscing quis. </p>
                    </div>
                </div>

                <div className='grid grid-cols-1 mt-8 '>
                    {
                    blogdata.map((blog, index) => (
                        <BlogSingle
                        key={index}
                        Icon={blog.Icon}
                        titre={blog.titre}
                        desc={blog.desc}
                        />
                    ))
                    }
                </div>
                
            </div>
            <div className='  p-3  '>
                {/* <div className="bleu bg-blue-500  w-64 h-96 absolute top-24 left-48 z-0 rounded-sm">bleu</div> */}
                {/* <div className="blanc lg:w-96 lg:h-96  lg:absolute lg:top-24 lg:left-32 "> */}
                    <img src="/etudiant.jpg" alt="" className=" h-auto  lg:me-auto lg:rounded-lg lg:h-auto lg:max-w-full" />
                {/* </div> */}
            </div>
        </section>
       
    )
}

export default Blog;