export default function Heading1(props) {
    const {
        element: Element,
        children
    } = props
    return (
        <Element className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-(--line-120) md:leading-(--line-110)">{children}</Element>
    )
}