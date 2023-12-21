export function useUsers(users, key, query) {
  const sortingUsers = useFilteredUsers(users, key)

  function sortedUsers() {
    if (!query) return sortingUsers
    return sortingUsers.filter(user => {
      return user.name.toLowerCase().includes(query.toLowerCase())
    })
  }

  return sortedUsers()
}

export function useFilteredUsers(users, key) {
  function filteredUsers() {
    if (!key) return users

    const sortingByName = () => [...users].sort((a, b) => a.name < b.name && -1)
    const sortingByNumberHigh = () => [...users].sort((a, b) => b.number - a.number)
    const sortingByDefault = () => [...users].sort((a, b) => a.number - b.number)

    const sortingList = {
      name: sortingByName,
      numberHigh: sortingByNumberHigh,
      default: sortingByDefault,
    }

    return sortingList[key]()
  }

  return filteredUsers()
}
