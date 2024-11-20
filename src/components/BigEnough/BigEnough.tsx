// import React from 'react';
// import './BigEnough.css';

// const integrations = Array(4).fill({
//   count: "40+",
//   description: "Integrations",
// });

// const BigEnough: React.FC = () => {
//   return (
//     <div className="hubnex-section">
//       <div className="header">
//         <h1>We are big enough to deliver and small enough to care</h1>
//         <p>Teams large and small rely on Hubnex Labs</p>
//         <button className="connect-sales-button">Connect Sales →</button>
//       </div>

//       <div className="integrations-container">
        
//         {integrations.map((integration, index) => (
//           <div key={index} className="integration-card">
//             <h2>{integration.count}</h2>
//             <p>{integration.description}</p>
            
//           </div>
          
//         ))}
//       </div>

      
//     </div>
//   );
// };

// export default BigEnough;
import React from 'react';
import './BigEnough.css';

const integrations = Array(4).fill({
  count: "40+",
  description: "Integrations",
});

const BigEnough: React.FC = () => {
  return (
    <div className="hubnex-section">
      <div className="header">
        <h1>We are big enough to deliver and small enough to care</h1>
        <p>Teams large and small rely on Hubnex Labs</p>
        <button className="connect-sales-button">Connect Sales →</button>
      </div>

      <div className="integration-wrapper">
        <div className="integrations-container">
          {integrations.map((integration, index) => (
            <div key={index} className="integration-card">
              <h2>{integration.count}</h2>
              <p>{integration.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BigEnough;
