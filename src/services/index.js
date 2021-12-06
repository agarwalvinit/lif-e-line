import request from "../utils/request";

export const fetchHospitals = () => request.get("hospital", {});

export const deleteHospital = (id) =>
  request.del(`hospital/${id}`, { shouldAuthorize: false });
