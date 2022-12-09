function StarCounter({ starCount, increment, decrement }) {
  console.log('starCounter', starCount)
    return (
    <div>
      <button onClick={decrement}>Less</button>
      <button onClick={increment}>More</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {Array(starCount)
          .fill()
          .map((_, i) => {
            return ('⭐️');
          })}
      </div>
    </div>
  );
}

export default StarCounter;
