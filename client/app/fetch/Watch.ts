const getWatches: () => Promise<any[]> = async () => {
  try {
    const res: Response = await fetch('http://localhost:7000/api/watches');
    const watches: Array<any> = await res.json();
    return watches;
  }
  catch (err) {
    console.log(err);
    return [];
  }
};

export { getWatches };