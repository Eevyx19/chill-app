import { useRef, useState } from "react"
import type { MoviePreviewState, ResponseMovie } from "../types/response-movie.types"


export default function useCarousel() {
    const [preview, setPreview] = useState<MoviePreviewState | null>(null)
    const setTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
    const clearTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

    const handleMouseHover = (movie: ResponseMovie, event: React.MouseEvent<HTMLElement>) => {
        const rect = event.currentTarget.getBoundingClientRect()
        clearTimeout(clearTimer.current ?? undefined)
        clearTimeout(setTimer.current ?? undefined)
        setTimer.current = window.setTimeout(() => {
            setPreview({ movie, rect })
        }, 60)
    }

    const handleMouseLeave = () => {
        clearTimeout(clearTimer.current ?? undefined)
        clearTimer.current = window.setTimeout(() => setPreview(null), 60)
    }

    return { preview, clearTimer, handleMouseHover, handleMouseLeave }
}