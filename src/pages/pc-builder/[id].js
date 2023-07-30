const BuildProductPage = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {data?.map((product, idx) => (
        <div key={idx} className="card  shadow-xl">
          <figure>
            <img src={product?.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product?.product_name}</h2>

            <p>{product?.category}</p>
            <p>{product?.status}</p>
            <p>{product?.price}</p>
            <p>{product?.average_rating}</p>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">Add To Builder</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BuildProductPage;

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/catagories/${params.id}`);
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};
