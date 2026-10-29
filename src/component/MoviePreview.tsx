import { Check, ChevronDown } from "lucide-react";
import Button from "./UI/Button";
import Heading6 from "./UI/heading/Heading6";
import BodyLargeMedium from "./UI/body-large/BodyLargeMedium";
import BodyLargeSemibold from "./UI/body-large/BodyLargeSemibold";
import { Play } from "@filled-lucide/react";
import type { ResponseMovie } from "../types/response-movie.types";

interface MoviePreviewProps {
    movie: ResponseMovie;
    rect: DOMRect;
    variant: string;
    onMouseEnter: () => void;
    onMouseLeave: React.MouseEventHandler<HTMLElement>;
}

export default function MoviePreview(props: MoviePreviewProps) {
    const { movie, rect, variant, onMouseEnter, onMouseLeave } = props

    const isLandscape = variant === "landscape"

    const previewWidth = 410;
    const viewportPadding = 40;

    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="absolute animation-movie-preview z-50 w-102.25 max-h-123.5 bg-(--page-background) shadow-2xl shadow-(--extra-background)/50 rounded-[20px] overflow-hidden"
            style={{
                left: Math.max(20, Math.min(rect.left + rect.width / 2 - previewWidth / 2,
                    window.innerWidth - previewWidth - viewportPadding))
            }}>
            <div className="relative h-63.75">
                <img src={isLandscape ? movie.img : movie.backdrop} className="h-full w-full object-cover" alt="" />
                <div className="absolute inset-0 bg-linear-to-t from-(--paper-background)/30 via-(--paper-background)/20 to-transparent" />
            </div>
            <div className="flex flex-col justify-center gap-4 p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button
                            className="bg-white p-3"
                        >
                            <Play className="size-7 text-(--page-background)" />
                        </Button>
                        <Button
                            className="border border-(--disable-text) p-3"
                        >
                            <Check className="size-7" />
                        </Button>
                    </div>
                    <Button
                        className="border border-(--disable-text) p-3"
                    >
                        <ChevronDown className="size-7" />
                    </Button>
                </div>
                <Heading6
                    element="h4"
                >
                    "Episode 1"
                </Heading6>
                <div className="flex items-center gap-2">
                    {isLandscape ? (
                        <div className="h-1.5 w-full bg-slate-300 rounded-2xl overflow-hidden">
                            <div className="h-full w-[35%] bg-(--primary-default)" />
                        </div>
                    ) : (
                        <span className="py-1 px-3 text-[20px] text-(--secondary-text) bg-(--info-background) rounded-full">13+</span>
                    )
                    }
                    <BodyLargeMedium
                        element="p"
                        className="text-(--secondary-text) text-nowrap"
                    >
                        2j 33m
                    </BodyLargeMedium>
                </div>
                <BodyLargeSemibold
                    element="p"
                    className="flex items-center justify-between text-(--secondary-text)"
                >
                    {movie.genre.map((genre, index) => (
                        <span key={index}>
                            {genre}
                        </span>
                    ))}
                </BodyLargeSemibold>
            </div>
        </div>
    )
}