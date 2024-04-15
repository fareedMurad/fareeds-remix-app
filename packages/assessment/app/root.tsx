import { cssBundleHref } from "@remix-run/css-bundle";
import { type LinksFunction } from "@remix-run/node";
import { Links, Meta } from "@remix-run/react";

import PublicLayout from "~/components/PublicLayout";
import styles from "~/index.css";
import * as common from "@fareeds-remix-app/common/components/Document";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@fareeds-remix-app/common/components/context";

export const loader = common.loader;

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&display=swap",
  },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

type DocumentProps = {
  title?: string;
  children: React.ReactNode;
};

function Document({ title, children }: DocumentProps) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title && <title>{title}</title>}
        <Meta />
        <Links />
      </head>
      <body className="h-full font-Montserrat">
        <AuthProvider>{children}</AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}

export default common.makeApp({ Document });

export const ErrorBoundary = common.makeErrorBoundary({
  Document,
  PublicLayout,
});
