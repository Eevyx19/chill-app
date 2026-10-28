import type { TypographyProps } from "../../../types/typograph.types"

export default function BodySmallRegular(props: TypographyProps) {
    const {
        element: Element,
        className,
        children
    } = props

    return (
        <Element className={`${className} text-xs lg:text-[14px]`}>{children}</Element>
    )
}