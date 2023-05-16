import mainCaller from "./mainCaller";

export async function createPoint(data, token) {
  return await mainCaller(`admin/createPoint`, "POST", data, {
    Authorization: `Bearer ${token}`,
  });
}

export async function createPointIntro(data, token) {
  return await mainCaller(`admin/create/StoreIntro`, "POST", data, {
    Authorization: `Bearer ${token}`,
  });
}

export async function getFacilityList(token) {
  return await mainCaller(`admin/getAllFacilityList`, "GET", null, {
    Authorization: `Bearer ${token}`,
  });
}

export async function getPointById(token, id) {
  return await mainCaller(`admin/getPointByManagerId/${id}`, "GET", null, {
    Authorization: `Bearer ${token}`,
  });
}

export async function getPointCategoriesByUserId(token, id) {
  return await mainCaller(`admin/getCategoryPoint/${id}`, "GET", null, {
    Authorization: `Bearer ${token}`,
  });
}

export async function deletePointCategoryId(token, id) {
  return await mainCaller(`admin/delete/category/${id}`, "GET", null, {
    Authorization: `Bearer ${token}`,
  });
}

export async function updatePointCategoryById(token, data) {
  return await mainCaller(`admin/update/categoryPoint`, "POST", data, {
    Authorization: `Bearer ${token}`,
  });
}

export async function createPointCategoryByUserId(token, data) {
  return await mainCaller(`admin/create/category`, "POST", data, {
    Authorization: `Bearer ${token}`,
  });
}

// products

export async function getPointProductsByPointId(token, id, query) {
  return await mainCaller(
    `admin/getAllProductPoint/${id}?${query}`,
    "GET",
    null,
    {
      Authorization: `Bearer ${token}`,
    }
  );
}

export async function createPointProduct(token, data) {
  return await mainCaller(`admin/create/ProductPoint`, "POST", data, {
    Authorization: `Bearer ${token}`,
  });
}

export async function updatePointProduct(token, data) {
  return await mainCaller(`admin/update/product`, "POST", data, {
    Authorization: `Bearer ${token}`,
  });
}

export async function deletePointProduct(token, id) {
  return await mainCaller(`/admin/delete/productPoint/${id}`, "POST", null, {
    Authorization: `Bearer ${token}`,
  });
}
