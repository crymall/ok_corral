export const fetchAllMessages = (message) => {
  return $.ajax({
    url: '/api/messages',
    method: 'GET',
    data: message
  });
}

export const fetchSingleMessage = (message) => {
  return $.ajax({
    url: `/api/messages/${message.id}`,
    method: 'GET',
    data: { message }
  });
}

export const createMessage = (message) => {
  return $.ajax({
    url: '/api/messages',
    method: 'POST',
    data: message
  })
}
