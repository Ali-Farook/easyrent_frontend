import React, { useEffect, useState } from "react";
import "./style.css";
import Navbar from "../../Components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { createAdd, uploadHero } from "../../services/ApiList";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";

function PlaceAdd() {
  const navigate = useNavigate();
  const [heroImage, setHeroImage] = useState(null);
  const [previewHeroImage, setpreviewHeroImageHeroImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [add, setAdd] = useState({
    title: '',
    size: '',
    phoneNumber: '',
    propertyType: '',
    saleType: '',
    price: '',
    address: '',
    heroImage: '',
  });

  // const [images, setImages] = useState([]);
  // const [previewImages, setpreviewImages] = useState([]);

  const onChange = (e) => {
    setAdd({ ...add, [e.target.name]: e.target.value });
  };

  const handleFileChangeHero = (event) => {
    const file = event.target.files[0];
    setHeroImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setpreviewHeroImageHeroImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // const handleFileChanges = (event) => {
  //   const files = Array.from(event.target.files);
  //   setImages(files);

  //   const previewUrls = files.map((file) => {
  //     return URL.createObjectURL(file);
  //   });
  //   setpreviewImages(previewUrls);
  // };

  const checkToken = () => {
    const token = localStorage.getItem('@token');
    if (!token) {
      navigate('/register', { replace: true });
    }
  };

  const onSubmitAdd = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await uploadHero({ heroImage: heroImage });
    const imageURL = res.data.image;
    const body = {
      title: add.title,
      size: Number(add.size),
      phoneNumber: add.phoneNumber,
      propertyType: add.propertyType,
      saleType: add.saleType,
      price: Number(add.price),
      address: add.address,
      heroImage: imageURL,
    }
    const response = await createAdd(body);
    // console.log('createAdd===>', response.data);
    setLoading(false);

    if (response.data.success) {
      toast.success(response.data.message, {
        position: "top-right"
      });
      setAdd({
        title: '',
        size: '',
        phoneNumber: '',
        propertyType: '',
        saleType: '',
        price: '',
        address: '',
        heroImage: '',
      });
      setpreviewHeroImageHeroImage('');
      setHeroImage('');
    } else {
      toast.error(response.data.message, {
        position: "top-right"
      });
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <div className="form-container">
      <Navbar />
      <h2>Add Property</h2>
      <form className="form" onSubmit={onSubmitAdd}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={add.title}
            name="title"
            onChange={onChange}
            placeholder="Enter your title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={add.price}
            onChange={onChange}
            placeholder="Enter your price"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Hero Image</label>
          <input
            type="file"
            accept="image/*"
            required
            onChange={handleFileChangeHero}
          />
        </div>

        {previewHeroImage && (
          <img
            src={previewHeroImage}
            alt="previewHeroImage"
            style={{ marginTop: "20px", maxWidth: "300px" }}
          />
        )}

        {/* <div className="form-group">
          <label htmlFor="size">Other Images</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChanges}
          />

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {previewImages.map((preview, index) => (
              <img
                key={index}
                src={preview}
                alt={`Preview ${index}`}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  border: "1px solid #ccc",
                }}
              />
            ))}
          </div>
        </div> */}

        <div className="form-group">
          <label htmlFor="size">House Size (in Marla)</label>
          <input
            type="number"
            id="size"
            name="size"
            value={add.size}
            onChange={onChange}
            placeholder="Enter house size in Marla"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={add.phoneNumber}
            onChange={onChange}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={add.address}
            onChange={onChange}
            placeholder="Enter the property address"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="saleType">Transaction Type</label>
          <select id="saleType" name="saleType" value={add.saleType} required onChange={onChange}>
            <option value="">Rent or Sale</option>
            <option value="Rent">Rent</option>
            <option value="Buy">Sale</option>
          </select>
        </div>

        <div className="form-group" style={{ marginTop: 20 }}>
          <label htmlFor="propertyType">Property Type</label>
          <select id="propertyType" name="propertyType" value={add.propertyType} required onChange={onChange}>
            <option value="">Select Property Type</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
          </select>
        </div>

        <div className="form-action">
          <button className="submit-btn" style={{ width: 150, height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' }} type="submit">
            <Oval
              visible={loading}
              height="30"
              width="30"
              color="#fff"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperclassName=""
            />
            {loading ? '' : 'Add Property'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlaceAdd;
