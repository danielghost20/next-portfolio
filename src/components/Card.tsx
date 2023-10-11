import Link from "next/link";
import { AiOutlineEye } from "react-icons/ai";
import { BsArrowRight } from 'react-icons/bs'

export default function Card({ name, description, fileName }: { name: string, description: string, fileName: string }) {
    return (
        <div className="rounded-md p-5 border-2 max-w-sm w-full h-auto hover:cursor-pointer">
            <div className="w-full flex items-center justify-between">
                <span className="text-sm">Jan 21, 2023</span>
                <div className="flex items-center">
                    <AiOutlineEye />
                    <span className="text-sm">2.4K</span>
                </div>
            </div>
            <h2 className="text-xl font-semibold my-2">{name}</h2>
            <p className="text-sm text-gray-400" >
                {description}
            </p>
            <Link href={`/proyects/${fileName}`} className="max-w-max flex items-center my-2 gap-3 border-b-2">
                Revisar
                <BsArrowRight />
            </Link>
        </div>
    );
}
