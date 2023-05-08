import React from "react";
import { WhatsappShareButton, TwitterShareButton, FacebookShareButton } from "react-share";
import { FaWhatsapp, FaTwitter, FaFacebook } from 'react-icons/fa';


const SocailMedia = ({ quote }) => {
    const shareUrl = 'https://safaa_abdelnaser.com/share'; 
    const myStyle = {
        color: 'white',
        fontSize: '30px',
        fontWeight: 'bold',
        padding:'20px'
      };
     
  return (
    <>
      <div>
        <WhatsappShareButton  title={quote} url={shareUrl}>
        <FaWhatsapp style={myStyle}/>
        </WhatsappShareButton>
        
        <TwitterShareButton  title={quote} url={shareUrl}>
        <FaTwitter style={myStyle}/>
        </TwitterShareButton>
        <FacebookShareButton  quote={quote} url={shareUrl}>
        <FaFacebook style={myStyle}/>
      </FacebookShareButton>
      </div>
    </>
  );
};

export default SocailMedia;
