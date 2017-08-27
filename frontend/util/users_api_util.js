export const fetchUsers = (user) => {
  return $.ajax({
    url: '/api/users',
    method: 'GET',
    data: user
  });
}

export const fetchSingleUser = (user) => {
  return $.ajax({
    url: `/api/users/${user.id}`,
    method: 'GET',
    data: { user }
  });
}

export const updateSingleUser = (user) => {
  return $.ajax({
    url: `/api/users/${user.id}`,
    method: 'PATCH',
    data: { user }
  });
}
