import request from "superagent";
import CONFIG from "../config/environment";

/**
 * Gets the complete url to which the call will be made.
 * @param {String} url: Partial url which needs to be combined with the base url.
 */
const getRequestUrl = (url) => `${CONFIG.baseUrl}${url}`;

/**
 * Returns a boolean indicating whether to send the authorization header in the call or not.
 * Checks whether shouldAuthorze flag is present. If not present then the result defaults to true,
 * else the flag value is returned.
 * @param {Object} options: Object containing shouldAuthorize flag
 */
const checkShouldAuthorize = (options = {}) =>
  options?.shouldAuthorize ? true : false;

const getAuthenticationHeader = () => {
  const authDetails = { authToken: "" };
  return `Bearer ${authDetails.authToken}`;
};

/**
 * Makes a GET call to the request URl.
 * Adds query params to the request if any present.
 * An object which has authentication information
 * @param  {String} url: Partial Url of the api.
 * @param  {Object} queryParams: An optional object of query params of the shape {[queryName]: queryValue}
 * @param  {Object} options: A object which has authentication information
 */
const get = (url, options = {}) => {
  const requestUrl = getRequestUrl(url);
  const shouldAuthorize = checkShouldAuthorize(options);

  const getRequest = request.get(requestUrl);

  // Whether to send authorization header in the calls.
  if (shouldAuthorize) {
    getRequest.set("Authorization", getAuthenticationHeader());
  }

  const promise = getRequest
    .then((res) => res?.body)
    .catch(() => console.error("Oops something went wrong!"));

  return promise;
};

/**
 * Makes a POST call to the request URL.
 * Adds the payload to the request. This is a necessity to be present in the post call.
 * An object which has authentication information
 * @param  {String} url: Partial Url of the api.
 * @param  {Object} payload: A required object which acts as a payload to be sent to backend.
 * @param  {Object} options: A object which has authentication information
 */
const post = (url, payload = {}, options = {}) => {
  const requestUrl = getRequestUrl(url);
  const shouldAuthorize = checkShouldAuthorize(options);

  const postRequest = request.post(requestUrl).send(payload);

  if (shouldAuthorize) {
    postRequest.set("Authorization", getAuthenticationHeader());
  }

  return postRequest
    .then((res) => res?.body)
    .catch(() => console.error("Oops something went wrong!"));
};

/**
 * Makes a DELETE call to the request URL.
 * An object which has authentication information
 * @param  {String} url: Partial Url of the api.
 * @param  {Object} options: An object which has authentication information
 */
const del = (url, options = {}) => {
  const requestUrl = getRequestUrl(url);
  const shouldAuthorize = checkShouldAuthorize(options);

  const delRequest = request.delete(requestUrl);

  if (shouldAuthorize) {
    delRequest.set("Authorization", getAuthenticationHeader());
  }

  return delRequest
    .then((res) => res?.body)
    .catch(() => console.error("Oops something went wrong!"));
};

const patch = (url, payload = {}) => {
  const requestUrl = getRequestUrl(url);
  return request
    .patch(requestUrl)
    .set("Authorization", getAuthenticationHeader())
    .send(payload)
    .then((res) => res?.body)
    .catch(() => console.error("Oops something went wrong!"));
};

/**
 * @type {REQUEST_EXPORT}
 **/
const REQUEST = {
  get,
  post,
  del,
  patch,
};

export default REQUEST;
