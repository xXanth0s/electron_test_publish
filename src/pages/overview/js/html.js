export function addTaskToHtml(task) {
  const id = `task_${task.id}`
  const html = `
    <div class="card mt-2">
        <div class="card-header">
            
            <div class="d-flex align-content-center justify-content-between">
              <div class="d-flex align-content-center">
                  ${task.title}
                <button class="btn btn-link p-0 ml-1"
                        data-toggle="collapse"
                        data-target="#${id}">
                        toggle
                </button>
              </div>  
              <div class="form-check">
                <input type="checkbox" onchange="toDo.toggleTask(${task.id})" class="form-check-input" ${task.approved ? 'checked' : ''}>
              </div>         
            </div>               
        </div>
        <div id="${id}" class="collapse">
            <div class="card-body">
            ${task.description}
            </div>
        </div>
    </div>`

  const div = document.createElement('div');
  div.innerHTML = html;

  document.getElementById('to-do-container').appendChild(div);
}
