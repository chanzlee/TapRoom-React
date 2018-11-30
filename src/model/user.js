export default class User {
  constructor(id, name, password) {
    this.id = id || "";
    this.name = name || "";
    this.admin = false;
    this.membership = "bronze";
    this.password = password || "";
  }
}
