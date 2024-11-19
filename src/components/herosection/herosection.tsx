import './herosection.css';
import { FaArrowRight  } from "react-icons/fa"; //FaStar

const HeroSection = () => {
  return (
    <>
      <div className="text">
        <div className="left-content">
          <h1 className="heading">SaaS Growth With Weekly Tips.</h1>
          <p className="para">
            Clarity gives you the blocks & components you need to create
            a truly professional website, landing page, or admin panel for your SaaS.
            Clarity gives you the blocks & components you need. Clarity gives you the blocks.
          </p>

          <div className="btn-container">
            <button className="contact">
              Contact Us <FaArrowRight />
            </button>
            <button className="Join">
              Join Us <FaArrowRight />
            </button>
          </div>

          <div className="company-stats">
            <div className="company-info">
              <div className="company-images">
                <img src="src/assets/person1.png" alt="Person 1" className="circle-img" />
                <img src="src/assets/person2.png" alt="Person 2" className="circle-img" />
                <img src="src/assets/person3.png" alt="Person 3" className="circle-img" />
              </div>
              <strong>5,910+</strong>
              <p>Companies are using & it's growing every day</p>
            </div>

            <div className="divider"></div>
            <div className='Mystat-item'>
              <div className='Myrating My-rating'>
                <span className='Mystat-number'>4.5/5<span className='Mystars'>★★★★★</span></span>
                <span className="Myrtext" >Trusted by the top companies worldwide</span>
              </div>
              </div>

{/* 
            <div className="rating-info">
              <strong>4.5/5</strong>
              <div className="stars">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} color={index < 4.5 ? "#1d4ed8" : "#ccc"} />
                ))}
              </div>
              <p>Trusted by the top companies worldwide</p>
            </div> */}
          </div>
        </div>

        <div>
          <img className="img" src="src/components/herosection/hero.png" alt="Hero" />
        </div>
      </div>

      <h4 className="smallhead">Join 4,000+ companies already growing</h4>

      <div className="marquee-container">
        <div className="marquee">
          <img src="src\assets\companylogo1.svg" alt="Company Logo" width="100" />
          <img src="src\assets\companylogo2.svg" alt="Company Logo" width="100" />
          <img src="src\assets\companylogo3.svg" alt="Company Logo" width="100" />
          <img src="src\assets\companylogo4.svg" alt="Company Logo" width="100" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;

