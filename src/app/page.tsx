import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  BiGhost,
  BiLogoTailwindCss,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoTypescript,
  BiGitBranch,
  BiLogoGithub,
  BiSolidRightArrow,
} from "react-icons/bi";
import {BsArrowUpRight} from 'react-icons/bs'

export default function Home() {
  return (
    <>
      <header className="w-full min-h-screen flex items-center justify-center relative ">
        <nav className="flex w-full max-w-7xl m-auto border-b-2 items-center absolute top-0 py-5 justify-between px-2">
          <Link href='/' className="rounded-full p-4 border-2 bg-gray-900">
            <BiGhost className="text-gray-300 text-xl" />
          </Link>
          <ul className="flex gap-4 items-center">
            <li>
              <Link className="text-gray-500 text-base font-semibold" href="/proyects">
                Proyectos 
              </Link>
            </li>
            <span className="text-gray-500">
              /
            </span>
            <li>
              <Link className="text-gray-500 text-base font-semibold" href="/about">
                Sobre mi
              </Link>
            </li>
            <span className="text-gray-500">
              /
            </span>
            <li>
              <Link className="text-gray-500 text-base font-semibold" href="/contact">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
        <div className="max-w-screen-2xl w-full m-auto  flex flex-col justify-center ">
          <a className="rounded-2xl font-semibold max-w-max m-auto border-2 py-1 px-3 text-sm">
            Daniel Ramos
          </a>
          <h1 className="text-[17vw] bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-700 font-inter  text-center leading-none font-bold ">
            GHOST
          </h1>
          <button className="py-4 px-10 mt-5 flex items-center gap-2 text-xl font-inter border-2 border-gray-900 text-gray-400 bg-[#1A1A1A] rounded-sm m-auto max-w-max">
            Visitar Github <BsArrowUpRight/>
          </button>
        </div>
      </header>
    </>
  );
}
