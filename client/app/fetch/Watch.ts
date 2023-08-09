const getWatches = async () => {
  const res = await fetch('http://localhost:7000/api/watches');
  const watches = await res.json();
  return watches;
};

export { getWatches };