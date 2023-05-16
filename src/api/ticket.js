import mainCaller from "./mainCaller";

export const createTicket = async (data, token) => {
  return await mainCaller("admin/createTicket", "POST", data, {
    Authorization: "Bearer " + token,
    "Content-type": "multipart/form-data",
  });
};

export const updateTicket = async (data, token) => {
  return await mainCaller("admin/ticketUpdate", "POST", data, {
    Authorization: "Bearer " + token,
    "Content-type": "multipart/form-data",
  });
};

export const getAllTickets = async (id, query, token) => {
  return await mainCaller(`admin/getAllTicket/${id}?${query}`, "GET", null, {
    Authorization: "Bearer " + token,
  });
};

export const getTicketById = async (id, token) => {
  return await mainCaller(`admin/getTicket/byId/${id}`, "GET", null, {
    Authorization: "Bearer " + token,
  });
};

export const deleteTicketById = async (id, token) => {
  return await mainCaller(`admin/deleteTicketById/${id}`, "GET", null, {
    Authorization: "Bearer " + token,
  });
};
