const {RESTDataSource} = require('apollo-datasource-rest')

class DataSource extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://jsonplaceholder.typicode.com'
  }

  async getPosts() {
    const posts = await this.get('/posts')

    return posts
  }
}

module.exports = DataSource
