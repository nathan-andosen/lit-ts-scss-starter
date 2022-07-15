/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type PlaywrightHelper = typeof import('./helpers/playwright.helper');
// import PlaywrightHelper from './helpers/playwright.helper';
// import steps_file from './steps_file';


declare namespace CodeceptJS {
  interface SupportObject { I: CodeceptJS.I }
  interface CallbackOrder { [0]: CodeceptJS.I }
  interface Methods extends CodeceptJS.Playwright,
    InstanceType<PlaywrightHelper> {}
  interface I extends ReturnType<ReturnType<steps_file>>, Methods {}
  namespace Translation {
    interface Actions {}
  }
}