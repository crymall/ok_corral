export const fetchUsers = (user) => {
  return $.ajax({
    url: '/api/users',
    method: 'GET',
    data: user
  });
}
