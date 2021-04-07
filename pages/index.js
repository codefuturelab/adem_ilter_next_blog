import Profile from "../components/profile";

function HomePage() {
    return <>
        <div className="site-container">
            <div className="space-y-4"><h1 className="text-2xl font-bold "> Bir Bolog bu bir blog eee</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolorum eius magni quia totam!
                    Accusantium
                    debitis dolor et laboriosam obcaecati quae repudiandae sit velit, voluptas voluptatibus. Ad
                    asperiores
                    provident rem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, culpa earum error harum
                    labore
                    minima officiis quas velit veritatis! Consequuntur dignissimos ea id nemo nihil nulla praesentium
                    recusandae
                    repellat? Repellat.</p>

                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur deserunt doloribus nobis omnis
                    reiciendis saepe tenetur! Aliquam atque aut autem consequatur eveniet explicabo in mollitia
                    possimus,
                    quam
                    quidem similique ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur ea
                    fugit in
                    qui tempore voluptatibus. Aliquam assumenda eveniet harum illum itaque iusto labore laboriosam
                    maiores,
                    nemo ?</p>
                <h2>Who am I ?</h2>
                <Profile />
            </div>
        </div>
        <div className="site-container  ">
            <img className="rounded-b-full shadow-2xl " src="is.jpg" alt=""/>
        </div>
    </>

}

export default HomePage