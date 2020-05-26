export default class Pic {
  constructor(id, title, path, date) {
    this.id = id
    this.title = title
    this.path = path
    this.date = date
  }

  get largeUrl() {
    return `https://res.cloudinary.com/arai/image/private/t_2000px/${this.path}`
  }
}
