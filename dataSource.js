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
  async createPost(args) {
    const post = await this.post('/posts', args)
    return post
  }
}

module.exports = DataSource
