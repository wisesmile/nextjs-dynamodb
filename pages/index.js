import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR(
    "/api/item?id=0f686bb9-d961-4184-916f-79415d9e1919",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return <code>{JSON.stringify(data, null, 2)}</code>;
}
