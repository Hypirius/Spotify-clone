import { useEffect, useState } from "react"
import type { Data } from "../lib/types"

type errorMessage = string | null

type dataState = Data | null

type fetchReturn = [boolean, errorMessage, dataState]

export default function useFetchData(input: string): fetchReturn {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!input) {
      return
    }

    setIsLoading(true)
    setError(null)

    const controller = new AbortController()
    async function fetchSongResult() {
      try {
        const response = await fetch(`/api/search?q=track:${input}`, {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error("Failed to fetch data: " + response.statusText)
        }

        const fetchedData = await response.json()
        setData(fetchedData)
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message)
          setError(error.message)
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchSongResult()

    return () => controller.abort()
  }, [input])

  return [isLoading, error, data]
}
