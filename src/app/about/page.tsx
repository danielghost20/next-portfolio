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
import Skill from "@/components/Skill";
import { SiNextdotjs, SiSequelize } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <>
      <header className="w-full flex items-center">
        <nav className="flex w-full max-w-7xl m-auto border-b-2 items-center  py-5 justify-between px-2">
          <Link href="/" className="rounded-full p-4 border-2 bg-gray-900">
            <BiGhost className="text-gray-300 text-xl" />
          </Link>
          <ul className="flex gap-4 items-center">
            <li>
              <Link
                className="text-gray-500 text-base font-semibold"
                href="/proyects"
              >
                Proyectos
              </Link>
            </li>
            <span className="text-gray-500">/</span>
            <li>
              <Link
                className="text-gray-500 text-base font-semibold"
                href="/about"
              >
                Sobre mi
              </Link>
            </li>
            <span className="text-gray-500">/</span>
            <li>
              <Link
                className="text-gray-500 text-base font-semibold"
                href="/contact"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="w-full max-w-4xl m-auto mt-20">
        <h1 className="text-4xl font-semibold">Hola, soy Daniel 🫡 💻 </h1>
        <p className="text-gray-300 mt-5 text-lg font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi fuga
          doloribus expedita, voluptates temporibus architecto officiis
          laudantium illum quas blanditiis, esse possimus in nobis nostrum
          ducimus, nam aperiam exercitationem voluptate?
        </p>
        <section className="mt-5">
          <h2>Sobre mi</h2>
          <Image
            className="w-full object-cover"
            src="/images/galery/firebase.webp"
            alt="firebase-web-image-proyect"
            width={600}
            height={500}
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            magnam quia unde neque ut, a, eius libero suscipit aut molestias
            ducimus! Id ipsam repudiandae dolore beatae rerum corrupti enim
            officiis?
          </p>
        </section>
        <section>
          <h2>Experiencia</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            repellat optio debitis, praesentium facere modi, velit quisquam
            commodi eum, hic dolore non cum a odio. Ut natus ad eaque vero!
          </p>
          <div className="w-full flex gap-4 mt-5 flex-wrap">
            <Skill icon={<SiNextdotjs className="text-lg" />} name="NextJS" />
            <Skill
              icon={<BiLogoTailwindCss className="text-lg" />}
              name="TailwindCSS"
            />
            <Skill icon={<BiLogoNodejs className="text-lg" />} name="NodeJS" />
            <Skill
              icon={<BiLogoPostgresql className="text-lg" />}
              name="PostgreSQL"
            />
            <Skill
              icon={<SiSequelize className="text-lg" />}
              name="Sequelize"
            />
            <Skill
              icon={<BiLogoTypescript className="text-lg" />}
              name="Typescript"
            />
            <Skill icon={<BiGitBranch className="text-lg" />} name="Git" />
            <Skill icon={<BiLogoGithub className="text-lg" />} name="GitHub" />
          </div>
        </section>
        <section className="mt-20 px-3 w-full  flex flex-col ">
          <h2 className="text-left text-4xl font-semibold mb-10">
            Experiencia
          </h2>
          <Tabs defaultValue="country" className="max-w-4xl m-auto flex p-4">
            <TabsList className="flex flex-col h-full items-start rounded-none border-r-2 bg-transparent">
              <TabsTrigger className="text-lg text-left" value="country">
                No country
              </TabsTrigger>
              <TabsTrigger className="text-lg text-left" value="nuclea">
                Nuclea Solutions
              </TabsTrigger>
            </TabsList>
            <div className="ml-2">
              <TabsContent value="country">
                <h2 className="text-2xl my-2 font-semibold">
                  Desarrollador Frontend @NextJS
                </h2>
                <div className="mb-4">
                  <h3 className="text-2xl my-2 font-semibold">Tecnologías</h3>
                  <div className="flex gap-4 text-gray-600">
                    <span>Oct 2022 - Feb 2023</span>
                    <span>Ago 2023 - En Laburo</span>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex gap-4">
                    <span>NextJS</span>
                    <Separator orientation="vertical" />
                    <span>TailwindCSS</span>
                    <Separator orientation="vertical" />
                    <span>SWR</span>
                  </div>
                </div>
                <p className="flex gap-3 items-start text-gray-400">
                  <BiSolidRightArrow className="text-xl text-blue-800" />
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Illum quam iste eos impedit dolorem accusamus, dignissimos
                  labore, aperiam quis numquam quaerat. tempore assumenda, ab
                  ad. Eos, mollitia.
                </p>
                <p className="flex gap-3 items-start text-gray-400 mt-3">
                  <BiSolidRightArrow className="text-xl text-blue-800" />
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Illum quam iste eos impedit dolorem accusamus, dignissimos
                  labore, aperiam quis numquam quaerat. Quis molestias aliquam
                  tempore assumenda, ab ad. Eos, mollitia.
                </p>
                <p className="flex gap-3 items-start text-gray-400 mt-3">
                  <BiSolidRightArrow className="text-xl text-blue-800" />
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Illum quam iste eos impedit dolorem accusamus molestias
                  aliquam tempore assumenda, ab ad. Eos, mollitia.
                </p>
              </TabsContent>
              <TabsContent value="nuclea">
                <h2 className="text-2xl my-2 font-semibold">
                  Desarrollador Frontend @FlutterFlow
                </h2>
                <div className="mb-4">
                  <h3 className="text-2xl my-2 font-semibold">Tecnologías</h3>
                  <div className="flex gap-4 text-gray-600">
                    <span>Abr 2023 - Jul 2023</span>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex gap-4">
                    <span>NextJS</span>
                    <Separator orientation="vertical" />
                    <span>TailwindCSS</span>
                    <Separator orientation="vertical" />
                    <span>SWR</span>
                  </div>
                </div>
                <p className="flex gap-3 items-start text-gray-400">
                  <BiSolidRightArrow className="text-xl text-blue-800" />
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Illum quam iste eos impedit dolorem accusamus, dignissimos
                  labore, aperiam quis numquam quaerat. tempore assumenda, ab
                  ad. Eos, mollitia.
                </p>
                <p className="flex gap-3 items-start text-gray-400 mt-3">
                  <BiSolidRightArrow className="text-xl text-blue-800" />
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Illum quam iste eos impedit dolorem accusamus, dignissimos
                  labore, aperiam quis numquam quaerat. Quis molestias aliquam
                  tempore assumenda, ab ad. Eos, mollitia.
                </p>
              </TabsContent>
            </div>
          </Tabs>
        </section>
        <section>
          <div className="w-full flex flex-wrap m-auto gap-5 px-2 justify-around items-center mt-10">
            <Image
              className=" w-40 object-contain"
              src="/images/academlo-dark.png"
              width={400}
              height={200}
              alt="academlo_logo"
            />
            <Image
              className=" w-40 object-contain"
              src="/images/country-dark.png"
              width={400}
              height={200}
              alt="no_country_logo"
            />
            <Image
              className=" w-40 object-contain"
              src="/images/nuclea-dark.png"
              width={400}
              height={200}
              alt="nuclea_solutions_logo"
            />
            <Image
              className=" w-40 object-contain"
              src="/images/platzi-dark.png"
              width={400}
              height={200}
              alt="platzi_logo"
            />
          </div>
        </section>
      </main>
    </>
  );
}
