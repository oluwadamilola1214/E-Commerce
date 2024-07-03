import './Hero.css'
import Hand_icon from '../../src/assets/hand-icon.jpg'
// import arrow_icon from '../../src/assets/arrow.png'
import hero_image from '../../src/assets/hero-image.jpg'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>new</p>
                        <img src={Hand_icon} alt="" />
                    </div>
                    <p>Collections</p>
                    <p>for everyone</p>
                </div>
                <div className='hero-latest-btn'>
                    <div>Latest Collection</div>
                    {/* <img src={arrow_icon} alt="" /> */}
                </div>
            </div>
                <div className="hero-right">
                    <img src={hero_image} alt="" />

                </div>
            </div>
       
    )
}

export default Hero