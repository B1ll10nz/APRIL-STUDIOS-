/**
 * User/Authentication hooks
 */

import { useUserStore } from '@/store/userStore'

export function useUser() {
  const {
    user,
    isAuthenticated,
    loading,
    error,
    setUser,
    logout,
    updateUser,
    updatePreferences,
    addAddress,
    updateAddress,
    removeAddress,
    setLoading,
    setError,
  } = useUserStore()

  return {
    user,
    isAuthenticated,
    loading,
    error,
    setUser,
    logout,
    updateUser,
    updatePreferences,
    addAddress,
    updateAddress,
    removeAddress,
    setLoading,
    setError,
  }
}

export function useAuth() {
  const { user, isAuthenticated, setUser, logout, setLoading, setError } = useUserStore()

  const login = async (email: string, password: string) => {
    setLoading(true)
    try {
      // Call API to login
      // const response = await loginAPI(email, password)
      // setUser(response.user)
      setError(null)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed'
      setError(errorMessage)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const register = async (email: string, password: string, name: string) => {
    setLoading(true)
    try {
      // Call API to register
      // const response = await registerAPI(email, password, name)
      // setUser(response.user)
      setError(null)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Registration failed'
      setError(errorMessage)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return {
    user,
    isAuthenticated,
    login,
    register,
    logout,
  }
}
