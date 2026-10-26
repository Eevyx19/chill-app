export default function Heading5(props) {
    const {
        element: Element,
        children
    } = props
    return (
        <Element className="text-base md:text-lg lg:text-xl leading-(--line-140) md:leading-(--line-120) font-bold">{children}</Element>
    )
}