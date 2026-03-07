import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

async function NewsDetailPage({ params }) {
  const { id: newsSlug } = await params;
  const newsItem = DUMMY_NEWS.find((news) => news.id === newsSlug);

  if (!newsItem) {
    notFound();
  }

  console.log(newsSlug);
  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title} />
        <h1>{newsItem?.title}</h1>
        <time dateTime={newsItem?.date}>{newsItem?.date}</time>
      </header>
      <p>{newsItem?.content}</p>
      <p>news ID:{newsSlug}</p>
    </article>
  );
}

export default NewsDetailPage;
