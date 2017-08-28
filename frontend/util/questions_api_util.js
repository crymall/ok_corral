export const fetchQuestions = (question) => {
  return $.ajax({
    url: '/api/questions',
    method: 'GET',
    data: question
  });
}

export const fetchSingleQuestion = (question) => {
  return $.ajax({
    url: `/api/questions/${question.id}`,
    method: 'GET',
    data: { question }
  });
}
