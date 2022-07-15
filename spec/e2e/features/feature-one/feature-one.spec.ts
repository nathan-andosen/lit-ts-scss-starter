

Feature('@my-element').retry(3);

Scenario('Should run test', async ({I}) => {
  I.amOnPage("http://127.0.0.1:8080/spec/e2e/features/feature-one/feature-one.html");
  I.see('This is child content');
});