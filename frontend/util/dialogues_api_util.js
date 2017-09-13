export const fetchAllDialogues = (dialogue) => {

  return $.ajax({
            url: '/api/dialogues',
            method: 'GET',
            data: dialogue
         });

}

export const fetchSingleDialogue = (dialogue) => {

  return $.ajax({
            url: `/api/dialogues/${dialogue.id}`,
            method: 'GET',
            data: { dialogue }
         });

}

export const createDialogue = (dialogue) => {

  return $.ajax({
            url: '/api/dialogues',
            method: 'POST',
            data: dialogue
         })

}
