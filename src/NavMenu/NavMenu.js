import './NavMenu.css'
import ProfileLogo from './../Resources/ProfileIcon.svg'
import EmailIcon from './../Resources/EmailIcon.svg'
import MusicIcon from './../Resources/MusicIcon.svg'
import NewsIcon from './../Resources/NewsIcon.svg'
import SettingsIcon from './../Resources/SettingsIcon.svg'

const NavMenu = () => {
    return (
        <div className="Menu">
            <div>
                <img src={ProfileLogo}/>
                <a href={"#p"}>Profile</a>
            </div>
            <div>
                <img src={EmailIcon}/>
                <a href={"#p"}>Messages</a>
            </div>
            <div>
                <img src={NewsIcon}/>
                <a href={"#p"}>News</a>
            </div>
            <div>
                <img src={MusicIcon}/>
                <a href={"#p"}>Music</a>
            </div>
            <br/>
            <div>
                <img src={SettingsIcon}/>
                <a href={"#p"}>Settings</a>
            </div>
        </div>
    );
};

export default NavMenu;