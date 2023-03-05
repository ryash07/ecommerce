import React from 'react'
import "./Contact.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>BE IN TOUCH WITH US:</span>
            <div className="mail">
                
                <input type="text" placeholder='Enter your e-mail.....' />
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <GoogleIcon />
                <FacebookIcon></FacebookIcon>
                <InstagramIcon />
                <TwitterIcon />
                <MailOutlineIcon />
                <LinkedInIcon />
            </div>
        </div>
    </div>
  )
}

export default Contact
