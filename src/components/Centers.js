import React from "react";
import Header from "./Header";
import "./centers.css";

function SideNav() {
  const routeName = "maps";
  const routes = ["maps", "try me"];

  return (
    <>
      <Header />
      <div className="sidenav">
        {routes.map((route, i) => (
          <a
            key={i}
            onClick={() => {}}
            style={
              (routeName === route && {
                color: "#f1f1f1",
                backgroundColor: "#111",
                textDecoration: "none"
              }) || {
                cursor: "pointer"
              }
            }
          >
            {capitalizeFirstLetter(route)}
          </a>
        ))}
      </div>
    </>
  );
}

// export const capitalizeFirstLetter = word => word[0].toUpperCase() + word.slice(1)
export const capitalizeFirstLetter = word =>
  `${word[0].toUpperCase()}${word.slice(1)}`;

export default SideNav;
