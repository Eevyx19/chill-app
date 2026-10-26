const FormInput = (props) => {
    const {
        id,
        label,
        children,
        isError,
        errorMsg
    } = props
    return (
        <div className="relative flex flex-col gap-1 md:gap-1.5">
            <label htmlFor={id} className="text-xs sm:text-base md:text-lg font-medium leading-(--line-140)">{label}</label>
            {children}
            <span className="text-xs md:text-base text-(--error-pressed)" style={{ visibility: isError ? "visible" : "hidden" }}>* {errorMsg}</span>
        </div>
    )
}

export default FormInput