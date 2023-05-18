import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as c from "../../styles/common";
import * as s from "../../styles/newVenue";
import { useNavigate } from "react-router-dom";
import callApi from "../../utils/apiCall";
import url from "../../utils/urls/specific";

function App(props) {
  const [venue, setVenue] = useState({});
  const [general, setGeneral] = useState(false);
  const [details, setDetails] = useState(false);
  const [location, setLocation] = useState(false);
  const [images, setImages] = useState([]);
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const findVenue = props.data.find((item) => item.id === props.id);
    setVenue(findVenue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  useEffect(() => {
    setImages(venue?.media);
  }, [venue]);
  function toggleGeneral(e) {
    e.preventDefault();
    setGeneral(!general);
  }

  function toggleDetails(e) {
    e.preventDefault();
    setDetails(!details);
  }

  function handleAddToGallery(e) {
    e.preventDefault();
    setImages([...images, image]);
    setImage("");
  }

  function handleRemove(e, i) {
    e.preventDefault();
    const newImages = [...images];
    newImages.splice(i, 1);
    setImages(newImages);
  }

  function toggleLocation(e) {
    e.preventDefault();
    setLocation(!location);
  }

  async function submitted(data) {
    const endpoint = url + props.id;
    const body = {
      name: data.name,
      description: data.description,
      media: images,
      price: Number(data.price),
      maxGuests: Number(data.guests),
      rating: Number(data.rating),
      meta: {
        wifi: data.meta.wifi === "true" ? true : false,
        parking: data.meta.parking === "true" ? true : false,
        breakfast: data.meta.breakfast === "true" ? true : false,
        pets: data.meta.pets === "true" ? true : false,
      },
    };
    const result = await callApi(endpoint, "PUT", body);
    if (result?.errors) {
      console.log(result);
    } else {
      navigate("/specific/" + result.id);
    }
  }

  useEffect(() => {
    if (
      errors?.name?.message?.length > 1 ||
      errors?.price?.message?.length > 1 ||
      errors?.guests?.message?.length > 1 ||
      errors?.rating?.message?.length > 1 ||
      errors?.description?.message?.length > 1
    ) {
      setGeneral(true);
      setDetails(true);
    }
  }, [errors]);

  return (
    <>
      <s.Form onSubmit={handleSubmit((data) => submitted(data))}>
        <s.Margin>
          <s.DropdownButton onClick={(e) => toggleGeneral(e)} open={general}>
            <p>General information</p>
            <span className="material-symbols-outlined">expand_more</span>
          </s.DropdownButton>
          <s.DropdownContainer show={general}>
            {errors?.name?.message?.length > 1 ? (
              <p className="error">{errors?.name?.message}</p>
            ) : null}
            <s.Label htmlFor="name">Venue name</s.Label>
            <c.StandardInput
              type="text"
              placeholder="Venue name"
              id="name"
              defaultValue={venue?.name}
              {...register("name", {
                required: "Please enter a venue name",
                minLength: {
                  value: 3,
                  message: "Venue name must be at least 3 characters long",
                },
                maxLength: {
                  value: 30,
                  message: "Venue name must be less than 30 characters long",
                },
              })}
            />
            {errors?.price?.message?.length > 1 ? (
              <p className="error">{errors?.price?.message}</p>
            ) : null}
            <s.Label htmlFor="price">Price per night</s.Label>
            <c.StandardInput
              type="number"
              placeholder="Price per night"
              id="price"
              defaultValue={venue?.price}
              {...register("price", {
                required: "Please enter a price per night",
                min: {
                  value: 1,
                  message: "Price per night must be at least 1$",
                },
              })}
            />
            {errors?.guests?.message?.length > 1 ? (
              <p className="error">{errors?.guests?.message}</p>
            ) : null}
            <s.Label htmlFor="guests">Max number of guests</s.Label>
            <c.StandardInput
              type="number"
              placeholder="Max number of guests"
              id="guests"
              defaultValue={venue?.maxGuests}
              {...register("guests", {
                required: "Please enter a max number of guests",
                min: {
                  value: 1,
                  message: "Max number of guests must be at least 1",
                },
              })}
            />
            {errors?.rating?.message?.length > 1 ? (
              <p className="error">{errors?.rating?.message}</p>
            ) : null}
            <s.Label htmlFor="rating">Venue rating</s.Label>
            <c.StandardInput
              type="number"
              placeholder="Rating out of 5"
              id="rating"
              defaultValue={venue?.rating}
              {...register("rating", {
                required: "Please enter a rating",
                min: {
                  value: 0,
                  message: "Rating must be at least 0",
                },
                max: {
                  value: 5,
                  message: "Rating cannot be more than 5",
                },
              })}
            />
          </s.DropdownContainer>
        </s.Margin>
        <s.Margin>
          <s.DropdownButton onClick={(e) => toggleDetails(e)} open={details}>
            <p>Details</p>
            <span className="material-symbols-outlined">expand_more</span>
          </s.DropdownButton>
          <s.DropdownContainer show={details}>
            {errors?.description?.message?.length > 1 ? (
              <p className="error">{errors?.description?.message}</p>
            ) : null}
            <s.Label htmlFor="description">Description</s.Label>
            <s.TextArea
              placeholder="Description"
              id="description"
              defaultValue={venue?.description}
              {...register("description", {
                required: "Please enter a description",
                minLength: {
                  value: 10,
                  message: "Description must be at least 10 characters long",
                },
                maxLength: {
                  value: 1000,
                  message: "Description must be less than 1000 characters long",
                },
              })}
            />
            <s.Margin className="included">
              <s.Label htmlFor="included">Perks</s.Label>
              <div className="checkboxes">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="wifi"
                    value={true}
                    defaultChecked={venue?.meta?.wifi}
                    {...register("meta.wifi")}
                  />
                  <label htmlFor="wifi">Wifi</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="parking"
                    value={true}
                    defaultChecked={venue?.meta?.parking}
                    {...register("meta.parking")}
                  />
                  <label htmlFor="parking">Parking</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="breakfast"
                    value={true}
                    defaultChecked={venue?.meta?.breakfast}
                    {...register("meta.breakfast")}
                  />
                  <label htmlFor="breakfast">Breakfast</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="pets"
                    value={true}
                    defaultChecked={venue?.meta?.pets}
                    {...register("meta.pets")}
                  />
                  <label htmlFor="pets">Pets allowed</label>
                </div>
              </div>
            </s.Margin>
            <s.Label htmlFor="media">Media</s.Label>
            <c.StandardInput
              type="text"
              placeholder="Media"
              id="media"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <s.GalleryContainer>
              <c.PrimaryButton onClick={(e) => handleAddToGallery(e)}>
                Add image to gallery
              </c.PrimaryButton>
              <div className="image-gallery">
                {images?.map((image, i) => (
                  <div
                    className="image-container"
                    id={`image${i}`}
                    key={`image${i}`}
                  >
                    <img src={image} alt="venue" />
                    <div className="image-overlay">
                      <c.CleanButton onClick={(e) => handleRemove(e, i)}>
                        X
                      </c.CleanButton>
                    </div>
                  </div>
                ))}
              </div>
            </s.GalleryContainer>
          </s.DropdownContainer>
        </s.Margin>
        <s.Margin>
          <s.DropdownButton onClick={(e) => toggleLocation(e)} open={location}>
            <p>Location</p>
            <span className="material-symbols-outlined">expand_more</span>
          </s.DropdownButton>
          <s.DropdownContainer show={location}>
            <s.Label htmlFor="address">Address</s.Label>
            <c.StandardInput
              type="text"
              placeholder="Address(Optional)"
              id="address"
              defaultValue={venue?.location?.address}
              {...register("address")}
            />
            <s.Label htmlFor="city">City</s.Label>
            <c.StandardInput
              type="text"
              placeholder="City(Optional)"
              id="city"
              defaultValue={venue?.location?.city}
              {...register("city")}
            />
            <s.Label htmlFor="zip">Zip code</s.Label>
            <c.StandardInput
              type="text"
              placeholder="Zip code(Optional)"
              id="zip"
              defaultValue={venue?.location?.zip}
              {...register("zip")}
            />
            <s.Label htmlFor="country">Country</s.Label>
            <c.StandardInput
              type="text"
              placeholder="Country(Optional)"
              id="country"
              defaultValue={venue?.location?.country}
              {...register("country")}
            />
            <s.Label htmlFor="continent">Continent</s.Label>
            <c.StandardInput
              type="text"
              placeholder="Continent(Optional)"
              id="continent"
              defaultValue={venue?.location?.continent}
              {...register("continent")}
            />
          </s.DropdownContainer>
        </s.Margin>
        <s.Margin>
          <c.PrimaryButton>Submit</c.PrimaryButton>
        </s.Margin>
      </s.Form>
    </>
  );
}

export default App;
