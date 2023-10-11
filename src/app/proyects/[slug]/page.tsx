import { ModeToggle } from '@/components/ToggleTheme'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import { getMarkdownContentByName } from '@/services/marckdown.services'
import Marckdown from 'markdown-to-jsx'

export default function ProyectId({ params }: { params: { slug: string } }) {
    const content = getMarkdownContentByName(params.slug)
    return (
        <>
            <header className="w-full h-96">
                <nav className="w-full h-14 border-b-2 flex gap-4 items-center justify-end p-3">
                    <Link href="/">
                        Home
                    </Link>
                    <Link href='/contact'>
                        Contacto
                    </Link>
                    <ModeToggle />
                </nav>
                <div className='max-w-3xl flex text-center justify-center items-center mt-20 flex-col gap-6 m-auto'>
                    <h1 className='text-7xl font-bold'>{content ? content.getMetadata().title : params.slug}</h1>
                    <p>Lorem ipsum dolor exercitationem deserunt placeat quis doloribus quod provident facere quibusdam. Quibusdam tempore autem, laboriosam aut beatae odio nostrum aspernatur corporis.</p>
                    <a className='max-w-max flex gap-3 text-lg items-center'>
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