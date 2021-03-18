const taskTitleInput = document.getElementById('toDoTitle');
const taskDescriptionInput = document.getElementById('toDoDescription');

const INPUT_MISSING_ERROR_ID = 'form-error'

export function addInputMissingError() {
  if (!document.getElementById(INPUT_MISSING_ERROR_ID)) {
    const html = `
      <div class="alert alert-danger" id="${INPUT_MISSING_ERROR_ID}" role="alert">
        Please fill both inputs for the to do task
      </div>
    `
    const div = document.createElement('div');
    div.innerHTML = html;

    document.getElementById('error-container').appendChild(div);
  }
}


export function getTaskDataFromHtml() {
  const title = taskTitleInput.value;
  const description = taskDescriptionInput.value;

  return {
    title,
    description
  }
}

