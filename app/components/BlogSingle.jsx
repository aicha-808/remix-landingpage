import PropTypes from 'prop-types'

const BlogSingle = ({Icon, titre, desc}) => {
    return(
        <>
            <div className="flex mb-2 gap-8">
                <div className="left">
                    <div className='w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center p-2'>
                        <Icon className="w-6 h-6 text-white" />
                    </div>
                </div>
                <div className="">
                    <h4 className=' mb-2 font-semibold text-lg font-sans text-xl '>{titre}</h4>
                    <div className=' mb-2  w-80 lg:text-xs text-md font-sans'>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

BlogSingle.propTypes = {
    Icon: PropTypes.elementType.isRequired,
    titre: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  };

export default BlogSingle; 