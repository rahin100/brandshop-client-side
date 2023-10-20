import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const allData = useLoaderData();
  console.log(allData);

  const handleUpdateProduct = (event) => {
    event.preventDefault();

    const form = event.target;

    const image = form.image.value;
    const name = form.name.value;
    const brandname = form.brandname.value;
    const type = form.type.value;
    const price = form.price.value;
    const shortdescription = form.shortdescription.value;
    const rating = form.rating.value;

    const UpdateProduct = {
      image,
      name,
      brandname,
      type,
      price,
      shortdescription,
      rating,
    };

    console.log(UpdateProduct);


    // update data to server
    fetch(`http://localhost:5000/cart/${allData._id}`,{
      method:"PUT",
      headers: {
        "content-type": "application/json"
      },
      body:JSON.stringify(UpdateProduct)

    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
        toast.success('Successfully data updated!')
      }
    })


  };
 

  return (
    <div>
      <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold">Update Product</h2>
        <form onSubmit={handleUpdateProduct}>
          {/* form name and quantity row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="image"
                  defaultValue={allData?.image}
                  placeholder="Image"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={allData?.name}
                  placeholder="Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form supplier row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="brandname"
                  defaultValue={allData?.brandname}
                  placeholder="Brand Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <label className="input-group">
                <select name="type" className="select select-bordered w-full">
                  <option value="type">Type</option>
                  <option value="footwear">FootWear</option>
                  <option value="fashion">Fashion</option>
                  <option value="apparel">Apparel</option>
                  {/* Add more brand options here */}
                </select>
              </label>
            </div>
          </div>
          {/* form category and details row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="price"
                  defaultValue={allData?.price}
                  placeholder="price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="shortdescription"
                  defaultValue={allData?.shortdescription}
                  placeholder="Short Description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form Photo url row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="rating"
                  defaultValue={allData?.rating}
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update Product"
            className="btn btn-primary btn-block"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
