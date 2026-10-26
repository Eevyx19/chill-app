export default function BodyMediumMedium(props) {
    const {
        element: Element,
        className,
        children
    } = props
    
    return (
        <Element className={`${className} text-xs md:text-base leading-(--line-140) font-medium`}>{children}</Element>
    )
}