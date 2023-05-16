import React from "react";
import AnimationPage from "../pages/AnimationPage";

function Dashboard() {
  const data = [
    {
      item: "cola",
      price: "$44.2",
    },
    {
      item: "fanta",
      price: "$54.2",
    },
    {
      item: "sprite",
      price: "$24.2",
    },
    {
      item: "pepsi",
      price: "$94.2",
    },
  ];
  return (
    <AnimationPage>
      <h1>Dashboard Page</h1>
    </AnimationPage>
  );
}

export default Dashboard;
