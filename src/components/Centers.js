import React from "react";
import "./centers.css";

function SideNav() {
  const routeName = "maps";
  const routes = ["maps", "try me"];

  return (
    <>
      {/* <Header /> */}
      <div className="sidenav">
        {/* The following was meant for dynamic routing, when we have different centers */}
        {routes.map((route, i) => (
          <a
            key={i}
            onClick={() => {}}
            style={
              (routeName === route && {
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

// Assume we are getting center names and we want to use them as routes at the same time as List items in the sidenav
const capitalizeFirstLetter = word =>
  `${word[0].toUpperCase()}${word.slice(1)}`;

export default SideNav;
