const getWatches: () => Promise<any[]> = async () => {
  const res: Response = await fetch('http://localhost:7000/api/watches');
  const watches: Array<any> = await res.json();
  return watches;
};

export { getWatches };