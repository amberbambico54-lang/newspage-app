import NewsList from "@/components/NewsList";
import { getNewsForYear } from "@/lib/news";

async function FilteredNewsPage({ params }) {
  const { year: newsYear } = await params;
  const news = getNewsForYear(newsYear);
  return <NewsList news={news} />;
}

export default FilteredNewsPage;
