import React from 'react'
import logo from "../assets/images/astronout.png"
import logo1 from "../assets/images/astronout1.png"
import bg from "../assets/images/bg.jpg"
import Navbar from './Navbar'
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../styles.css"

function Header() {
  return (
    <>
      <div id='home' style={{ backgroundImage: `url(${bg})` }} className=' bg-center bg-cover bg-no-repeat h-screen flex flex-col '>
        <Navbar />
        <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
          <div className="content lg:text-center">
            <div className="btn py-3">
            </div>
            <h1 className='text-white text-3xl font-bold'>Olá, bem-vindo(a) ao nosso portifólio!</h1>
            <p className='text-white py-3 max-w-lg '>Temos 7 anos de experiência e vários projetos que incluem desde sites simples até aplicativos mais complexos. Quer saber mais?</p>
            <AnchorLink href="#skills">
              <button className='text-white text-1xl border-[1px] border-white border-solid' style={{ borderRadius: '5px', padding: '10px 15px', marginTop: '15px' }}>Sobre nós</button>
            </AnchorLink>
            <AnchorLink href="#contact">
              <button className='text-white text-1xl border-[1px] border-white border-solid' style={{ borderRadius: '5px', padding: '10px 15px', marginTop: '15px', marginLeft: '10px' }}>Quero um site/aplicativo</button>
            </AnchorLink>            
          </div>
          <div className="image banner-astronout lg:hidden absolute w-[300px] flex ">
            <img className='w-96 ast-img' src={logo1} alt="" />

          </div>
          <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">

            <img className='w-96 ast-img' src={logo} alt="" />
          </div>

        </div>
      </div>
    </>
  )
}

export default Header