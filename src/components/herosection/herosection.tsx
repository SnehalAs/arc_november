import './herosection.css';

const HeroSection = () => {
  return (
    <>
      <div className="text">
        <div className="left-content">
          <h1 className='heading'>Saas Growth With Weekly Tips.</h1>
          <p className='para'>
          Clarity gives you the blocks & components you need to create
           a truly professional website, landing page, or admin panel for your SaaS.
            Clarity gives you the blocks & components you need. Clarity gives you the blocks.
          </p>

          {/* Buttons should be placed below paragraph */}
          <div className='btn-container'>
            <button className='btn1'>ContactUs</button>
            <button className='btn2'>Join Us</button>
          </div>

          <br />
          <br />
          
      
      <div className="company-stats">
        <div className="company-info">
          <div className="company-images">
            <img src="src\assets\person1.png" alt="Person 1" className="circle-img" />
            <img src="src\assets\person2.png" alt="Person 2" className="circle-img" />
            <img src="src\assets\person3.png" alt="Person 3" className="circle-img" />
          </div>
          <strong>5,910+</strong>
          <p>Companies are using & it's growing every day</p>
        </div>

        <div className="divider"></div>

        <div className="rating-info">
          <strong>4.5/5</strong>
          <div className="stars">
            ⭐⭐⭐⭐⭐
          </div>
          <p>Trusted by the top companies worldwide</p>
        </div>
      </div>
        </div>

        {/* Right side with image */}
        <div>
          <img className="img" src="src/components/herosection/hero.png" alt="Hero" />
        </div>
      </div>

      <h4 className='smallhead'>Join 4,000+ companies already growing</h4>


      
      <div>



         
      {/* <p className='floating-logo'>floating logo</p> */}
      <div className="marquee-container">
  <div className="marquee">
    <img src="src/components/herosection/hubnex.png" alt="Company Logo" width="100" />
    <img src="src/components/herosection/tcs.png" alt="Company Logo" width="100" />
    <img src="src/components/herosection/infosys.png" alt="Company Logo" width="100" />
    <img src="src/components/herosection/altos.png" alt="Company Logo" width="100" />
  </div>
</div>

      </div>



      
    </>
  );
};

export default HeroSection;
