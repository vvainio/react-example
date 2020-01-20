/* eslint-disable no-console */
const IS_ENABLED = true; // Set to `false` to disable request mocking
const RESPONSE_DATA = {}; // Modify for custom response
const REJECT = false; // Whether the response should be rejected
const RESPONSE_DELAY = 500; // Response delay in ms

if (IS_ENABLED) {
  console.warn('Request mocking enabled! To use an actual API, disable the `IS_ENABLED` flag under `/src/services/__debug__/mock-api.js`');
}

const promise = (...args) => new Promise((resolve, reject) => {
  console.log(...args);

  return setTimeout(
    () => {
      const status = REJECT ? 'REJECTED:' : 'SUCCESS:';
      const response = { data: RESPONSE_DATA };
      console.log(status, response);
      return REJECT ? reject(response) : resolve(response);
    },
    RESPONSE_DELAY,
  );
});

export default {
  IS_ENABLED,
  get: (...args) => promise('GET', ...args),
  post: (...args) => promise('POST', ...args),
  put: (...args) => promise('PUT', ...args),
  delete: (...args) => promise('DELETE', ...args),
};
