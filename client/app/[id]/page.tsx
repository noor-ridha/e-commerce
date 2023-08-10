import { getSingleWatch } from '../fetch/Watch';

const Page = async ({ params }: { params: { id: string } }) => {
  const watch = await getSingleWatch(params.id);

  console.log(watch);
  return <div>My Post: {params.id}</div>;
};

export default Page;
