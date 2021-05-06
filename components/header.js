import Link from 'next/link'

export default function Header() {
    return (
        <header className="site-container  py-6 bg-gray-50 rounded-2xl  site-text-main dark:bg-gray-700">
            <nav className="space-x-4 font-bold underline ">
                <Link href="/">
                    <a>Hakkımda</a>
                </Link>
                <Link href="/blog">
                    <a>Yazılar</a>
                </Link>
                <Link href="/yesorno">
                    <a>yesorno</a>
                </Link>
                <Link href="/room">
                    <a>Chat Room</a>
                </Link>
            </nav>
        </header>
    )
}