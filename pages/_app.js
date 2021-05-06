import 'tailwindcss/tailwind.css'
import Header from "../components/header";
import '../styles/globals.css'
import Footer from "../components/footer";
import DarkButton from "../components/dark-btn";
import {ThemeProvider} from "next-themes";
import {useRouter} from "next/router"
function MyApp({Component, pageProps}) {
    const router = useRouter();
    const showFooter = router.pathname === '/room' ? false : true;
    return (
        <ThemeProvider attribute="class">
            <div className="antialiased site-text-main">
                <Header/>
                <div className="flex">
                    <main className=" mt-6 mb-20 flex-grow">
                        <Component {...pageProps} />
                    </main>
                </div>
                {showFooter && <Footer/>}
                <DarkButton/>
            </div>
        </ThemeProvider>

    )
}

export default MyApp