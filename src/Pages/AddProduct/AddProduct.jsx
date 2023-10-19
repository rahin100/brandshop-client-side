import { useState } from "react";


const AddProduct = () => {
  const [productData, setProductData] = useState({
    image: '',
    name: '',
    brandName: '',
    type: '',
    price: 0,
    shortDescription: '',
    rating: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send productData to the server for processing and storage
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  return (
    <div className="p-4 bg-[#F5F5DC]">
      <h2 className="text-2xl mb-4">Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="form-control">
            <label htmlFor="image">Image:</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="form-control">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="form-control">
            <label htmlFor="brandName">Brand Name:</label>
            <input
              type="text"
              name="brandName"
              value={productData.brandName}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="form-control">
            <label htmlFor="type">Type:</label>
            <select
              name="type"
              value={productData.type}
              onChange={handleChange}
              className="select input"
            >
              <option value="">Select Type</option>
              <option value="phone">Phone</option>
              <option value="computer">Computer</option>
              <option value="headphone">Headphone</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              name="price"
              value={productData.price}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="form-control">
            <label htmlFor="shortDescription">Short Description:</label>
            <textarea
              name="shortDescription"
              value={productData.shortDescription}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="form-control">
            <label htmlFor="rating">Rating:</label>
            <input
              type="number"
              name="rating"
              value={productData.rating}
              onChange={handleChange}
              className="input"
            />
          </div>
        </div>
        <div className="mt-4">
          <button type="submit" className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
