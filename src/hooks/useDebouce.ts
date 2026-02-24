import { useState, useEffect } from "react"

export default function useDebouce(inputValue: string, delay: number) {
  const [value, setValue] = useState("")

  useEffect(() => {
    if (!inputValue) return
    const timerId = setTimeout(() => setValue(inputValue), delay)

    return () => clearTimeout(timerId)
  }, [inputValue, delay])

  return value
}
