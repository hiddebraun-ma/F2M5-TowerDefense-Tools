import Tile from './classes/Tile.js'
import Grid from './classes/Grid.js'
import Editor from './classes/Editor.js'
import PaintTile from './classes/PaintTile.js'
import PaintCursor from './classes/PaintCursor.js'
import PaintSelector from './classes/PaintSelector.js'

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

  // Save on button click
  const saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', () => {
    let outputTextArea = document.getElementById('json-output');
    outputTextArea.value = grid.toJSON();
  })

}

window.addEventListener('DOMContentLoaded', start);
