import axios from "axios";
export const post = (url, params) => {
  //let method = url.split('/').pop();
  axios({
    method: "post",
    url,
    data: params
  })
    .then(response => {
      console.log("POST successful: => ", response.data);
    })
    .catch(err => {
      console.log(" POST failed: => ", err);
    });
};

export const get = (url, params) => {
  console.log("Giden URL => ", url);

  axios({
    method: "get",
    url
  })
    .then(response => {
      console.log(" GET Successful: => ", response.data);
    })
    .catch(err => {
      console.log("GET Failed: => ", err);
    });
};
