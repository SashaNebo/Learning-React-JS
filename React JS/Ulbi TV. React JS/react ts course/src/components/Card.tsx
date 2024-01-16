import React, { PropsWithChildren } from 'react'

export const enum CardVariant {
  outlined = 'outlined',
  primary = 'primary',
}

interface CardProps {
  width?: string
  height?: string
  variant: CardVariant
  onClick: () => void
  // children?: ReactNode
}

const Card: React.FC<PropsWithChildren<CardProps>> = ({ width, height, variant, onClick, children }) => {
  return (
    <>
      <div
        onClick={onClick}
        style={{
          width,
          height,
          border: variant === CardVariant.outlined ? '5px solid #000' : 'none',
          background: variant === CardVariant.primary ? 'orange' : '',
        }}>
        {children}
      </div>
    </>
  )
}

export default Card
