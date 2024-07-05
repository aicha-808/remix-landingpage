import PropTypes from "prop-types";

const Plan = ({prix,mois, title, desc,text1, text2, text3,text4,text5,butName,classNameText4,classNameText5}) => {
  return (
    <div  className='p-4 hover:bg-blue-600 hover:rounded-lg hover:text-white hover:scroll-my-6'>
      <h3 className=""><span className="text-2xl font-bold font-sans">{prix}  </span><span className="text-xs text-gray font-sans">{mois}</span></h3>
        <h2 className="font-semibold  text-lg mt-3 font-dispay">{title}</h2>
        <div className="lg:w-48 w-block mt-2 lg:text-sm text-gray font-sans text-lg">
            <p>{desc}</p>
        </div>
        <div className="mt-2 text-sm text-gray  font-sans">
            <p className=""><i className="fas fa-check-circle"></i><span className="ml-2">{text1}</span></p>
            <p className=""><i className="fas fa-check-circle"></i><span className="ml-2">{text2}</span></p>
            <p className=""><i className="fas fa-check-circle"></i><span className="ml-2">{text3}</span></p>
            <p className={classNameText4}><i className="fas fa-check-circle"></i><span className="ml-2">{text4}</span></p>
            <p className={classNameText5}><i className="fas fa-check-circle"></i><span className="ml-2">{text5}</span></p>
        </div>
        <button className="rounded-lg py-2 px-9 mt-24 border hover:bg-white font-sans">{butName}</button>
    </div>
  );
};

Plan.propTypes = {
  title: PropTypes.string.isRequired,
  prix: PropTypes.string.isRequired,
  mois: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  text3: PropTypes.string.isRequired,
  text4: PropTypes.string.isRequired,
  text5: PropTypes.string.isRequired,
  butName: PropTypes.string.isRequired,
  classNameText4:PropTypes.string,
  classNameText5:PropTypes.string,
};

export default Plan;
