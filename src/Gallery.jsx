import { useState } from "react";

const galleryData = [
  {
    title: "Modern Villa",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
  },
  {
    title: "Urban Office",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
  },
  {
    title: "Contemporary Interior",
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
  },
  {
    title: "Luxury Residence",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85",
  },
  {
    title: "Modern Workspace",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85",
  },
  {
    title: "Architectural Details",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
  },
];

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = [
    "All",
    "Residential",
    "Commercial",
    "Interior",
    "Design",
  ];

  const filteredImages =
    activeFilter === "All"
      ? galleryData
      : galleryData.filter(
          (item) => item.category === activeFilter
        );

  return (
    <section id="gallery" className="gallery-section">

      <div className="container-fluid px-lg-5">

        {/* Section Header */}
        <div className="gallery-header">

          <div>
            <p className="gallery-label">
              OUR WORK
            </p>

            <h2 className="gallery-title">
              Spaces that <span>inspire.</span>
            </h2>
          </div>

          <p className="gallery-description">
            A collection of spaces shaped by thoughtful design,
            precision, and architectural vision.
          </p>

        </div>

        {/* Category Filters */}
        <div className="gallery-filters">

          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={
                activeFilter === filter ? "active" : ""
              }
            >
              {filter}
            </button>
          ))}

        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">

          {filteredImages.map((item, index) => (

            <div
              key={item.title}
              className={`gallery-item gallery-item-${index + 1}`}
              onClick={() => setSelectedImage(item)}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="gallery-overlay">

                <div>
                  <small>
                    {item.category}
                  </small>

                  <h3>
                    {item.title}
                  </h3>
                </div>

                <span>
                  ↗
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Image Lightbox */}
      {selectedImage && (

        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="close-btn"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage.image}
            alt={selectedImage.title}
          />

          <div className="lightbox-title">

            <small>
              {selectedImage.category}
            </small>

            <h3>
              {selectedImage.title}
            </h3>

          </div>

        </div>

      )}

    </section>
  );
}

export default Gallery;