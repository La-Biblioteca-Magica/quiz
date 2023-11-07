const LOCATION = "https://www.amazon.es/gp/search";
const getParams = (isbn: string) => ({
  creative: "24630",
  ie: "UTF8",
  camp: "36",
  linkCode: "ur2",
  index: "books",
  tag: "labibliotecam-21",
  keywords: isbn,
})
export function generateLinkWithISBN(isbn: string): string {
  const url = new URL(LOCATION);
  Object.entries(getParams(isbn)).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });
  console.log(url);
  return url.toString();
}