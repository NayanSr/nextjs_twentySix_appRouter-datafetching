import Products from "@/components/UI/Products";

/* export const getData = async () => {
  const res = await fetch("http://localhost:5000/watches", {
    cache: "force-cache",
  });
  const data = await res.json();
  return data;
}; */

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/watches", {
    cache: "force-cache",
    next: { revalidate: 5 }, //! ISRS
  });
  const data = await res.json();
  // console.log(data);
  // const data = await getData();
  return (
    <div>
      <h1 className="text-4xl text-center my-10">Welcome To Watch Gallery</h1>
      <div className="col-span-9 grid grid-cols-3 gap-5 p-10 w-[80%] mx-auto">
        {data.map((pd) => (
          <Products key={pd.id} product={pd} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
