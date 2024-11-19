import RetroGrid from "@/components/ui/retro-grid";
import './benifits.css';

// const benefits = [
//   {
//     title: "Dedicated Project Manager",
//     description: "lorem ipsum lorem ipsum lorem ipsum",
//     icon: "👨‍💼",
//     image: "src/components/Benifits/benifits.png", 
//   },
//   {
//     title: "100% Customer Satisfaction",
//     description: "lorem ipsum lorem ipsum lorem ipsum",
//     icon: "😊",
//     image: "src/components/Benifits/benifits1.png", 
    
//   },
//   {
//     title: "On Time Delivery",
//     description: "lorem ipsum lorem ipsum lorem ipsum",
//     icon: "⏱️",
//     image: "src/components/Benifits/benifits2.png", 
    
//   },
  
// ];

// const Benefits: React.FC = () => {
//   return (
//     <div className="app">
//       <h1 className="title" style={{
//     fontSize: "4rem",
//     fontWeight: "bold",
//     textAlign: "center",
    
//     color: "#333",
//   }}>Benefits to Join Hubnex Labs</h1>
//       <div className="benefits-container">
//         {benefits.map((benefit, index) => (
//           <div key={index} className="benefit-card">
//             <img src={benefit.image} alt={benefit.title} className="benefit-image" />
//             <div className="benefit-content">
//               <div className="benefit-icon">{benefit.icon}</div>
//               <h2 className="benefit-title">{benefit.title}</h2>
//               <p className="benefit-description">{benefit.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Benefits;
const Benefits = () => {
  return (
    <section className='partner-choose'>
      <div className='background-grid'>
        <h1>Benefits to Join Hubnex Labs</h1>

        <RetroGrid />
      </div>
      <div className='cards-container'>
        <div className='card'>
          <div className='image-placeholder'>
            <img src='src\assets\ontimedelivery.svg' alt='' />
          </div>
          <div className='advance'>
            <h1 className='card-heading'>Fast MVP Development</h1>
            <p className='card-text'>
              We develop the prototypes and MVP for the ERP System within a few
              months and optimise the final product based on its performance
              metrics and your feedback.
            </p>
          </div>
        </div>

        <div className='card'>
          <div className='image-placeholder'>
            <img src='src\assets\support.svg' alt='' />
          </div>
          <div className='advance'>
            <h1 className='card-heading'>Maintenance & Support</h1>
            <p className='card-text'>
              Our work does not end with delivery. We offer complete support and
              maintenance post the launch of the ERP systems to ensure their
              smooth functioning.
            </p>
          </div>
        </div>

        <div className='card'>
          <div className='image-placeholder'>
            <img src='src\assets\satisfaction.svg' alt='' />
          </div>
          <div className='advance'>
            <h1 className='card-heading'>Smooth ERP Intergration</h1>
            <p className='card-text'>
              We ensure smooth ERP integration with other business parts,
              including other ERPs, Salesforce, Office Suite, and IoT systems,
              for effective, seamless business operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
