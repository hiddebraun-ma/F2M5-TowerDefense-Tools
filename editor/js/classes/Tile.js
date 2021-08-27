class Tile {

  data = {};
  element;

  constructor(data, clickHandler) {
    this.data = data;
    this.clickHandler = clickHandler;
    this.element = this.createTileElement(data);
  }

  createTileElement(data) {
    let htmlDivElement = document.createElement('div');
    htmlDivElement.className = 'state-' + data.state;

    htmlDivElement.addEventListener('click', () => {
      this.clickHandler(this);
    });

    return htmlDivElement;
  }

  getData() {
    return this.data;
  }

  getHtmlElement() {
    return this.element;
  }

  setPosition(x, y) {
    this.element.style.left = x + 'px';
    this.element.style.top = y + 'px';
  }

  setState(state) {
    this.data.state = state;
    this.element.className = 'state-' + state;
  }

}

export default Tile