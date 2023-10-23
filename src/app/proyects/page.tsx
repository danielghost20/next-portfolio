
import Card from "@/components/Card";
import { ModeToggle } from "@/components/ToggleTheme";
import Link from "next/link";
import { getMarckdown } from "@/services/marckdown.services";
import {BiGhost} from 'react-icons/bi'

export default function ProyectsPage() {
    const marckdown = getMarckdown()

    return (
        <>
            <header className="w-full">
            <nav className="flex w-full max-w-7xl m-auto border-b-2 items-center  py-5 justify-between px-2">
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
            </header>
            <main className="p-3  w-full ">
                <div className="max-w-screen-xl m-auto w-full">
                    <h1 className="text-4xl my-3 font-semibold">Proyectos</h1>
                    <h2 className="text-lg font-medium text-gray-600 pb-5 border-b-2 ">Algunos de mis proyectos que he trabajado con nextJS</h2>
                </div>
                <section className="columns-4  w-full max-w-screen-xl mt-10 m-auto gap-4 ">
                    {
                        marckdown.map((proyect, item) => (
                                <Card  description={proyect.metadata.subtitle} name={proyect.metadata.title} fileName={proyect.metadata.fileName} key={item} />
                        ))
                    }


                </section>
            </main >
        </>
    )
}