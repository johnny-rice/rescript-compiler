// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Stdlib_Array from "rescript/lib/es6/Stdlib_Array.js";

function decodeUser(json) {
  if (typeof json !== "object" || json === null || Array.isArray(json)) {
    return;
  }
  let id = json.id;
  if (typeof id !== "string") {
    return;
  }
  let name = json.name;
  if (typeof name !== "string") {
    return;
  }
  let age = json.age;
  if (typeof age !== "number") {
    return;
  }
  let email = json.email;
  let tmp;
  tmp = typeof email === "string" ? email : undefined;
  return {
    id: id,
    name: name,
    age: age | 0,
    email: tmp
  };
}

function decodeGroup(json) {
  if (typeof json !== "object" || json === null || Array.isArray(json)) {
    return;
  }
  let id = json.id;
  if (typeof id !== "string") {
    return;
  }
  let name = json.name;
  if (typeof name !== "string") {
    return;
  }
  let users = json.users;
  if (Array.isArray(users)) {
    return {
      id: id,
      name: name,
      users: Stdlib_Array.filterMap(users, decodeUser)
    };
  }
  
}

export {
  decodeUser,
  decodeGroup,
}
/* No side effect */
