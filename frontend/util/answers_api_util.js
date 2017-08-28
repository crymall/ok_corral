export const fetchAnswers = (answer) => {
  return $.ajax({
    url: '/api/answers',
    method: 'GET',
    data: user
  });
}

export const fetchSingleAnswer = (answer) => {
  return $.ajax({
    url: `/api/answers/${answer.id}`,
    method: 'GET',
    data: { answer }
  });
}

export const updateSingleAnswer = (answer) => {
  return $.ajax({
    url: `/api/answers/${answer.id}`,
    method: 'PATCH',
    data: { answer }
  });
}
