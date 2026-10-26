export default function Heading3(props) {
    const {
        element: Element,
        children
    } = props
    return (
        <Element className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-(--line-140) md:leading-(--line-110) font-bold">{children}</Element>
    )
}