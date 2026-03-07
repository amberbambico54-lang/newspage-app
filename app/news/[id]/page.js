async function NewsDetailPage({ params }) {
  const { id: newsID } = await params;
  console.log(newsID);
  return (
    <div>
      Hello
      <p>news ID:{newsID}</p>
    </div>
  );
}

export default NewsDetailPage;
