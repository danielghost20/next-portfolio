import Skill from "@/components/Skill";
import { ModeToggle } from "@/components/ToggleTheme";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  BiSolidRightArrow
} from "react-icons/bi";
import { SiNextdotjs, SiSequelize } from "react-icons/si";

export default function Home() {
  return (
    <>
      <header className="w-full min-h-screen header">
        <nav className="flex w-full items-center h-16 justify-between px-2">
          <ul className="flex gap-4 items-center">
            <BiGhost className="text-gray-500 text-xl" />
            <li>
              <Link className="text-gray-500 text-base font-semibold" href="/proyects">
                Proyectos
              </Link>
            </li>
            <li>
              <Link className="text-gray-500 text-base font-semibold" href="/contact">
                Contacto
              </Link>
            </li>
          </ul>
          <ModeToggle />
        </nav>
        <div className="max-w-2xl w-full m-auto mt-20 flex flex-col items-center justify-center gap-5">
          <a className="rounded-2xl font-semibold border-2 py-1 px-3 text-sm bg-muted text-white">
            Sigueme en LinkedIn
          </a>
          <h1 className="text-8xl text-center font-bold text-foreground">
            GHOST
          </h1>
          <p className="text-center text-lg text-gray-500">
            Lorem ipsum dolor amet consectetur quo nesciunt mollitia, dolorem
            sit, amet consectetur quo nesciunt mollitia, dolorem incidunt
            possimus optio velit?
          </p>
          <div className="flex justify-center gap-4">
            <button className="max-w-max text-sm font-semibold py-2 px-5 bg-foreground text-background rounded-md">
              Curriculum
            </button>
            <a className="font-medium text-sm  bg-transparent text-foreground border-2 py-2 rounded-md px-6">
              GitHub
            </a>
          </div>
        </div>
      </header>
      <main className="w-full bg-background ">
        <div className="w-full flex max-w-screen-xl m-auto gap-5 px-2 justify-around items-center mt-10">
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
        <section className="max-w-screen-2xl mt-10 m-auto min-h-screen text-left px-3 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-medium mb-10">Sobre mi</h2>
          <div className="w-full flex px-2 items-start justify-between mt-10">
            <div className="max-w-md w-full">
              <span className="text-gray-700 font-semibold text-lg">
                Desarrollador web Full Stack
              </span>
            </div>
            <div className="max-w-2xl w-full">
              <h3 className="text-3xl font-semibold mb-6">Daniel Ramos</h3>
              <p className="text-gray-600 text-lg font-medium">
                Soy un desarrollador web autodidacta con experiencia en
                proyectos reales y colaboraciones con otros profesionales del
                desarrollo.
              </p>
              <p className="text-gray-600 text-lg font-medium mt-3">
                Disfruto incorporando nuevas tecnologías en mis proyectos de
                desarrollo web. Siempre estoy buscando oportunidades para
                mantenerme al día con las últimas tendencias tecnológicas y
                mejorar constantemente mis habilidades.
              </p>
              <div className="w-full flex gap-4 mt-5 flex-wrap">
                <Skill
                  icon={<SiNextdotjs className="text-lg" />}
                  name="NextJS"
                />
                <Skill
                  icon={<BiLogoTailwindCss className="text-lg" />}
                  name="TailwindCSS"
                />
                <Skill
                  icon={<BiLogoNodejs className="text-lg" />}
                  name="NodeJS"
                />
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
                <Skill
                  icon={<BiLogoGithub className="text-lg" />}
                  name="GitHub"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="mt-20 px-3 max-w-screen-2xl m-auto flex flex-col justify-center items-center">
          <h2 className="text-left text-4xl font-semibold mb-10">Experiencia</h2>
          <Tabs defaultValue="country" className="max-w-4xl m-auto flex p-4">
            <TabsList className="flex flex-col h-full items-start rounded-none border-r-2 bg-transparent">
              <TabsTrigger className="text-lg text-left" value="country">No country</TabsTrigger>
              <TabsTrigger className="text-lg text-left" value="nuclea">Nuclea Solutions</TabsTrigger>
            </TabsList>
            <div className="ml-2">
              <TabsContent value="country">
                <h2 className="text-2xl my-2 font-semibold">Desarrollador Frontend @NextJS</h2>
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
                <p className="flex gap-3 items-start text-gray-400"><BiSolidRightArrow className="text-xl text-blue-800" />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quam iste eos impedit dolorem accusamus, dignissimos labore, aperiam quis numquam quaerat. tempore assumenda, ab ad. Eos, mollitia.</p>
                <p className="flex gap-3 items-start text-gray-400 mt-3"><BiSolidRightArrow className="text-xl text-blue-800" />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quam iste eos impedit dolorem accusamus, dignissimos labore, aperiam quis numquam quaerat. Quis molestias aliquam tempore assumenda, ab ad. Eos, mollitia.</p>
                <p className="flex gap-3 items-start text-gray-400 mt-3"><BiSolidRightArrow className="text-xl text-blue-800" />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quam iste eos impedit dolorem accusamus molestias aliquam tempore assumenda, ab ad. Eos, mollitia.</p>
              </TabsContent>
              <TabsContent value="nuclea">
                <h2 className="text-2xl my-2 font-semibold">Desarrollador Frontend @FlutterFlow</h2>
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
                <p className="flex gap-3 items-start text-gray-400"><BiSolidRightArrow className="text-xl text-blue-800" />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quam iste eos impedit dolorem accusamus, dignissimos labore, aperiam quis numquam quaerat. tempore assumenda, ab ad. Eos, mollitia.</p>
                <p className="flex gap-3 items-start text-gray-400 mt-3"><BiSolidRightArrow className="text-xl text-blue-800" />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quam iste eos impedit dolorem accusamus, dignissimos labore, aperiam quis numquam quaerat. Quis molestias aliquam tempore assumenda, ab ad. Eos, mollitia.</p>
              </TabsContent>
            </div>
          </Tabs>
        </section>
        <section className="max-w-screen-xl m-auto mt-20 flex flex-col items-center justify-center min-h-screen px-3">
          <h2 className="mt-10 text-center text-4xl font-semibold">Proyectos</h2>
          <Image className="w-full mt-5 rounded-md border-2" src='/images/galery.webp' width={1200} height={1200} alt="galery_project" />
          <div className="w-full mt-4 flex justify-between">
            <h3 className="text-3xl font-semibold">Galery</h3>
            <p className="max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi a atque distinctio. Possimus, saepe iusto quaerat laborum assumenda provident laboriosam quam nesciunt accusamus! Pariatur consequatur numquam labore, dolor natus in?</p>
          </div>
          <Link className={`${buttonVariants()} m-auto mt-5`} href='/proyects'>
            Ver mas proyectos
          </Link>
        </section>
      </main>
    </>
  );
}
