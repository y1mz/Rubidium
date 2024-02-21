import Link from "next/link"

function HeaderButton({ title, link }) {
    return (
        <div className="rounded-xl hover:bg-gray-800 transition delay-200">
            <div className="px-2 py-1 text-center text-md">
                <Link href={link}>{title}</Link>
            </div>
        </div>
    )
}

export default HeaderButton