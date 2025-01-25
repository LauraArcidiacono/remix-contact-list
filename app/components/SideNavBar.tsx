import { NavLink } from "@remix-run/react";
import { ContactRecord } from "~/domain/Contact";

interface SideNavBarProps {
    contacts: ContactRecord[];
}

export default function SideNavBar({ contacts }: SideNavBarProps) {
    return (
        <nav>
            {contacts.length ? (
            <ul>
                {contacts.map((contact: ContactRecord) => (
                <li key={contact.id}>
                    <NavLink
                    className={({ isActive, isPending }) =>
                        isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                    to={`contacts/${contact.id}`}
                    >
                    {contact.first || contact.last ? (
                        <>
                        {contact.first} {contact.last}
                        </>
                    ) : (
                        <i>No Name</i>
                    )}{" "}
                    {contact.favorite ? (
                        <span>★</span>
                    ) : null}
                    </NavLink>
                </li>
                ))}
            </ul>
            ) : (
            <p>
                <i>No contacts</i>
            </p>
            )}
      </nav>
    )
}