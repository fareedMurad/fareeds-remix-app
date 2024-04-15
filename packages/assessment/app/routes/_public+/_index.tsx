import React from "react";
import type { V2_MetaFunction } from "@remix-run/node";
import BasicCommandInterface from "~/components/BasicCommandInterface";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <BasicCommandInterface />
    </div>
  );
}
