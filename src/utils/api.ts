import type { ApiResponse } from '../types'

export async function apiRequest<T>(
  url: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      return {
        data: null as T,
        success: false,
        error: errorData.message || `HTTP error! status: ${response.status}`,
      }
    }

    const data = await response.json()
    return {
      data,
      success: true,
    }
  } catch (error) {
    return {
      data: null as T,
      success: false,
      error: error instanceof Error ? error.message : 'An unknown error occurred',
    }
  }
}

export function handleApiError(error: string): string {
  if (error.includes('401')) return 'Unauthorized. Please log in again.'
  if (error.includes('403')) return 'Access denied. You don\'t have permission.'
  if (error.includes('404')) return 'Resource not found.'
  if (error.includes('500')) return 'Server error. Please try again later.'
  
  return error || 'An unexpected error occurred.'
}
