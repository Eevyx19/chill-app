import Hero from "../component/Hero"
import Carousel from "../component/Carousel"
import { continueWatch } from "../component/data/movie"
import { otherWatch } from "../component/data/movie"

const HomePage = () => {

    return (
        <>
            <Hero />
            <Carousel title="Melanjutkan Tonton Film" movies={continueWatch} variant="landscape" />
            <Carousel title="Top Rating Film dan Series Hari ini" movies={otherWatch} variant="potrait" />
            <Carousel title="Film Trending" movies={otherWatch} variant="potrait" />
            <Carousel title="Rilis Baru" movies={otherWatch} variant="potrait" />
        </>
    )
}

export default HomePage