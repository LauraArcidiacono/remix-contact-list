import { json, LoaderFunctionArgs } from "@remix-run/node";
import { getContacts } from "~/data";
import { Loader } from "~/domain/Loader";

export async function contactsLoader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return json<Loader>({ contacts, q });
}
