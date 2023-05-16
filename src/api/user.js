import mainCaller, { pilaAuthUser } from "./mainCaller";

export function authUser({ password, username }) {
  return pilaAuthUser(password, username);
}

export async function getUserById(id, token) {
  return await mainCaller(`admin/user/get/${id}`, "GET", null, {
    Authorization: `Bearer ${token}`,
  }).catch((error) => {
    console.log(error);
  });
}

export async function updateUserById(id, data) {
  return await mainCaller(`api/user/update/${id}`, "POST", data, {}).catch(
    (error) => {
      console.log(error);
    }
  );
}

export async function deleteUserById(id, token) {
  return await mainCaller(`admin/deleteUser/${id}`, "POST", null, {
    Authorization: `Bearer ${token}`,
  }).catch((error) => {
    console.log(error);
  });
}

export async function getUserTicketsById(id, token) {
  return await mainCaller(`admin/findByUserId/${id}`, "GET", null, {
    Authorization: `Bearer ${token}`,
  }).catch((error) => {
    console.log(error);
  });
}

export async function createUser(data) {
  return await mainCaller(`api/user/signup`, "POST", data, {}).catch((error) => {
    console.log(error);
  });
}
