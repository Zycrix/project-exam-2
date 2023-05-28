import React, { useState, useEffect } from "react";
import * as c from "../../styles/common";
import * as s from "../../styles/newVenue";
import { useNavigate } from "react-router-dom";
import callApi from "../../utils/apiCall";
import url from "../../utils/urls/specific";

/**
 * Function that allows the user to edit a venue
 * @param {array} props.data Array that contains all the users venues
 * @param {string} props.id String that contains the venue ID
 * @returns The edit venue form component
 */
function App(props) {
  const [venue, setVenue] = useState({});
  const [general, setGeneral] = useState(false);
  const [details, setDetails] = useState(false);
  const [location, setLocation] = useState(false);
  const [images, setImages] = useState([]);
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  //Find the venue to edit based on the ID
  useEffect(() => {
    const findVenue = props.data.find((item) => item.id === props.id);
    setVenue(findVenue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  const [data, setData] = useState({
    name: venue?.name,
    price: venue?.price,
    guests: venue?.maxGuests,
    rating: venue?.rating,
    description: venue?.description,
    meta: {
      wifi: venue?.meta?.wifi,
      parking: venue?.meta?.parking,
      breakfast: venue?.meta?.breakfast,
      pets: venue?.meta?.pets,
    },
    location: {
      address: venue?.location?.address,
      city: venue?.location?.city,
      country: venue?.location?.country,
      zip: venue?.location?.zip,
      continent: venue?.location?.continent,
    },
  });
  //Set the images
  useEffect(() => {
    setImages(venue?.media);
    setData({
      ...data,
      name: venue?.name,
      price: venue?.price,
      guests: venue?.maxGuests,
      rating: venue?.rating,
      description: venue?.description,
      meta: {
        wifi: venue?.meta?.wifi,
        parking: venue?.meta?.parking,
        breakfast: venue?.meta?.breakfast,
        pets: venue?.meta?.pets,
      },
      location: {
        address: venue?.location?.address,
        city: venue?.location?.city,
        country: venue?.location?.country,
        zip: venue?.location?.zip,
        continent: venue?.location?.continent,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [venue]);

  //Toggle the general section
  function toggleGeneral(e) {
    e.preventDefault();
    setGeneral(!general);
  }

  //Toggle the details section
  function toggleDetails(e) {
    e.preventDefault();
    setDetails(!details);
  }

  //Handle adding images to the gallery for preview
  function handleAddToGallery(e) {
    e.preventDefault();
    setImages([...images, image]);
    setImage("");
  }

  //Handle removing images from the gallery
  function handleRemove(e, i) {
    e.preventDefault();
    const newImages = [...images];
    newImages.splice(i, 1);
    setImages(newImages);
  }

  //Toggle location section
  function toggleLocation(e) {
    e.preventDefault();
    setLocation(!location);
  }

  //Submit the form
  async function submitted(e) {
    e.preventDefault();
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
      location: {
        address: data.location.address,
        city: data.location.city,
        country: data.location.country,
        zip: data.location.zip,
        continent: data.location.continent,
      },
    };
    const result = await callApi(endpoint, "PUT", body);
    if (result?.errors) {
      console.log(result);
    } else {
      navigate("/specific/" + result.id);
    }
  }

  return (
    <>
      <s.Form onSubmit={(e) => submitted(e)}>
        <s.Margin>
          <s.DropdownButton onClick={(e) => toggleGeneral(e)} open={general}>
            <p>General information</p>
            <span className="material-symbols-outlined">expand_more</span>
          </s.DropdownButton>
          <s.DropdownContainer show={general}>
            <s.Label htmlFor="name">Venue name</s.Label>
            <c.StandardInput
              type="text"
              placeholder="Venue name"
              id="name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <s.Label htmlFor="price">Price per night</s.Label>
            <c.StandardInput
              type="number"
              placeholder="Price per night"
              id="price"
              value={data.price}
              onChange={(e) => setData({ ...data, price: e.target.value })}
            />
            <s.Label htmlFor="guests">Max number of guests</s.Label>
            <c.StandardInput
              type="number"
              placeholder="Max number of guests"
              id="guests"
              value={data.guests}
              onChange={(e) => setData({ ...data, guests: e.target.value })}
            />
            <s.Label htmlFor="rating">Venue rating</s.Label>
            <c.StandardInput
              type="number"
              placeholder="Rating out of 5"
              id="rating"
              value={data.rating}
              onChange={(e) => setData({ ...data, rating: e.target.value })}
            />
          </s.DropdownContainer>
        </s.Margin>
        <s.Margin>
          <s.DropdownButton onClick={(e) => toggleDetails(e)} open={details}>
            <p>Details</p>
            <span className="material-symbols-outlined">expand_more</span>
          </s.DropdownButton>
          <s.DropdownContainer show={details}>
            <s.Label htmlFor="description">Description</s.Label>
            <s.TextArea
              placeholder="Description"
              id="description"
              value={data.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            />
            <s.Margin className="included">
              <s.Label htmlFor="included">Perks</s.Label>
              <div className="checkboxes">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="wifi"
                    value={true}
                    defaultChecked={data.meta.wifi}
                    onChange={(e) =>
                      setData({
                        ...data,
                        meta: { ...data.meta, wifi: e.target.value },
                      })
                    }
                  />
                  <label htmlFor="wifi">Wifi</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="parking"
                    value={true}
                    defaultChecked={data.meta.parking}
                    onChange={(e) =>
                      setData({
                        ...data,
                        meta: { ...data.meta, parking: e.target.value },
                      })
                    }
                  />
                  <label htmlFor="parking">Parking</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="breakfast"
                    value={true}
                    defaultChecked={data.meta.breakfast}
                    onChange={(e) =>
                      setData({
                        ...data,
                        meta: { ...data.meta, breakfast: e.target.value },
                      })
                    }
                  />
                  <label htmlFor="breakfast">Breakfast</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="pets"
                    value={true}
                    defaultChecked={data.meta.pets}
                    onChange={(e) =>
                      setData({
                        ...data,
                        meta: { ...data.meta, pets: e.target.value },
                      })
                    }
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
              value={data.location.address}
              onChange={(e) =>
                setData({
                  ...data,
                  location: { ...data.location, address: e.target.value },
                })
              }
            />
            <s.Label htmlFor="city">City</s.Label>
            <c.StandardInput
              type="text"
              placeholder="City(Optional)"
              id="city"
              value={data.location.city}
              onChange={(e) =>
                setData({
                  ...data,
                  location: { ...data.location, city: e.target.value },
                })
              }
            />
            <s.Label htmlFor="zip">Zip code</s.Label>
            <c.StandardInput
              type="text"
              placeholder="Zip code(Optional)"
              id="zip"
              value={data.location.zip}
              onChange={(e) =>
                setData({
                  ...data,
                  location: { ...data.location, zip: e.target.value },
                })
              }
            />
            <s.Label htmlFor="country">Country</s.Label>
            <c.StandardInput
              type="text"
              placeholder="Country(Optional)"
              id="country"
              value={data.location.country}
              onChange={(e) =>
                setData({
                  ...data,
                  location: { ...data.location, country: e.target.value },
                })
              }
            />
            <s.Label htmlFor="continent">Continent</s.Label>
            <c.StandardInput
              type="text"
              placeholder="Continent(Optional)"
              id="continent"
              value={data.location.continent}
              onChange={(e) =>
                setData({
                  ...data,
                  location: { ...data.location, continent: e.target.value },
                })
              }
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
