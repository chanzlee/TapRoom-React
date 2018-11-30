const userList = [
  {
    id: "goenchan",
    name: "Chan Lee",
    admin: true,
    membership: "gold",
    password: "123456"
  },
  {
    id: "homersimpon",
    name: "Homer Simpson",
    admin: false,
    membership: "silver",
    password: "123456"
  },
  {
    id: "robertbaratheon",
    name: "Robert Baratheon",
    admin: false,
    membership: "gold",
    password: "123456"
  }
];

export function getUserList() {
  return userList;
}
