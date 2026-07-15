function Ornament({ small }) {
  const w = small ? 30 : 50;
  const d = small ? { width: 4, height: 4 } : null;
  return (
    <div className="ornament my-4">
      <div className="ornament-line" style={{ width: w }} />
      <div className="ornament-diamond" style={d} />
      <div className="ornament-line" style={{ width: w }} />
    </div>
  );
}

export default Ornament;
