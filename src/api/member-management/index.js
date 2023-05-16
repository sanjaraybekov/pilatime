import mainCaller from "../mainCaller";

export async function getUsersList(token, query) {
  const { data } = await mainCaller(`admin/user/list?${query}`, "GET", null, {
    Authorization: `Bearer ${token}`,
  }).catch((error) => {
    console.log(error);
  });
  return data;
}
