import axios from "axios";

export default class postsService {
  static async getAll(limit = 10, page = 1) {
    const respons = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",{
        params: {
          _limit: limit,
          _page: page,
        }
      }
    );
    return respons;
  }

  static async getById(id){
    const respons  = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + id
    )
    return(respons)
  }
}
