import Entete from '../components/Entete';
import { MegaphoneIcon,PaperAirplaneIcon, ArrowRightCircleIcon, CogIcon } from "@heroicons/react/16/solid";
import CardService from "../components/CardService";


const Services = () => {
  const cardData = [
    { Icon: MegaphoneIcon, titre: 'SEO', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem arcu adipiscing quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Fleche: ArrowRightCircleIcon },
    { Icon: PaperAirplaneIcon, titre: 'Marketing', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem arcu adipiscing quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Fleche: ArrowRightCircleIcon },
    { Icon: CogIcon, titre: 'Promotion', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem arcu adipiscing quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', Fleche: ArrowRightCircleIcon }
  ];

  return (
    <section className="container lg:mx-auto  lg:mt-24 mt-9 w-block md:w-block" id='services'>
      <div className='lg:flex items-center lg:justify-center h-full'>
        <div className="">
          <Entete
            titre='Our Services'
            sousTitre='Perfect Solution For Your Business'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem arcu adipiscing quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          />
        </div>
      </div>
      <div className='grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-0'>
        {
          cardData.map((card, index) => (
            <CardService
              key={index}
              Icon={card.Icon}
              titre={card.titre}
              desc={card.desc}
              Fleche={card.Fleche}
            />
          ))
        }
      </div>
    </section>
  );
}

export default Services;

