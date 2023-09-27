import React, { useState } from "react";
import "./BrowseCarousel.css";

function BrowseCarousel() {
  const [activeTab, setActiveTab] = useState("category"); // Track the active tab
  const [dropdownContent, setDropdownContent] = useState([]); // Store the dropdown content

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "make") {
      setDropdownContent(makeData);
    } else {
      // Clear the dropdown content for other tabs
      setDropdownContent([]);
    }
  };

  const categories = [
    {
      id: 1,
      title: "Family Cars",
      image:
        "https://wsa4.pakwheels.com/assets/browse-more/car-ctg-family-cars-078acff5b2ef6aa9c056f6bade993f30.svg",
    },
    {
      id: 2,
      title: "Automatic cars",
      image:
        "https://wsa2.pakwheels.com/assets/browse-more/car-ctg-automatic-bf29d6ed2c67432d0afa6a4cca8e6e5a.svg",
    },
    {
      id: 1,
      title: "Family Cars",
      image:
        "https://wsa4.pakwheels.com/assets/browse-more/car-ctg-family-cars-078acff5b2ef6aa9c056f6bade993f30.svg",
    },
    {
      id: 2,
      title: "Automatic cars",
      image:
        "https://wsa2.pakwheels.com/assets/browse-more/car-ctg-automatic-bf29d6ed2c67432d0afa6a4cca8e6e5a.svg",
    },
    {
      id: 1,
      title: "Family Cars",
      image:
        "https://wsa4.pakwheels.com/assets/browse-more/car-ctg-family-cars-078acff5b2ef6aa9c056f6bade993f30.svg",
    },
    {
      id: 2,
      title: "Automatic cars",
      image:
        "https://wsa2.pakwheels.com/assets/browse-more/car-ctg-automatic-bf29d6ed2c67432d0afa6a4cca8e6e5a.svg",
    },
    {
      id: 1,
      title: "Family Cars",
      image:
        "https://wsa4.pakwheels.com/assets/browse-more/car-ctg-family-cars-078acff5b2ef6aa9c056f6bade993f30.svg",
    },
    {
      id: 2,
      title: "Automatic cars",
      image:
        "https://wsa2.pakwheels.com/assets/browse-more/car-ctg-automatic-bf29d6ed2c67432d0afa6a4cca8e6e5a.svg",
    },
    {
      id: 1,
      title: "Family Cars",
      image:
        "https://wsa4.pakwheels.com/assets/browse-more/car-ctg-family-cars-078acff5b2ef6aa9c056f6bade993f30.svg",
    },
    {
      id: 2,
      title: "Automatic cars",
      image:
        "https://wsa2.pakwheels.com/assets/browse-more/car-ctg-automatic-bf29d6ed2c67432d0afa6a4cca8e6e5a.svg",
    },
    {
      id: 1,
      title: "Family Cars",
      image:
        "https://wsa4.pakwheels.com/assets/browse-more/car-ctg-family-cars-078acff5b2ef6aa9c056f6bade993f30.svg",
    },
    {
      id: 2,
      title: "Automatic cars",
      image:
        "https://wsa2.pakwheels.com/assets/browse-more/car-ctg-automatic-bf29d6ed2c67432d0afa6a4cca8e6e5a.svg",
    },
    {
      id: 1,
      title: "Family Cars",
      image:
        "https://wsa4.pakwheels.com/assets/browse-more/car-ctg-family-cars-078acff5b2ef6aa9c056f6bade993f30.svg",
    },
    {
      id: 2,
      title: "Automatic cars",
      image:
        "https://wsa2.pakwheels.com/assets/browse-more/car-ctg-automatic-bf29d6ed2c67432d0afa6a4cca8e6e5a.svg",
    },
    {
      id: 1,
      title: "Family Cars",
      image:
        "https://wsa4.pakwheels.com/assets/browse-more/car-ctg-family-cars-078acff5b2ef6aa9c056f6bade993f30.svg",
    },
    {
      id: 2,
      title: "Automatic cars",
      image:
        "https://wsa2.pakwheels.com/assets/browse-more/car-ctg-automatic-bf29d6ed2c67432d0afa6a4cca8e6e5a.svg",
    },
    {
      id: 1,
      title: "Family Cars",
      image:
        "https://wsa4.pakwheels.com/assets/browse-more/car-ctg-family-cars-078acff5b2ef6aa9c056f6bade993f30.svg",
    },
    {
      id: 2,
      title: "Automatic cars",
      image:
        "https://wsa2.pakwheels.com/assets/browse-more/car-ctg-automatic-bf29d6ed2c67432d0afa6a4cca8e6e5a.svg",
    },
    {
      id: 1,
      title: "Family Cars",
      image:
        "https://wsa4.pakwheels.com/assets/browse-more/car-ctg-family-cars-078acff5b2ef6aa9c056f6bade993f30.svg",
    },
    {
      id: 2,
      title: "Automatic cars",
      image:
        "https://wsa2.pakwheels.com/assets/browse-more/car-ctg-automatic-bf29d6ed2c67432d0afa6a4cca8e6e5a.svg",
    },
    // Add more categories as needed
  ];

  const makeData = [
    {
      id: 1,
      title: "BMW",
      image:
        "https://cache1.pakwheels.com/system/car_manufacturers/manufacturers/000/000/003/resized/BMW.png",
    },
    {
      id: 1,
      title: "Audi",
      image:
        "https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/053/resized/Audi.png",
    },
    {
      id: 1,
      title: "BMW",
      image:
        "https://cache1.pakwheels.com/system/car_manufacturers/manufacturers/000/000/003/resized/BMW.png",
    },
    {
      id: 1,
      title: "Audi",
      image:
        "https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/053/resized/Audi.png",
    },
    {
      id: 1,
      title: "BMW",
      image:
        "https://cache1.pakwheels.com/system/car_manufacturers/manufacturers/000/000/003/resized/BMW.png",
    },
    {
      id: 1,
      title: "Audi",
      image:
        "https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/053/resized/Audi.png",
    },
    {
      id: 1,
      title: "BMW",
      image:
        "https://cache1.pakwheels.com/system/car_manufacturers/manufacturers/000/000/003/resized/BMW.png",
    },
    {
      id: 1,
      title: "Audi",
      image:
        "https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/053/resized/Audi.png",
    },
    {
      id: 1,
      title: "BMW",
      image:
        "https://cache1.pakwheels.com/system/car_manufacturers/manufacturers/000/000/003/resized/BMW.png",
    },
    {
      id: 1,
      title: "Audi",
      image:
        "https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/053/resized/Audi.png",
    },
    {
      id: 1,
      title: "BMW",
      image:
        "https://cache1.pakwheels.com/system/car_manufacturers/manufacturers/000/000/003/resized/BMW.png",
    },
    {
      id: 1,
      title: "Audi",
      image:
        "https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/053/resized/Audi.png",
    },
    {
      id: 1,
      title: "BMW",
      image:
        "https://cache1.pakwheels.com/system/car_manufacturers/manufacturers/000/000/003/resized/BMW.png",
    },
    {
      id: 1,
      title: "Audi",
      image:
        "https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/053/resized/Audi.png",
    },
    {
      id: 1,
      title: "BMW",
      image:
        "https://cache1.pakwheels.com/system/car_manufacturers/manufacturers/000/000/003/resized/BMW.png",
    },
    {
      id: 1,
      title: "Audi",
      image:
        "https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/053/resized/Audi.png",
    },
    {
      id: 1,
      title: "BMW",
      image:
        "https://cache1.pakwheels.com/system/car_manufacturers/manufacturers/000/000/003/resized/BMW.png",
    },
    {
      id: 1,
      title: "Audi",
      image:
        "https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/053/resized/Audi.png",
    },
    {
      id: 1,
      title: "BMW",
      image:
        "https://cache1.pakwheels.com/system/car_manufacturers/manufacturers/000/000/003/resized/BMW.png",
    },
    {
      id: 1,
      title: "Audi",
      image:
        "https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/053/resized/Audi.png",
    },
    // Add more make data as needed
  ];

  const bodytypeData = [
    {
      id: 1,
      title: "SUV",
      image:
        "https://cache1.pakwheels.com/system/car_manufacturers/manufacturers/000/000/003/resized/BMW.png",
    },
    {
      id: 1,
      title: "Hatchback",
      image:
        "https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/053/resized/Audi.png",
    },
    {
      id: 1,
      title: "SUV",
      image:
        "https://cache1.pakwheels.com/system/car_manufacturers/manufacturers/000/000/003/resized/BMW.png",
    },
    {
      id: 1,
      title: "Hatchback",
      image:
        "https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/053/resized/Audi.png",
    },
    {
      id: 1,
      title: "SUV",
      image:
        "https://cache1.pakwheels.com/system/car_manufacturers/manufacturers/000/000/003/resized/BMW.png",
    },
    {
      id: 1,
      title: "Hatchback",
      image:
        "https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/053/resized/Audi.png",
    },
    {
      id: 1,
      title: "SUV",
      image:
        "https://cache1.pakwheels.com/system/car_manufacturers/manufacturers/000/000/003/resized/BMW.png",
    },
    {
      id: 1,
      title: "Hatchback",
      image:
        "https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/053/resized/Audi.png",
    },
    {
      id: 1,
      title: "SUV",
      image:
        "https://cache1.pakwheels.com/system/car_manufacturers/manufacturers/000/000/003/resized/BMW.png",
    },
    {
      id: 1,
      title: "Hatchback",
      image:
        "https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/053/resized/Audi.png",
    },
    {
      id: 1,
      title: "SUV",
      image:
        "https://cache1.pakwheels.com/system/car_manufacturers/manufacturers/000/000/003/resized/BMW.png",
    },
    {
      id: 1,
      title: "Hatchback",
      image:
        "https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/053/resized/Audi.png",
    },
    {
      id: 1,
      title: "SUV",
      image:
        "https://cache1.pakwheels.com/system/car_manufacturers/manufacturers/000/000/003/resized/BMW.png",
    },
    {
      id: 1,
      title: "Hatchback",
      image:
        "https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/053/resized/Audi.png",
    },
    // Add more make data as needed
  ];
  // Split categories into two sets, each containing 12 categories
  const splitData = (data) => {
    const sets = [];
    for (let i = 0; i < data.length; i += 12) {
      sets.push(data.slice(i, i + 12));
    }
    return sets;
  };

  const categorySets = splitData(categories);
  const makeSets = splitData(makeData);
  const bodytypeSets = splitData(bodytypeData);

  return (
    <div>
      <div className="container ">
        <div className="nav-tabs-main mb20">
          <ul className="nav nav-tabs">
            <li
              className={`nav-item ${activeTab === "category" ? "active" : ""}`}
            >
              <button
                className="nav-link focus"
                onClick={() => handleTabClick("category")}
                style={{ textDecoration: "underline" }}
              >
                Category
              </button>
            </li>
            <li className={`nav-item ${activeTab === "city" ? "active" : ""}`}>
              <button
                className="nav-link focus"
                onClick={() => handleTabClick("city")}
                style={{ textDecoration: "underline" }}
              >
                City
              </button>
            </li>
            <li className={`nav-item ${activeTab === "make" ? "active" : ""}`}>
              <button
                className="nav-link focus"
                onClick={() => handleTabClick("make")}
                style={{ textDecoration: "underline" }}
              >
                Make
              </button>
            </li>
            <li className={`nav-item ${activeTab === "model" ? "active" : ""}`}>
              <button
                className="nav-link focus"
                onClick={() => handleTabClick("model")}
                style={{ textDecoration: "underline" }}
              >
                Model
              </button>
            </li>
            <li
              className={`nav-item ${activeTab === "budget" ? "active" : ""}`}
            >
              <button
                className="nav-link focus"
                onClick={() => handleTabClick("budget")}
                style={{ textDecoration: "underline" }}
              >
                Budget
              </button>
            </li>
            <li
              className={`nav-item ${activeTab === "bodytype" ? "active" : ""}`}
            >
              <button
                className="nav-link focus"
                onClick={() => handleTabClick("bodytype")}
                style={{ textDecoration: "underline" }}
              >
                Body Type
              </button>
            </li>
          </ul>

          <div className="tab-content mt20">
            {activeTab === "category" && (
              <div className="carousel slide" id="categoryCarousel">
                <div className="carousel-inner">
                  {categorySets.map((categorySet, setIndex) => (
                    <div
                      className={`carousel-item ${
                        setIndex === 0 ? "active" : ""
                      }`}
                      key={setIndex}
                    >
                      <div className="row d-flex align-items-center">
                        {categorySet.map((category, index) => (
                          <div
                            className="col-md-2 card-container"
                            key={category.id}
                          >
                            <div className="d-flex justify-content-center align-items-center">
                              <div
                                className="card shadow p-30 mb-5 bg-white rounded"
                                style={{
                                  justifyContent: "center",
                                  textAlign: "center",
                                  // border: "2px solid purple",
                                  margin: "10px",
                                }}
                              >
                                <img
                                  src={category.image}
                                  className="card-img-top"
                                  alt={category.title}
                                  style={{ height: "50px", width: "50px" }}
                                />
                                <div className="card-body">
                                  <a href="#">
                                    <h5 className="card-title">
                                      {category.title}
                                    </h5>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "make" && (
              <div className="carousel slide" id="makeCarousel">
                <div className="carousel-inner">
                  {makeSets.map((makeSet, setIndex) => (
                    <div
                      className={`carousel-item ${
                        setIndex === 0 ? "active" : ""
                      }`}
                      key={setIndex}
                    >
                      <div className="row d-flex align-items-center">
                        {makeSet.map((make, index) => (
                          <div
                            className="col-md-2 card-container"
                            key={make.id}
                          >
                            <div className="d-flex justify-content-center align-items-center">
                              <div
                                className="card shadow p-30 mb-5 bg-white rounded"
                                style={{
                                  justifyContent: "center",
                                  textAlign: "center",
                                  // border: "2px solid purple",
                                  margin: "10px",
                                }}
                              >
                                <img
                                  src={make.image}
                                  className="card-img-top"
                                  alt={make.title}
                                  style={{ height: "50px", width: "50px" }}
                                />
                                <div className="card-body">
                                  <a href="#">
                                    <h5 className="card-title">{make.title}</h5>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "bodytype" && (
              <div className="carousel slide" id="bodyTypeCarousel">
                <div className="carousel-inner">
                  {bodytypeSets.map(
                    (
                      bodytypeSet,
                      setIndex // Use bodytypeSet here
                    ) => (
                      <div
                        className={`carousel-item ${
                          setIndex === 0 ? "active" : ""
                        }`}
                        key={setIndex}
                      >
                        <div className="row d-flex align-items-center">
                          {bodytypeSet.map((bodyType, index) => (
                            <div
                              className="col-md-2 card-container"
                              key={bodyType.id}
                            >
                              <div className="d-flex justify-content-center align-items-center">
                                <div
                                  className="card shadow p-30 mb-5 bg-white rounded"
                                  style={{
                                    justifyContent: "center",
                                    textAlign: "center",
                                    // border: "2px solid purple",
                                    margin: "10px",
                                  }}
                                >
                                  <img
                                    src={bodyType.image}
                                    className="card-img-top"
                                    alt={bodyType.title}
                                    style={{ height: "50px", width: "50px" }}
                                  />
                                  <div className="card-body">
                                    <a href="#">
                                      <h5 className="card-title">
                                        {bodyType.title}
                                      </h5>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
            {/* Add other carousel content for different tabs */}

            {/* {activeTab !== "category" && activeTab !== "make" && ( */}
            {activeTab === "city" && (
              // Other dropdown content
              <div className="button-grid">
                {Array(30) // 5 lines with 6 buttons each (5 x 6 = 30)
                  .fill(null)
                  .map((_, index) => (
                    <button
                      key={index}
                      className="btn btn-transparent"
                      onMouseEnter={(e) => {
                        e.target.style.fontWeight = "bold";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.fontWeight = "normal";
                      }}
                    >
                      Lahore
                    </button>
                  ))}
              </div>
            )}
            {activeTab === "model" && (
              // Other dropdown content
              <div className="button-grid">
                {Array(30) // 5 lines with 6 buttons each (5 x 6 = 30)
                  .fill(null)
                  .map((_, index) => (
                    <button
                      key={index}
                      className="btn btn-transparent"
                      onMouseEnter={(e) => {
                        e.target.style.fontWeight = "bold";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.fontWeight = "normal";
                      }}
                    >
                      Civic
                    </button>
                  ))}
              </div>
            )}
            {activeTab === "budget" && (
              // Other dropdown content
              <div className="button-grid">
                {Array(30) // 5 lines with 6 buttons each (5 x 6 = 30)
                  .fill(null)
                  .map((_, index) => (
                    <button
                      key={index}
                      className="btn btn-transparent"
                      onMouseEnter={(e) => {
                        e.target.style.fontWeight = "bold";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.fontWeight = "normal";
                      }}
                    >
                      Under 5 lacs
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseCarousel;
