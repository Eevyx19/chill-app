import { ArrowLeft, ArrowRight, } from "lucide-react";
import Button from "./UI/Button";
import Heading3 from "./UI/heading/Heading3";
import MovieCard from "./MovieCard";
import { useRef, useState } from "react";
import MoviePreview from "./MoviePreview";

export default function Carousel(props) {
    const [preview, setPreview] = useState(null)
    const setTimer = useRef()
    const clearTimer = useRef()

    const handleMouseHover = (movie, e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        clearTimeout(clearTimer.current)
        clearTimeout(setTimer.current)
        setTimer.current = window.setTimeout(() => {
            setPreview({ movie, rect: rect })
        }, 60)
    }

    const handleMouseLeave = () => {
        clearTimeout(clearTimer.current)
        clearTimer.current = window.setTimeout(() => setPreview(null), 60)
    }

    const { title, movies, variant } = props

    return (
        <section className="relative px-5 md:px-10 lg:px-20 py-5 md:py-7.5 lg:py-10 flex flex-col gap-5 md:gap-7 lg:gap-8">
            <Heading3 element="h2">
                {title}
            </Heading3>
            <div className="relative">
                <Button
                    className="absolute hidden md:block -left-5.5 top-[40%] z-10 border border-(--outline-border) bg-(--body-background) p-2 lg:p-2.5"
                >
                    <ArrowLeft className="size-4 lg:size-6" />
                </Button>
                <Button
                    className="absolute hidden md:block -right-5.5 top-[40%] z-10 border border-(--outline-border) bg-(--body-background) p-2 lg:p-2.5"
                >
                    <ArrowRight className="size-4 lg:size-6" />
                </Button>
                <ul className="flex gap-6 overflow-x-scroll scrollbar-thin">
                    {movies.map((data) => (
                        <MovieCard
                            key={data.id}
                            handleMouseHover={handleMouseHover}
                            handleMouseLeave={handleMouseLeave}
                            movie={data}
                            variant={variant}
                        />
                    ))}

                </ul>
            </div>
            {preview && (
                <MoviePreview
                    key={preview.movie.id}
                    movie={preview.movie}
                    rect={preview.rect}
                    variant={variant}
                    onMouseEnter={() => clearTimeout(clearTimer.current)}
                    onMouseLeave={handleMouseLeave}
                />
            )}
        </section>
    )
}