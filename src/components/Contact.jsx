import React from "react";
import img from "../assets/images/contact-img.svg";

function Contact() {
  return (
    <>
      <div id="contact" className="contact bg-[linear-gradient(90deg,#b004b0,#38097a);] w-full">
        <div className="wrapper flex justify-center  py-16 gap-52 lg:py-12">
          <div className="imgbox lg:hidden">
            <img className="w-[550px] h-full" src={img} alt="" />
          </div>
          <div className="content-box">
            <h1 className="text-white font-bold text-2xl" style={{ marginBottom: '15px' }}>Entre em contato</h1>
            <p className='text-white py-3 max-w-lg '>Nos envie uma mensagem, retornaremos seu contato! :)</p>
            <form action="" className="flex flex-col ">
            <div className="flex gap-4 py-2  ">
              <input
                className="bg-transparent h-10 rounded-1xl  border-[1px] border-white pl-4 text-white placeholder-white lg:w-36 "
                type="text"
                placeholder="Nome"
              />
              <input
                className="bg-transparent h-10  rounded-1xl  border-[1px] border-white pl-4 text-white placeholder-white  lg:w-36"
                type="text"
                placeholder="Sobrenome"
              />
            </div>
            <div className="flex gap-4  py-4  ">
              <input
                className="bg-transparent h-10  rounded-1xl   border-[1px] border-white pl-4 text-white placeholder-white  lg:w-36"
                type="email"
                placeholder="Email"
              />
              <input
                className="bg-transparent h-10  rounded-1xl  border-[1px] border-white pl-4 text-white placeholder-white  lg:w-36"
                type="phone"
                placeholder="Telefone"
              />
            </div>
            <textarea
              className="bg-transparent rounded-1xl border-[1px] border-white h-36 pl-4 text-white w-full placeholder-white pt-2"
              rows={40}
              cols={35}
              placeholder="Menssagem"
            ></textarea>
                <button className="bg-white border-black border-[1] py-[12px] rounded-lg px-8 my-8 w-32 font-bold ">Enviar</button>
                </form>
          </div>


        </div>

      </div>
    </>
  );
}

export default Contact;
