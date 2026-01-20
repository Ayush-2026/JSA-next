export default async function DepartmentDetail({ params }) {
  const { lang, slug } = await params;

  return (
    <div style={{ padding: 20 }}>
      OK – lang: <b>{lang}</b>
      <br />
      OK – slug: <b>{slug}</b>
    </div>
  );
}
