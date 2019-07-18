export default function Index({ testing }) {
  const handleClick = e => {
    console.log("Handle click");
  };
  return (
    <section>
      <h1>Testing Build Error with Now Dev</h1>
      <button onClick={handleClick}>Test API</button>
    </section>
  );
}
