class Grid {

  data = {}
  tiles = []

  load(json) {
    this.data = JSON.parse(json);
    this.tiles = [];
  }

  getTileData() {
    return this.data.tiles;
  }

  getTiles() {
    return this.tiles;
  }

  addTile(tile) {
    this.tiles.push(tile);
  }

  getWidth() {
    return this.data.width;
  }

  toJSON() {
    let jsonObj = {
      width: this.getWidth(),
      tiles: []
    }

    this.tiles.forEach(tile => {
      jsonObj.tiles.push(
          tile.getData()
      )
    })

    console.log(jsonObj)

    return JSON.stringify(jsonObj);

  }

}
