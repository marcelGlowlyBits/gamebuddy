import * as React from 'react'
import { getUser } from '@/queries/user'
import { IUser } from '@/types'

export const useUser = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [user, setUser] = React.useState<IUser | null>(null)

  React.useEffect(() => {
    setIsLoading(true)

    const fetchUser = async () => {
      const result = await getUser()
      setUser(result)
      setIsLoading(false)
    }

    fetchUser()
  }, [])

  return { user, isLoading }
}
