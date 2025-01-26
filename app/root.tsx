import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import appStylesHref from "./app.css?url";

import Sidebar from "./components/Sidebar";
import Head from "./components/Head";
import ContactDetails from "./components/ContactDetails";

import { contactsLoader } from "./helpers/ContactsLoader";
import { Loader } from "./domain/Loader";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

export const loader = contactsLoader;

export default function App() {
  const { contacts, q } = useLoaderData<Loader>();

  return (
    <html lang="en">
      <Head />
      <body>
        <Sidebar contacts={contacts} q={q} />
        <ContactDetails />

        <Links />

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
