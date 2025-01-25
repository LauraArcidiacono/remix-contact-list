import { Links, Meta } from "@remix-run/react";

export default function Head(){
    return (
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="author" content="Laura Arcidiacono" />
            <title>Contact List Manager</title>
            <meta name="description" content="Easily manage your contacts 📇 with full CRUD operations 🛠️and quick search 🔍. Stay organized, efficient, and connected! 🚀" />
            <meta name="og:title" content="Contacts Manager App" />
            <meta name="og:description" content="Easily manage your contacts with CRUD and search features." />
            <meta name="og:image" content="../public/assets/app-image.png" />
            <meta name="og:url" content="https://github.com/LauraArcidiacono/remix-contact-list" />
            <Meta />
            <Links />
        </head>
    )
}