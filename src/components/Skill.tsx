
export default function Skill({ icon, name }: { icon: React.ReactNode, name: string }) {
    return (
        <div className="max-w-max rounded-md border-[#1c1c25] border-2 px-3 py-2 flex items-center gap-3">
            {icon}
            {name}
        </div>
    )
}