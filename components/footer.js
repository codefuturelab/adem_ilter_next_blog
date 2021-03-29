import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="site-container flex justify-center px-4 text-gray-100 bg-gray-100 pb-4 rounded shadow-2xl">
            <div className="container py-6">
                <h1 className="text-center text-lg font-bold lg:text-2xl text-gray-800 ">
                    Welcome to our blog,Think Write and Grow Up !!! <br/> powered by Next.js Tailwind.css
                </h1>

                <div className="flex justify-center mt-6">
                    <div className="bg-white rounded-lg">
                        <div className="flex flex-wrap justify-between md:flex-row">
                            <input type="email"
                                   className="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none"
                                   placeholder="Enter your email">
                            </input>
                                <button
                                    className="w-full m-1 p-2 text-sm bg-gray-800 rounded-lg font-semibold uppercase lg:w-auto">subscribe
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}