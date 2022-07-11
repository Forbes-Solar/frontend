import axios from "axios";
import { useDispatch } from "react-redux";
import { CATEGORY_LIST, PRODUCT_LIST, PRODUCT_LIST_MORE } from "./types";

export default function useProducts() {
  const dispatch = useDispatch();
  // const getProductList = (query) => {
  //   const result = axios
  //     .get("https://forbestech.herokuapp.com/products/", query)
  //     .then((res) => {
  //       return res.data;
  //     })
  //     .catch((err) => {
  //       return err.response.data;
  //     });

  //   if (query.loadMore) {
  //     dispatch({
  //       type: PRODUCT_LIST_MORE,
  //       payload: result,
  //     });
  //   } else {
  //     dispatch({
  //       type: PRODUCT_LIST,
  //       payload: result,
  //     });
  //   }
  // };

  const getProductList = () => {
    const result = axios
      .post("https://forbestech.herokuapp.com/products/")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data;
      });

    dispatch({
      type: PRODUCT_LIST,
      payload: result,
    });
  };

  const getCategoryList = () => {
    const result = axios
      .get("https://forbestech.herokuapp.com/categories/")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response.data;
      });

    dispatch({
      type: CATEGORY_LIST,
      payload: result,
    });
  };

  return {
    getProductList,
    getCategoryList,
  };
}
