export default function Image({ id }: { id: number }) {
  return (
    <section>
      <div>
        <img src={`/${id}.jpg`} alt="image" />
      </div>
      <h2>{`#00${id}`}</h2>
    </section>
  );
}
