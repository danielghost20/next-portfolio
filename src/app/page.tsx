import Navbar from "@/components/Navbar";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { FiGithub } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <header className="w-full absolute top-0">
        <Navbar links={[{link: 'proyects', name: 'proyectos'}, {link: 'about', name: 'sobre mi'}, {link: 'contact', name: 'contacto'}]} />
      </header>
      <main className="w-full min-h-screen max-w-3xl flex-col gap-9 p-3 flex justify-center items-center m-auto">
        <div className="w-32 h-32 rounded-full overflow-hidden p-1 bg-tx-primary flex justify-center items-center">
        <Image className="w-full h-full object-cover rounded-full" src='/images/galery.jpg' width={100} height={100} alt="profile_image" />
        </div>
        <h1 className="text-white text-center text-2xl">
          Hola, <span className="font-medium">soy Daniel Ramos.</span> Un desarrollador web y apasionado por la tecnología. Disfruto de crear sitios web con NextJS
        </h1>
        <div className="flex gap-4">
          <a className="py-2 px-4 cursor-pointer text-white border-2 border-[#23232e] rounded-xl max-w-max">Descargar CV</a>
          <a href="mailto:daniel21develop@gmail.com" className="py-2 px-4 cursor-pointer bg-tx-primary border-2 border-[#1c1c25] rounded-xl max-w-max flex items-center gap-2">Contactame aqui <BsArrowRight /></a>
          <a href="https://www.linkedin.com/in/daniel-ramos21/" target="blank" className="rounded-md flex items-center cursor-pointer border-[#23232e] border-2 text-white p-2"><FaLinkedinIn className="text-white text-xl"/></a>
          <a href="https://github.com/danielghost20" target="blank" className="rounded-md flex items-center cursor-pointer border-[#23232e] border-2 text-white p-2"><FiGithub className="text-white text-xl"/></a>
        </div>
      </main>
    </>
  );
}
