const start = () => {
  const paintSelector = new PaintSelector(document.getElementById('grid-painter'));
  const editor = new Editor(document.getElementById('editor'), paintSelector);
  const grid = new Grid();

  // Load on button click
  const loadButton = document.getElementById('load-button');
  loadButton.addEventListener('click', () => {
    let inputTextArea = document.getElementById('json-input');
    grid.load(inputTextArea.value);
    editor.renderGrid(grid)
  })

  // Load from server button click
  const loadServerButton = document.getElementById('load-server-button');
  loadServerButton.addEventListener('click', () => {

    const inputTextArea = document.getElementById('json-input');
    inputTextArea.value = '';

    fetch(
      'http://localhost:3001/levels',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(json_object => {
        const jsonString = JSON.stringify(json_object, 0, 2);
        inputTextArea.value = jsonString;
        grid.load(jsonString);
        editor.renderGrid(grid);
      })
      .catch(error => outputTextArea.value = error)
  })

  // Save on button click
  const saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', () => {
    let outputTextArea = document.getElementById('json-output');
    outputTextArea.value = grid.toJSON();
  })

  // Save on button click
  const saveServerButton = document.getElementById('save-server-button');
  saveServerButton.addEventListener('click', () => {

    const outputTextArea = document.getElementById('json-output');
    outputTextArea.value = '';

    const json = grid.toJSON();

    fetch(
      'http://localhost:3001/levels',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: json
      })
      .then(response => response.text())
      .then(text => {
        outputTextArea.value = text;
      })
      .catch(error => outputTextArea.value = error)
  })
}

window.addEventListener('DOMContentLoaded', start);
