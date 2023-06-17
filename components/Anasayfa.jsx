
import myImage from '../assets/images/logo.png';


const Anasayfa = ({prop}) => {
    
    return (
        
        <div className="container">
            <div className='logo'>
                <img src={myImage} alt=""/>
            </div>
            <div className='logo-left'>
                <img src={myImage} alt=""/>
            </div>
            <div className='logo-right'>
                <img src={myImage} alt="" />
            </div>

        </div>

    )
}

export default Anasayfa