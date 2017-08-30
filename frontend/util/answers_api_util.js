export const fetchAllAnswers = (answer) => {
  return $.ajax({
    url: '/api/answers',
    method: 'GET',
    data: answer
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

export const createAnswer = (answer) => {
  return $.ajax({
    url: '/api/answers',
    method: 'POST',
    data: answer
  })
}
