import style from './Profile.module.css'
import logo from '../../logo.svg'
import picture from './../../Resources/TestImg.jpg'

const Profile = () => {
    return (
        <div className={style.Body}>
            <div className={style.Content}>
                <div className={style.ProfileHeader}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, doloribus? Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit. Aspernatur delectus dicta earum exercitationem expedita
                        hic ipsam nisi pariatur, provident quam quasi repellendus vel! Architecto dignissimos distinctio
                        dolorum exercitationem hic incidunt nobis, obcaecati quas, rerum tenetur unde ut. Accusantium
                        atque autem blanditiis commodi cumque, deserunt enim facere labore laboriosam quo sit?</p>
                </div>
                <div className={style.ProfilePosts}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, doloribus? Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit. Aspernatur delectus dicta earum exercitationem expedita
                        hic ipsam nisi pariatur, provident quam quasi repellendus vel! Architecto dignissimos distinctio
                        dolorum exercitationem hic incidunt nobis, obcaecati quas, rerum tenetur unde ut. Accusantium
                        atque autem blanditiis commodi cumque, deserunt enim facere labore laboriosam quo sit? Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit. Commodi, doloribus? Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit. Aspernatur delectus dicta earum exercitationem expedita
                        hic ipsam nisi pariatur, provident quam quasi repellendus vel! Architecto dignissimos distinctio
                        dolorum exercitationem hic incidunt nobis, obcaecati quas, rerum tenetur unde ut. Accusantium
                        atque autem blanditiis commodi cumque, deserunt enim facere labore laboriosam quo sit?</p>
                </div>
            </div>
            <div className={style.Images}>
                <img src={logo} className={style.AppLogo}/>
            </div>

        </div>
    );
};

export default Profile;