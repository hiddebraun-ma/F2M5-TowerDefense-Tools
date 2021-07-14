class PaintTile {

  element;
  state;

  constructor(el, selector) {
    this.element = el;
    this.state = this.element.attributes['data-state'].value;
    this.element.addEventListener('click', () => {
      selector.setState(this.state)
    })
  }

  getElement() {
    return this.element;
  }

}
