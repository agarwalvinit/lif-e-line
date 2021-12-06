/* eslint-disable */
/**
 * Have added this config file so that the api calls can be configured accordingly
 * for different environments.
 */
const getBasePath = () => {
  let baseUrl = "https://life-line-app-backend.herokuapp.com/";

  return {
    baseUrl,
  };
};

const CONFIG = getBasePath();

export default CONFIG;
