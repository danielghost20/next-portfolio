
import Card from "@/components/Card";
import { getMarckdown } from "@/services/marckdown.services";
import Navbar from "@/components/Navbar";

export default function ProyectsPage() {
    const marckdown = getMarckdown()

    return (
        <>
            <header className="w-full">
              <Navbar links={[{link: 'home', name: 'home'},{link: 'about', name: 'sobre mi'}, {link: 'contact', name: 'contacto'}]}/>
            </header>
            <main className="p-3  w-full ">
                <div className="max-w-screen-xl m-auto w-full">
                    <h1 className="text-4xl my-3 font-semibold text-white">Proyectos</h1>
                    <h2 className="text-lg font-medium text-gray-600 pb-5 border-b-2 border-b-[#1c1c25] ">Algunos de mis proyectos que he trabajado con nextJS</h2>
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