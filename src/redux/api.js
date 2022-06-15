export const url = " https://forbessolar.herokuapp.com/api";




export const setHeaders = () => {
  const headers = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  return headers;
};
