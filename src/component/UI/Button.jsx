export default function Button (props){
    const {
        children,
        onClick,
        className,
        type
    } = props
    return (
        <button onClick={onClick} className={`${className} rounded-2xl sm:rounded-3xl md:rounded-4xl cursor-pointer leading-(--line-140)`} type={type}>
            {children}
        </button>
    )
}
