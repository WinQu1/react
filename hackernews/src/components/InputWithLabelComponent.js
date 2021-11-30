import React from "react"

const InputWithLabel = ({
    id,
    type,
    value,
    onInputChange,
    isFocused,
    children
}) => {
    const inputRef = React.useRef()

    React.useEffect(() => {
        if (isFocused && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isFocused])
    return (
        <>
            <label htmlFor={id} className='label'>
                {children}
            </label>
            <input
                ref={inputRef}
                id={id}
                type={type}
                onChange={onInputChange}
                defaultValue={value}
                className='input'
            />
        </>
    )
}

export default InputWithLabel