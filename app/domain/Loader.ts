import { getContacts } from "~/data";

export type Loader = {
  contacts: Awaited<ReturnType<typeof getContacts>>;
  q: string | null;
};
