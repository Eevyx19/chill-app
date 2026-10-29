import { ArrowLeft, ArrowRight, } from "lucide-react";
import Button from "./UI/Button";
import Heading3 from "./UI/heading/Heading3";
import MovieCard from "./MovieCard";
import MoviePreview from "./MoviePreview";
import type { ResponseMovie } from "../types/response-movie.types";
import useCarousel from "../hooks/useCarousel";

interface CarouselProps {
    title: string;
    movies: ResponseMovie[];
    variant: "landscape" | "potrait";
}


export default function Carousel(props: CarouselProps) {
    const { preview, clearTimer, handleMouseHover, handleMouseLeave } = useCarousel()

    const { title, movies, variant } = props

    return (
        <section className="relative px-5 md:px-10 lg:px-20 py-5 md:py-7.5 lg:py-10 flex flex-col gap-5 md:gap-7 lg:gap-8">
            <Heading3 element="h2">
                {title}
            </Heading3>
            <div className="relative">
                <Button
                    className="absolute hidden md:block -left-5.5 top-[40%] z-10 border border-(--outline-border) bg-(--body-background) p-2 lg:p-2.5"
                    type="button"
                >
                    <ArrowLeft className="size-4 lg:size-6" />
                </Button>
                <Button
                    className="absolute hidden md:block -right-5.5 top-[40%] z-10 border border-(--outline-border) bg-(--body-background) p-2 lg:p-2.5"
                    type="button"
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
                    onMouseEnter={() => clearTimeout(clearTimer.current ?? undefined)}
                    onMouseLeave={handleMouseLeave}
                />
            )}
        </section>
    )
}