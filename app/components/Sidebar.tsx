import { Form, redirect } from "@remix-run/react";
import SearchBar from "./SearchBar";
import SideNavBar from "./SideNavBar";
import { createEmptyContact } from "~/data";
import { ContactRecord } from "~/domain/Contact";

interface SidebarProps {
  contacts: ContactRecord[];
  q: string | null;
}

export const action = async () => {
  const contact = await createEmptyContact();
  return redirect(`/contacts/${contact.id}/edit`);
};

export default function Sidebar({ contacts, q }: SidebarProps) {
  return (
    <div id="sidebar">
      <h1>Contact Manager</h1>
      <div>
        <SearchBar q={q} />
        <Form method="post">
          <button type="submit">New</button>
        </Form>
      </div>
      <SideNavBar contacts={contacts} />
    </div>
  );
}
