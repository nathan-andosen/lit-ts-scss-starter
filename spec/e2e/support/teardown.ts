/**
 * Teardown the e2e tests (runs after all e2e tests have executed)
 */
 
 // export the teardown function
 const teardownFn = async function() {
   console.log('Tearing down e2e tests...');
   return Promise.resolve();
 };
 
 export { teardownFn };