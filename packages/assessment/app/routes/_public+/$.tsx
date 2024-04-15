import React from "react";
import type { V2_MetaFunction } from "@remix-run/node";

export async function loader() {
  return new Response("", {
    status: 404,
  });
}

export const meta: V2_MetaFunction = () => {
  return [{ title: "Not Found" }];
};

export default function FourOhFour() {
  return <>Page not found</>;
}
