import PropTypes from "prop-types";

const CardService = ({ Icon, titre, desc, Fleche }) => {
  return (
    <div className="mt-8 md:w-auto border rounded-md p-4 w-80 mx-auto h-auto lg:h-75 lg:w-96 sm:w-block sm:h-auto 
    hover:bg-blue-600  hover:text-white">
       <div className="flex items-center justify-center mb-3">
            <div className=' rounded-full bg-blue-500 flex items-center justify-center p-3'>
                <Icon className="h-9 w-9 text-white" />
            </div>
        </div> 
      <h4 className="text-center mb-3 font-semibold font-sans text-xl">{titre}</h4>
      <div className='text-center mb-3  flex items-center justify-center'>
        <p className="text-md font-sans">{desc}</p>
      </div>
      <div className="flex items-center justify-center mb-3">
        <Fleche className="h-6 w-6 " />
      </div>
    </div>
  );
}

CardService.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  titre: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  Fleche: PropTypes.elementType.isRequired,
};

export default CardService;
