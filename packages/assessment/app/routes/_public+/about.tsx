import React from "react";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "About page" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return <>About page!</>;
}
