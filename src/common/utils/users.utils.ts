export const getFavoriteUserDataFromLocalStorage = (): Record<string, '' | 'favorite'> => {
  const data = localStorage.getItem('user')

  return JSON.parse(data || '{}')
}

export const setFavoriteUserDataToLocalStorage = (data: Record<string, '' | 'favorite'>) => {
  localStorage.setItem('user', JSON.stringify(data))
}
