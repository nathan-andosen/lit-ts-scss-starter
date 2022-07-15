

class UtilsService {

  add(num1: number, num2: number): number {
    return num1 + num2;
  }

  injectStyleIntoHead(style: string) {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = style;
    document.head.appendChild(styleEl);
  }
}

const utilsSrv = new UtilsService();
export { utilsSrv };