class Movie {
  constructor(title, actor = "Not specified") {
    this.title = title;
    this.actor = actor;
  }

  add() {
    return this;
  }
}

module.exports = Movie;
