class PaintSelector {

  currentSelector;
  paintTiles = []

  constructor(el) {
    this.element = el;
    this.readImages();
  }

  readImages() {
    let images = this.element.querySelectorAll('.paint-tool');

    images.forEach(el => {
      this.paintTiles.push(new PaintTile(el, this));
    });
  }

  getState() {
    return this.state;
  }

  setState(state) {
    if (state !== 'clear') {
      this.state = state;
    } else {
      this.state = null;
    }
    console.log(this.state);
  }

}