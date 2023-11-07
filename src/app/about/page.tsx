import Image from "next/image";
import Skill from "@/components/Skill";
import Navbar from "@/components/Navbar";
import { ICON_SKILLS } from "@/constants/iconSkills";
import { IconType } from "react-icons";
import {BsArrowRight} from 'react-icons/bs'


type IconSkills = {
  icon: IconType;
  name: string;
  color: string;
};


export default function About() {
  return (
    <>
      <header className="w-full flex items-center">
        <Navbar
          links={[
            { link: "home", name: "home" },
            { link: "proyects", name: "proyectos" },
            { link: "contact", name: "contacto" },
          ]}
        />
      </header>
      <main className="max-w-3xl w-full m-auto">
        <div className=" text-white p-4">
          <h1 className="text-3xl font-bold text-tx-primary mb-4">
            Hola, soy Daniel Ramos 👋
          </h1>
          <Image
            src="/images/dani.png"
            alt="Simulación de foto de perfil"
            className="w-full my-6"
            width={700}
            height={300}
          />
          <p className="text-lg text-tx-secondary mb-4">
            Soy un apasionado desarrollador web full stack con experiencia en la
            creación de aplicaciones web y móviles. Vivo en Oaxaca, México, y
            tengo 21 años. Estoy constantemente aprendiendo y explorando nuevas
            tecnologías.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2 text-tx-primary">
            Experiencia
          </h2>
          <h3 className="text-lg font-semibold text-tx-primary mt-5">
            No Country (Frontend Developer)
          </h3>
          <ul className="list-disc pl-6 mb-2 mt-4">
            <li className="text-tx-secondary">
              Desarrollé aplicaciones web utilizando Next.js.
            </li>
            <li className="text-tx-secondary">
              Trabajé en proyectos de front-end, colaborando estrechamente con
              diseñadores y desarrolladores.
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-tx-primary mt-5">
            Nuclea Solutions (Desarrollador Web)
          </h3>
          <ul className="list-disc pl-6 mb-4 mt-4">
            <li className="text-tx-secondary">
              Contribuí al desarrollo de aplicaciones web y móviles utilizando
              FlutterFlow.
            </li>
            <li className="text-tx-secondary">
              Participé en el diseño y desarrollo de soluciones tecnológicas.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-tx-primary mt-6">
            Tecnologías Utilizadas
          </h2>
          <div className="w-full flex gap-5 flex-wrap my-6">
          {ICON_SKILLS.map((item: IconSkills) => (
            <Skill
              icon={<item.icon className={`text-lg ${item.color}`} />}
              name={item.name}
            />
          ))}
          </div>

          <h2 className="text-xl font-semibold text-tx-primary mt-5">
            Proyectos Destacados
          </h2>
          <h3 className="text-lg font-semibold text-tx-primary mt-10">
            E-Commerce con Next.js, Next Auth y Firebase
          </h3>
          <ul className="list-disc pl-6 mb-2 mt-3">
            <li className="text-tx-secondary">
              Desarrollé un sitio de comercio electrónico utilizando Next.js,
              Next Auth y Firebase para la autenticación y base de datos.
            </li>
            <li className="text-tx-secondary">
              Implementé características como carrito de compras, autenticación
              de usuarios y autorización.
            </li>
          </ul>
          <a className="max-w-max flex  gap-3 items-center bg-background-secondary py-2 px-5 rounded-md border-2 border-gray-900">Visitar <BsArrowRight/></a>
 
          <h3 className="text-lg font-semibold text-tx-primary mt-5">
            Aplicación de Música (Consumiendo la API de Spotify)
          </h3>
          <ul className="list-disc pl-6 mb-2 mt-3">
            <li className="text-tx-secondary">
              Creé una aplicación que consume la API de Spotify para buscar y
              reproducir música.
            </li>
            <li className="text-tx-secondary">
              Integré la autenticación de Spotify utilizando Next Auth.
            </li>
            <li className="text-tx-secondary">
              Diseñé la interfaz de usuario con Tailwind CSS y utilicé
              TypeScript para el desarrollo.
            </li>
          </ul>
          <a className="max-w-max flex  gap-3 items-center bg-background-secondary py-2 px-5 rounded-md border-2 border-gray-900">Visitar <BsArrowRight/></a>


          <h3 className="text-lg font-semibold text-tx-primary mt-5">
            Sitio de Componentes Reutilizables (Tailwind CSS UI)
          </h3>
          <ul className="list-disc pl-6 mb-4 mt-3">
            <li className="text-tx-secondary">
              Diseñé y desarrollé un sitio web de componentes reutilizables
              utilizando Tailwind CSS.
            </li>
            <li className="text-tx-secondary">
              Los componentes son ideales para acelerar el desarrollo de
              proyectos.
            </li>
          </ul>
          <a className="max-w-max flex  gap-3 items-center bg-background-secondary py-2 px-5 rounded-md border-2 border-gray-900">Visitar <BsArrowRight/></a>


          <h2 className="text-xl font-semibold text-tx-primary my-5">Contacto</h2>
          <p className="text-tx-secondary">
            Puedes contactarme en{" "}
            <a
              href="mailto:daniel21develop@gmail.com"
              className="text-tx-primary"
            >
              daniel21develop@gmail.com
            </a>
            .
          </p>
          <p className="text-tx-secondary">
            Conéctate conmigo en{" "}
            <a
              href="https://www.linkedin.com/in/daniel-ramos21/"
              className="text-tx-primary"
            >
              LinkedIn
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold text-tx-primary mt-5">Portafolio</h2>
          <p className="text-tx-secondary">
            Visita mi sitio web y explora más sobre mis proyectos en{" "}
            <a
              href="https://next-portfolio-gray-two.vercel.app/"
              className="text-tx-primary"
            >
              Daniel Ramos Portfolio
            </a>
            .
          </p>
        </div>
      </main>
    </>
  );
}
