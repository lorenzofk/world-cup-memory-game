import Repository from "./Repository";

const resource = "/matches";

export default {

  get() {
    return Repository.get(`${resource}`);
  }

}