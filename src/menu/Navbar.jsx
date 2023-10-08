import React, { useState } from 'react';
import './navbar.css';
import { AiOutlineMenu, AiOutlineClose, AiOutlineReload } from "react-icons/ai";

const Navbar = () => {

    const [active, setActive] = useState(true)
    const toggle = () => {
        setActive(!active)
    }

    return (

        <header>
            <div className='navbar'>
                <div className="icon">

                    {
                        active
                            ?
                            <AiOutlineMenu size={24} className='burguer' onClick={toggle} />
                            :
                            <><AiOutlineClose size={24} className='close' onClick={toggle} />
                                <br></br>
                                <nav className='menu'>
                                    <ul>
                                        <li to="/">3D/Modelagem</li>
                                        <li to="/">Ilustrações</li>
                                        <li to="/">Design de Marcas</li>
                                    </ul>
                                </nav>
                            </>
                    }

                </div>
                <br></br>

            </div>
        </header>

    );

};

export default Navbar;
