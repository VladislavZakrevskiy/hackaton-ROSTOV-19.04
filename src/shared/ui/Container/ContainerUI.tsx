import React, { CSSProperties } from 'react'

interface ContainerProps {
    typeContainer: 'extraSmall' | 'small' | 'medium' | 'large' | 'xlarge'
    children: React.ReactNode
}

export const ContainerUI: React.FC<ContainerProps> = ({ typeContainer, children }) => {
    const typeContainerStyles: Record<'extraSmall' | 'small' | 'medium' | 'large' | 'xlarge', CSSProperties> = {
        extraSmall: {
            borderColor: '2px solid gray',
            width: 'auto',
            height: 'auto',
            backgroundColor: '#E0E0E0',
            margin: '10px',
        },
        small: {
            borderColor: '2px solid gray',
            width: '300px',
            height: 'auto',
            margin: '10px',
        },
        medium: {
            borderColor: '2px solid gray',
            width: '400px',
            height: 'auto',
            backgroundColor: '#E0E0E0',
            margin: '15px',
        },
        large: {
            borderColor: '2px solid gray',
            width: '1200px',
            height: 'auto',
            backgroundColor: '#EAEAEA',
            margin: '20px',
        },
        xlarge: {
            borderColor: '2px solid gray',
            width: '1570px',
            height: '800px',
            backgroundColor: '#EAEAEA',
            margin: '20px',
        },
    }

    const containerStyle = {
        ...typeContainerStyles[typeContainer],
        overflow: 'auto',
        borderRadius: '20px',
    }

    return <div style={containerStyle}>{children}</div>
}

export default ContainerUI
