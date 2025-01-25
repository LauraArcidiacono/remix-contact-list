import { Outlet, useNavigation } from "@remix-run/react";

export default function ContactDetails() {
  const navigation = useNavigation();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  return (
    <div
      className={navigation.state === "loading" && !searching ? "loading" : ""}
      id="detail"
    >
      <Outlet />
    </div>
  );
}
