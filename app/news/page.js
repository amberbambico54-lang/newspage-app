import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/slug-1">News 1</Link>
        </li>
        <li>
          <Link href="/news/slug-2">News 2</Link>
        </li>
        <li>
          <Link href="/news/slug-3">News 3</Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
