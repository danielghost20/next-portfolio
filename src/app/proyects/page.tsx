
import Card from "@/components/Card";
import { ModeToggle } from "@/components/ToggleTheme";
import Link from "next/link";
import { getMarckdown } from "@/services/marckdown.services";

export default function ProyectsPage() {
    const marckdown = getMarckdown()

    return (
        <>
            <header className="w-full">
                <nav className="w-full flex items-center p-2 gap-4 justify-end">
                    <Link href='/'>Home</Link>
                    <Link href='/contact'>Contacto</Link>
                    <ModeToggle />
                </nav>
            </header>
            <main className="p-3  w-full ">
                <div className="max-w-screen-xl m-auto w-full">
                    <h1 className="text-4xl my-3 font-semibold">Proyectos</h1>
                    <h2 className="text-lg font-medium text-gray-600 pb-5 border-b-2 ">Algunos de mis proyectos que he trabajado con nextJS</h2>
                </div>
                <section className="flex flex-wrap min-h-screen w-full max-w-screen-xl  mt-10 m-auto gap-5">
                    {
                        marckdown.map((proyect, item) => (
                            <div key={item}>
                                <Card description={proyect.metadata.subtitle} name={proyect.metadata.title} fileName={proyect.metadata.fileName} key={item} />
                            </div>
                        ))
                    }


                </section>
            </main >
        </>
    )
}