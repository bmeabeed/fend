import { validateUrl} from "../client/js/formValidator.js";
describe("Testing the validate url method", () => {
  test("Making sure validateUrl is defined", () => {
    expect(validateUrl).toBeDefined();
  });

  test("Making sure validateUrl is defined", () => {
    expect(validateUrl("http://")).toBeFalsy();
  });
  
  test("Making sure validateUrl is defined", () => {
    expect(validateUrl("http//")).toBeFalsy();
  });
  
  test("Making sure validateUrl is defined", () => {
    expect(validateUrl("http://sssss")).toBeFalsy();
  });

  test("Making sure validateUrl is defined", () => {
    expect(validateUrl("http://google.com")).toBeTruthy();
  });

  test("Making sure validateUrl is defined", () => {
    expect(validateUrl("https://www.onecard.net")).toBeTruthy();
  }); 

});