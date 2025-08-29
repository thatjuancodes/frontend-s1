import { useState, useCallback } from 'react'
import { apiRequest, handleApiError } from '../utils/api'

interface UseApiState<T> {
  data: T | null
  loading: boolean
  error: string | null
}

interface UseApiReturn<T> extends UseApiState<T> {
  execute: (url: string, options?: RequestInit) => Promise<void>
  reset: () => void
}

export function useApi<T = unknown>(): UseApiReturn<T> {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  })

  const execute = useCallback(async (url: string, options?: RequestInit) => {
    setState(prev => ({ ...prev, loading: true, error: null }))

    const response = await apiRequest<T>(url, options)

    if (response.success) {
      setState({
        data: response.data,
        loading: false,
        error: null,
      })
    } else {
      setState({
        data: null,
        loading: false,
        error: handleApiError(response.error || ''),
      })
    }
  }, [])

  const reset = useCallback(() => {
    setState({
      data: null,
      loading: false,
      error: null,
    })
  }, [])

  return {
    ...state,
    execute,
    reset,
  }
}
