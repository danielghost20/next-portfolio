import Link from "next/link";
import { AiOutlineEye } from "react-icons/ai";
import { BsArrowRight } from 'react-icons/bs'

export default function Card({ name, description, fileName}: { name: string, description: string, fileName: string }) {
    return (
        <div  className="rounded-md break-inside-avoid p-5 mb-3 border-2 border-[#1c1c25] w-full">
            <div className="w-full flex items-center justify-between">
                <span className="text-sm text-gray-500">Jan 21, 2023</span>
                <div className="flex items-center gap-2">
                    <AiOutlineEye className="text-white" />
                    <span className="text-sm text-gray-500">2.4K</span>
                </div>
            </div>
            <h2 className="text-xl text-white font-semibold my-2">{name}</h2>
            <p className="text-sm text-gray-400" >
                {description}
            </p>
            <Link href={`/proyects/${fileName}`} className="max-w-max text-white flex items-center cursor-pointer my-2 gap-3 border-b-2 border-b-[#1c1c25]">
                Revisar
                <BsArrowRight />
            </Link>
        </div>
    );
}
