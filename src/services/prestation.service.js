import http from "../service-common";

class DataService {
  getAll() {
    return http.get("/universe");
  }

}

export default new DataService();