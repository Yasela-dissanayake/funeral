import React from "react";
import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";
import { primaryColor } from "../utils/Colors";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
});

export default function UsePagination() {
  const { items } = usePagination({
    count: 2,
  });

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            // children = "…";
          } else if (type === "page") {
          } else {
            children = (
              <button
                type="button"
                {...item}
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  textTransform: "capitalize",
                  //   color: primaryColor,
                }}
              >
                {type}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
}
