import React from 'react';
import './App.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsappIcon from '@material-ui/icons/WhatsApp';
import YoutubeIcon from '@material-ui/icons/YouTube';

function Footer() {

    return (

        <div class="footer-copyright text-center py-3" style={{position:"static",bottom:0}}>
    <hr style={{backgroundColor:"black", width:"55%"}} ></hr>
            <a href="https://www.facebook.com/pages/category/Barber-Shop/Big-Ray-Cutz-103155061092391/" class="socials" style={{paddingRight:3,paddingLeft:3}}><FacebookIcon style={{fontSize:40}}/></a>
            <a href="https://twitter.com/bigraycutz" class="socials" style={{paddingRight:3,paddingLeft:3}}><TwitterIcon style={{fontSize:40}}/></a>
            <a href="https://instagram.com/bigraycutz?igshid=j6uamfakd39q" class="socials" style={{paddingRight:3,paddingLeft:2}}><InstagramIcon style={{fontSize:39}}/></a>
            <a href="https://wa.me/447990394004" class="socials" style={{paddingRight:3,paddingLeft:2}}><WhatsappIcon style={{fontSize:39}}/></a>
            <a href="https://www.youtube.com/channel/UC_koENUjpy6ytX5eTIyLvIg/featured" class="socials" style={{paddingRight:3,paddingLeft:2}}><YoutubeIcon style={{fontSize:42}}/></a>

            <br></br>
            <sub><i>Big Ray Cutz© 2022</i></sub>
        </div>

    );}

export default Footer;
