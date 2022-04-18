// List all endpoints here
// @ts-check
import { Endpoint } from "./APIModel";
import { HTTP_METHODS } from "./HttpMethods";

// ******************
// Endpoint class takes 3 params in constructor ==> "endpoint", "http-method", "API-version"
// By default, version is set to v1
// ******************
export const API = {
  AUTH: {
    LOGIN_EMAIL: new Endpoint("/auth/login", HTTP_METHODS.POST),
    REGISTER: new Endpoint("/auth/register", HTTP_METHODS.POST)
  },
  USER: {
    PROFILE: new Endpoint("/user/info", HTTP_METHODS.POST)
  }
};
