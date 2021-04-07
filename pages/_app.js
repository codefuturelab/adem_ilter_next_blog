import 'tailwindcss/tailwind.css'
import Header from "../components/header";
import '../styles/globals.css'
import Footer from "../components/footer";
import DarkButton from "../components/dark-btn";
import {ThemeProvider} from "next-themes";

function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider attribute="class">
            <div className="antialiased site-text-main">
                <Header/>
                <div className="flex">
                    <main className=" mt-6 mb-20 flex-grow">
                        <Component {...pageProps} />
                    </main>
                </div>
                <Footer/>
                <DarkButton/>
            </div>
        </ThemeProvider>

    )
}

export default MyApp