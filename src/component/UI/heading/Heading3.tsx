import type { TypographyProps } from "../../../types/typograph.types"


export default function Heading3(props: TypographyProps) {
    const {
        element: Element,
        children,
        className
    } = props
    return (
        <Element className={`${className} text-lg sm:text-xl md:text-2xl lg:text-3xl leading-(--line-140) md:leading-(--line-110) font-bold`}>{children}</Element>
    )
}