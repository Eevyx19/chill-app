import { Star } from "lucide-react";
import Heading6 from "./UI/heading/Heading6";
import BodySmallRegular from "./UI/body-small/BodySmallRegular";
import NewEpsBadge from "./badge/NewEpisode";
import TopBadge from "./badge/Top";
import type { MouseEventHandler } from "react";
import type { ResponseMovie } from "../types/response-movie.types";

interface MovieCardProps {
    movie: ResponseMovie;
    handleMouseHover: (
        movie: ResponseMovie,
        event: React.MouseEvent<HTMLElement>
    ) => void;
    handleMouseLeave: MouseEventHandler<HTMLElement>;
    variant: string
}

export default function MovieCard(props: MovieCardProps) {
    const { movie, handleMouseHover, handleMouseLeave, variant } = props
    
    const isLandscape = variant === "landscape"
    return (
        <li>
            <article
                onMouseEnter={(event) => handleMouseHover(movie, event)}
                onMouseLeave={handleMouseLeave}
                className={`${isLandscape ? "w-78 lg:w-80 h-38 lg:h-40" : "w-24 sm:w-36 md:w-50 lg:w-58 h-36 sm:h-56 md:h-76 lg:h-91"} shrink-0`}>
                <figure
                    className="relative w-full h-full overflow-hidden rounded lg:rounded-lg "
                >
                    {movie.isNew && <NewEpsBadge />}
                    {movie.isTop && <TopBadge />}
                    <img
                        src={movie.img}
                        alt={`Poster ${movie.title}`}
                        className="h-full w-full bg-cover bg-center bg-no-repeat"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-(--paper-background)/30 via-(--paper-background)/20 to-transparent" />

                    {isLandscape &&
                        <figcaption className="absolute inset-x-0 bottom-0 p-4">
                            <div className="flex items-center justify-between gap-2">
                                <Heading6 element="h3">
                                    {movie.title}
                                </Heading6>

                                <div className="flex shrink-0 items-center gap-1">
                                    <Star className="size-3" />
                                    <BodySmallRegular element="span">
                                        {movie.rating}
                                    </BodySmallRegular>
                                </div>
                            </div>
                        </figcaption>
                    }
                </figure>
            </article>
        </li>
    )
}