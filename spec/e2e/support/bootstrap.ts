/**
 * Bootstrap the e2e tests (runs before the e2e tests are executed)
 */
 
 const bootstrapFn = async function() {
  console.log('Bootstraping...');
  return Promise.resolve();
 };
 
 export { bootstrapFn };
// export default bootstrapFn;