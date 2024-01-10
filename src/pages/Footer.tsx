import '../styles/Footer.css';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoTime } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import GoogleMap from '../components/GoogleMap';
import { useTranslation } from 'react-i18next';

const Footer = () => {

    const [t, i18n] = useTranslation("global");
    const imgLogo = 'img/free_logo.png';
    const descriptionBusiness = t("Footer.businessDecrption");

    const secondSectionTitle = t("Footer.contactInfo.title");
    const contact = [
        {
            name: "Isabel González",
            phone: "713-123-1001"
        },
        {
            name: "Carolina González",
            phone: "832-123-1002"
        },
        {
            name: "Carlos Muñoz",
            phone: "347-123-1003"
        }
    ]



    const email = "company.info@domain.net";
    const schedule = `${t("Footer.contactInfo.schedule")}<br>08:00 - 20:00`
    const address = "6001 Fannin St, Houston, TX 77030"

    const thirdSectionTitle = t("Footer.location");

    //const address_google = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.0420916032213!2d-95.7812199!3d29.776424399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864126dd182754bf%3A0x71a4c41d9650616a!2s23405%20W%20Fernhurst%20Dr%2C%20Katy%2C%20TX%2077494%2C%20EE.%20UU.!5e0!3m2!1ses-419!2spe!4v1701660541831!5m2!1ses-419!2spe";
    const address_google = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13860.987665493778!2d-95.39202367194164!3d29.712606110976406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf86e7025947%3A0xb126236b43ef0b41!2sParque%20Hermann!5e0!3m2!1ses-419!2sus!4v1714509681313!5m2!1ses-419!2sus";





    const link_fb = "https://www.facebook.com";
    const link_ig = "https://www.instagram.com";
    const link_wsp = "https://web.whatsapp.com";


    return (
        <>
        
        <div className='footer grid'>
            <div className='column1 flex flex-column'>
                <div className='colInside flex flex-column'>
                    <div className='logo'><img src={imgLogo} /></div>
                    <h4>{descriptionBusiness}</h4>
                    <div className='socialIcons flex flex-row' >
                        <a href={link_fb} target="blank"><FaSquareFacebook className='icon' /></a>
                        <a href={link_ig} target="blank"><FaSquareInstagram className='icon' /></a>
                        <a href={link_wsp} target="blank"><FaSquareWhatsapp className='icon' /></a>
                    </div>

                </div>
            </div>
            <div className='column2 flex flex-column'>
                <div className='colInside flex flex-column'>
                    <div className='title flex flex-column'>
                        <h2>{secondSectionTitle}</h2>
                    </div>
                    <div className='contactInfo'>
                        <FaPhone className='icon' />
                        <div>
                            {contact.map((item, index) => (
                                <div key={index}  className='phones-container'>
                                    <h1>{item.name}:</h1>
                                    <h1>{item.phone}</h1>
                                </div>
                            ))}
                        </div>




                        <IoMdMail className='icon' />
                        <h1>{email}</h1>
                        <FaLocationDot className='icon' />
                        <h1 dangerouslySetInnerHTML={{ __html: address }}></h1>
                        <IoTime className='icon' />
                        <h1 dangerouslySetInnerHTML={{ __html: schedule }}></h1>
                    </div>
                </div>


            </div>

            <div className='column3 flex flex-column'>
                <div className='colInside flex flex-column'>
                    <div className='title flex flex-column'>
                        <h2>{thirdSectionTitle}</h2>
                    </div>
                    <div className='map'>
                        <GoogleMap src={address_google} />

                    </div>

                </div>
            </div>

            

        </div>
        <div className="copyright_bar">
    <h4><a href='https://github.com/jotadlcr'>GitHub JotaDlcr</a> © COPYRIGHT 2024</h4>
</div>

        </>
        
    );

}

export default Footer;