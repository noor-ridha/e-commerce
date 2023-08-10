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

const getSingleWatch = async (id: string) => {
  const res = fetch(`http://localhost:7000/api/watches/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const watch: object = await (await res).json();

  return watch;
};

export { getWatches, getSingleWatch };