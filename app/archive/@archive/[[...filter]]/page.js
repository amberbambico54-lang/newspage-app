import NewsList from "@/components/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
} from "@/lib/news";
import Link from "next/link";

async function FilteredNewsPage({ params }) {
  const { filter } = await params;
  console.log(filter);

  const selectedYear = filter ? filter[0] : null;
  const selectedMonth = filter ? filter[1] : null;

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error("Invalid filter.");
  }

  let news;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYear(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p> No news Found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  // const links = getAvailableNewsYears();
  return (
    <>
      <header id="archive-header">
        <h1>Archive Page</h1>
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
  // const news = getNewsForYear(newsYear);
  // return <NewsList news={news} />;
}

export default FilteredNewsPage;
