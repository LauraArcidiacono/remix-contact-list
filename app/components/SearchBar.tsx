import { Form, useNavigation, useSubmit } from "@remix-run/react";
import { useEffect, useState } from "react";

interface SearchBarProps {
  q: string | null;
}

export default function SearchBar({ q }: SearchBarProps) {
  const navigation = useNavigation();
  const submit = useSubmit();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  const [query, setQuery] = useState(q || "");

  useEffect(() => {
    setQuery(q || "");
  }, [q]);

  return (
    <Form
      id="search-form"
      role="search"
      onChange={(event) => {
        const isFirstSearch = q === null;
        submit(event.currentTarget, {
          replace: !isFirstSearch,
        });
      }}
    >
      <input
        id="q"
        aria-label="Search contacts"
        className={searching ? "loading" : ""}
        placeholder="Search"
        type="search"
        name="q"
        onChange={(event) => setQuery(event.currentTarget.value)}
        value={query}
      />
      <div id="search-pinner" aria-hidden hidden={!searching} />
    </Form>
  );
}
