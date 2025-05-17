function showMessage(message: string): void {
  console.log(message);
}

showMessage("Hello, world!");

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(message: string): never {
  throw new Error(message);
}

export {};
