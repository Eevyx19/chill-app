export default function Input(props) {
    const {
        type,
        name,
        id,
        onChange,
        placeholder
    } = props
    return (
        <input
            className="border-[0.5px] md:border border-(--outline-border) text-xs sm:text-base md:text-lg px-3 md:px-4 lg:px-5 py-2 md:py-3 lg:py-4 rounded-2xl sm:rounded-3xl md:rounded-4xl placeholder:text-[10px] sm:placeholder:text-xs md:placeholder:text-base placeholder:text-(--secondary-text) leading-(--line-140)"
            type={type}
            name={name}
            id={id}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}
