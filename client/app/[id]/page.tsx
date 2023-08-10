const getAWatch = async (id: string) => {
  const res = fetch(`http://localhost:7000/api/watches/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const watch: object = await (await res).json();

  return watch;
};

const Page = async ({ params }: { params: { id: string } }) => {
  const watch = await getAWatch(params.id);

  console.log(watch);
  return <div>My Post: {params.id}</div>;
};

export default Page;
