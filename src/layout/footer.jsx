import React, { useState } from 'react';
import '../App.css';
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineBehanceSquare  } from "react-icons/ai";
import { BiLogoTiktok  } from "react-icons/bi";
import { RiTwitterXFill  } from "react-icons/ri";

const Footer = () => {

    return (
        <>
        <div className='footer'>
         <h4 >Contato:</h4>
         <p>

         <AiOutlineMail size={20}/> fbgsefgdhy@hgfhweg.com
   
        <br />
        <br />
       

        <div className='rodape'>
        <div className='dados'>
            0000000000000 - 2023. Todos os direitos reservados.
        </div>
        <br />
        <div className="social">
        <AiOutlineLinkedin size={40}/>
        <BiLogoTiktok size={38}/>
        <RiTwitterXFill size={35}/>
        <AiOutlineBehanceSquare size={40}/>
            
        </div>
            </div>
            
        </p>


        </div>
        </>

    );

};

export default Footer;
