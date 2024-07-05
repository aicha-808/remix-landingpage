import PropTypes  from "prop-types"

const Entete = ({ titre, sousTitre, desc}) => {
    return(
        <>
            <h1 className="text-blue-500 md:block  px-3 font-semibold text-center font-display text-xl">{titre}</h1>
            <div className="w-block mb-3 md:w-block">
                <h4 className="font-bold text-2xl lg:text-3xl text-center font-sans">{sousTitre}</h4>
            </div>
            <div className="w-3/5 px-3 mb-3 md:w-block mx-auto">
                <p className="text-md text-center font-display">{desc}</p>
            </div>
        </>
    )
}

Entete.propTypes = {
    titre: PropTypes.string.isRequired,
    sousTitre: PropTypes.string.isRequired,
    desc:PropTypes.string.isRequired,
  };

export default Entete