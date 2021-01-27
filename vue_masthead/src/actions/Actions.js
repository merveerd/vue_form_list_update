import { get, post } from "./Api";

const base_url = "http://localhost:3000";

export const getMastheads = params => {
  get(base_url.concat("/mastheads"), params ? params : {});
};

export const postMasthead = params => {
  post(base_url.concat("mastheads"), params);
};
