import React from "react";
import { Box } from "@mui/material";

import { useSelector } from "react-redux";

import CategorySide from "./CategorySide";
import ProductSide from "./ProductSide";
import { useEffect } from "react";
import { getPointCategoriesByUserId } from "../../../api/point";
import { useState } from "react";

function StoreTab5() {
  const user = useSelector((state) => state.user.user);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getPointCategoriesByUserId(
      user.token,
      user.storeCreateUserId ? user.storeCreateUserId : user.id
    )
      .then(({ data }) => setCategories(data))
      .catch((err) => console.log(err));
  }, [user.token]);

  return (
    <div style={{ display: "flex", columnGap: "40px" }}>
      <CategorySide
        user={user}
        categories={categories}
        setCategories={setCategories}
      />
      <Box sx={{ width: "1px", background: "#ddd" }}></Box>
      <ProductSide user={user} categories={categories} />
    </div>
  );
}

export default StoreTab5;
