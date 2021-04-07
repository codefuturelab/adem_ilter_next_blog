
function HomePage({ yesorno }) {
    return <>
        <div className="site-container">

            <div className="w-64 h-64 relative self-center">
                <div className=" absolute w-64 h-64  rounded-full inset-0 bg-cover bg-center z-0" style={{backgroundImage: `url(${yesorno.image})`}}>

                </div>
                <div
                    className="  absolute opacity-100 duration-500  inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold ">{yesorno.answer}
                </div>
            </div>

        </div>
    </>

}
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://yesno.wtf/api')
    const yesorno = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            yesorno,
        },
        revalidate: 1,
    }
}
export default HomePage