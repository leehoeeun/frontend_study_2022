function ReClock() {
  console.log('째깍째깍!');
  return (
    <div>
      <h1>안녕</h1>
      <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

export default ReClock;