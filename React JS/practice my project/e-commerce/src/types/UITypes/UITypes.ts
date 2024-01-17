import React from "react"

export type InputType = {
  value: string
  placeholder: string
  type: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type ButtonType = {
  children?: string | undefined
}