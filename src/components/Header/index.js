import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';

export function Header(props) {
    return (
        <div className="container-fluid p-4 bg-primary text-white text-center">
            <h1>Darrell Cole Hill</h1>
            <p>(239)-204-1199</p>
            <p>darrellcolehill@gmail.com</p>
            <div className="icons">
                <LinkedInIcon/>
                <GitHubIcon/>
                <InstagramIcon/>
                <FacebookIcon/>    
            </div>
        </div>
    );
}