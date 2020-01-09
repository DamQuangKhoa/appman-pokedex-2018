import Axios from "axios";
const ROOT = "http://localhost:3030/api/";
export default function callAPI(
  endpoint,
  method = "GET",
  body,
  typeAuthor = "bearer",
  accesstoken = ""
) {
  return Axios({
    url: `${ROOT}${endpoint}`,
    method,
    headers: {
      "access-control-request-origin": "*",
      "content-type": "application/json",
      accept: "application/json",
      // "X-Api-Key": X_API_KEY,
      Authorization: `${typeAuthor} ` + accesstoken
    },
    data: body
  }).catch(err => {
    return err;
  });
}
