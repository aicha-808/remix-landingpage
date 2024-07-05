import Entete from '../components/Entete'
import Plan from '../components/Plan';


const Pricing = () => {
    
  const planData = [
    {  prix: '$19', mois: '/month', title: 'Starter',desc:'Unleash the power of automation.',text1:'Multi-step Zaps',text2:'3 Premium Apps',text3:'2 Users team',classNameText4: 'hidden',classNameText5: 'hidden',butName:'Choose plan' },
    {  prix: '$54', mois: '/month', title: 'Professional',desc:'Advanced tools to take your work to the next level.',text1:'Multi-step Zaps',text2:'Unlimited Premium Apps',text3:'50 Users team',text4: 'Shared Workspace',classNameText5: 'hidden',butName:'Choose plan' },
    {prix: '$89', mois: '/month', title: 'Company',desc:'Automation plus enterprise-grade features.',text1:'Multi-step Zap',text2:'Unlimited Premium Apps',text3:'Unlimited Users Team',text4:'Advanced Admin',text5:'Custom Data Retention',butName:'Choose plan'},
   
  ];

  return (
    <section className="container mx-auto  mt-24 md:w-auto ">
      <div className='flex items-center justify-center h-full'>
        <div className="">
          <Entete
            titre='Pricing Plan'
            sousTitre='Choose Your Plan'
            desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem arcu adipiscing quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border rounded-md mt-8 mx-auto p-5 w-4/5 sm:mx-block md:mx-block'>
      {
          planData.map((plan, index) => (
            <Plan
              key={index}
            //   className={index === plan.length - 1 ? "bg-blue-500 rounded-lg" : ""}
              prix={plan.prix}
              mois={plan.mois}
              title={plan.title}
              desc={plan.desc}
              text1={plan.text1}
              text2={plan.text2}
              text3={plan.text3}
              text4={plan.text4}
              text5={plan.text5}
              classNameText4={plan.classNameText4}
              classNameText5={plan.classNameText5}
              butName={plan.butName}
            />
          ))
        }
      </div>
    </section>
  );
}

export default Pricing;

