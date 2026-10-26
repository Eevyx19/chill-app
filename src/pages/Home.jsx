import Hero from "../component/Hero"
import MovieCard from "../component/MovieCard"
import lanscapeImg from "../assets/images/main/Dont look up.png"
import potraitImg from "../assets/images/main/All of us are dead potrait.png"
import Carousel from "../component/Carousel"


const HomePage = () => {

    const continueWatch = [
        {
            id: 1,
            img: lanscapeImg,
            title: "Don't Look Up",
            rating: "4.5/5"
        },
        {
            id: 2,
            img: lanscapeImg,
            title: "Don't Look Up",
            rating: "4.5/5"
        },
        {
            id: 3,
            img: lanscapeImg,
            title: "Don't Look Up",
            rating: "4.5/5"
        },
        {
            id: 4,
            img: lanscapeImg,
            title: "Don't Look Up",
            rating: "4.5/5"
        },
        {
            id: 5,
            img: lanscapeImg,
            title: "Don't Look Up",
            rating: "4.5/5"
        },
        {
            id: 6,
            img: lanscapeImg,
            title: "Don't Look Up",
            rating: "4.5/5"
        }
    ]

    const ohterWatch = [
        {
            id: 1,
            img: potraitImg,
            title: "Don't Look Up",
            rating: "4.5/5",
            isNew: true,
            isTop: false
        },
        {
            id: 2,
            img: potraitImg,
            title: "Don't Look Up",
            rating: "4.5/5",
            isNew: false,
            isTop: true
        },
        {
            id: 3,
            img: potraitImg,
            title: "Don't Look Up",
            rating: "4.5/5",
            isNew: false,
            isTop: true
        },
        {
            id: 4,
            img: potraitImg,
            title: "Don't Look Up",
            rating: "4.5/5",
            isNew: false,
            isTop: true
        },
        {
            id: 5,
            img: potraitImg,
            title: "Don't Look Up",
            rating: "4.5/5",
            isNew: true,
            isTop: false
        },
        {
            id: 6,
            img: potraitImg,
            title: "Don't Look Up",
            rating: "4.5/5",
            isNew: true,
            isTop: false
            
        }
    ]

    return (
        <>
            <Hero />
            <Carousel
                title="Melanjutkan Tonton Film"
            >
                {continueWatch.map(movie => (
                    <MovieCard
                        key={movie.id}
                        landscape={true}
                        img={movie.img}
                        title={movie.title}
                        rating={movie.rating}
                    />
                ))}
            </Carousel>
            <Carousel
                title="Top Rating Film dan Series Hari ini"
            >
                {ohterWatch.map(movie => (
                    <MovieCard
                        key={movie.id}
                        landscape={false}
                        img={movie.img}
                        title={movie.title}
                        rating={movie.rating}
                        isNew={movie.isNew}
                        isTop={movie.isTop}
                    />
                ))}
            </Carousel>
            <Carousel
                title="Film Trending"
            >
                {ohterWatch.map(movie => (
                    <MovieCard
                        key={movie.id}
                        landscape={false}
                        img={movie.img}
                        title={movie.title}
                        rating={movie.rating}
                        isNew={movie.isNew}
                        isTop={movie.isTop}
                    />
                ))}
            </Carousel>
            <Carousel
                title="Rilis Baru"
            >
                {ohterWatch.map(movie => (
                    <MovieCard
                        key={movie.id}
                        landscape={false}
                        img={movie.img}
                        title={movie.title}
                        rating={movie.rating}
                        isNew={movie.isNew}
                        isTop={movie.isTop}
                    />
                ))}
            </Carousel>


        </>
    )
}

export default HomePage