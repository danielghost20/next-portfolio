import { BsArrowRight } from 'react-icons/bs'
import { getMarkdownContentByName } from '@/services/marckdown.services'
import Marckdown from 'markdown-to-jsx'
import Navbar from '@/components/Navbar'


export default async function ProyectId({ params }: { params: { slug: string } }) {
    const content = getMarkdownContentByName(params.slug)
    return (
        <>
            <header className="w-full h-96">
                <Navbar links={[{link: 'home', name: 'home'}, {link: 'proyects', name: 'proyectos'}, {link: 'about', name: 'sobre mi'}, {link: 'contact', name: 'contacto'}]} />
                <div className='max-w-3xl flex text-center justify-center items-center mt-20 flex-col gap-6 m-auto'>
                    <h1 className='text-7xl font-bold text-white'>{content ? content.getMetadata().title : params.slug}</h1>
                    <p className='text-white'>{content ? content.getMetadata().subtitle: '' }</p>
                    <a className='max-w-max flex gap-3 text-lg text-white items-center'>
                        ir a github
                        < BsArrowRight />
                    </a>
                </div>
            </header>
            <main className="w-full bg-white p-3">
                {
                    content !== null ?
                        <div className='max-w-6xl m-auto flex flex-col justify-center items-center'>
                            <article className="prose lg:prose-xl">
                                <Marckdown className='max-w-6xl text-black'>
                                    {content.content}
                                </Marckdown>
                            </article>
                        </div>
                        :
                        ""
                }
            </main>
        </>
    )
}