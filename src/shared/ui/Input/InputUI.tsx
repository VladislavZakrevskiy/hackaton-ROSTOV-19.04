import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    width: string
    height: string
    backgroundColor: string
    textStyle: 'regular' | 'medium' | 'semibold' | 'bold' | 'extaBold'
    type: 'default' | 'active' | 'disable'
    text: string
}

export const InputUI: React.FC<InputProps> = ({
    width,
    height,
    backgroundColor,
    textStyle,
    type,
    text,
    ...otherProps
}) => {
    const defaultTextStyle: { [key in InputProps['textStyle']]: React.CSSProperties } = {
        regular: {
            fontSize: '10px',
        },
        medium: {
            fontSize: '18px',
        },
        semibold: {
            fontSize: '36px',
        },
        bold: {
            fontSize: '44px',
        },
        extaBold: {
            fontSize: '54px',
        },
    }
    const typeInput: { [key in InputProps['type']]: React.CSSProperties } = {
        default: {
            borderColor: 'gray',
        },
        active: {
            borderColor: 'green',
        },
        disable: {
            borderColor: 'red',
            opacity: 0.5,
            cursor: 'not-allowed',
        },
    }

    const mergedTextStyle = defaultTextStyle[textStyle]
    const inputStyle = {
        width,
        height,
        backgroundColor,
        ...mergedTextStyle,
        ...typeInput[type],
        padding: '10px',
        marginTop: '10px',
        marginBottom: '10px',
        outline: 'none',
        borderRadius: '6px',
    }

    return <input style={inputStyle} {...otherProps} />
}

export default InputUI
