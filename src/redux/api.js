export const url = " http://localhost:5000/api";




export const setHeaders = () => {
  const headers = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  return headers;
};
