import { FiGithub } from 'react-icons/fi'
import { MdOutlineMail } from 'react-icons/md'
import { FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'
import { BiGhost } from 'react-icons/bi'


export default function Contact() {
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
            <main className="w-full p-4 items-center h-screen flex justify-evenly px-2 gap-4">
                <Link className='max-w-sm w-full' href=''>
                    <div className=" w-full relative overflow-hidden rounded-md h-[400px] border-2 flex items-center flex-col gap-5 justify-center">
                        <div className='rounded-full border-2  after:content-[""] after:bg-gradient-to-b after:left-[49.5%] after:from-gray-800  after:w-[3px] after:h-44 after:absolute'>
                            <FiGithub className="text-3xl m-2" />
                        </div>
                        <span className='text-3xl font-bold'>@danielghost20</span>
                        <span className='text-gray-500 font-medium'>GitHub</span>
                    </div>
                </Link>
                <Link className='max-w-sm w-full' href=''>
                    <div className="max-w-sm w-full relative overflow-hidden rounded-md h-[400px] border-2 flex items-center flex-col gap-5 justify-center">
                        <div className='rounded-full border-2  after:content-[""] after:bg-gradient-to-b after:left-[49.5%] after:from-gray-800  after:w-[3px] after:h-44 after:absolute'>
                            <MdOutlineMail className="text-3xl m-2" />
                        </div>
                        <span className='text-3xl font-bold'>daniel21develop</span>
                        <span className='text-gray-500 font-medium'>Gmail</span>
                    </div>
                </Link>
                <Link className='max-w-sm w-full' href=''>
                    <div className="max-w-sm w-full relative overflow-hidden rounded-md h-[400px] border-2 flex items-center flex-col gap-5 justify-center">
                        <div className='rounded-full border-2  after:content-[""] after:bg-gradient-to-b after:left-[49.5%] after:from-gray-800  after:w-[3px] after:h-44 after:absolute'>
                            <FaLinkedinIn className="text-3xl m-2" />
                        </div>
                        <span className='text-3xl font-bold'>daniel-ramos21</span>
                        <span className='text-gray-500 font-medium'>LinedIn</span>
                    </div>
                </Link>
            </main>
        </>
    )
}