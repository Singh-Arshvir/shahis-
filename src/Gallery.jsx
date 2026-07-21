// src/Gallery.jsx

import { useState } from 'react'

const galleryData = [
  {
    id: 1,
    title: 'Modern Luxury Villa',
    category: 'Residential',
    image: '/img1.jpeg',
  },
  {
    id: 2,
    title: 'Corporate Office',
    category: 'Commercial',
    image: 'img2.jpeg',
  },
  {
    id: 3,
    title: 'Elegant Living Room',
    category: 'Interior',
    image: 'img3.jpeg',
  },
  {
    id: 4,
    title: 'Contemporary Kitchen',
    category: 'Interior',
    image: 'img4.jpeg',
  },
  {
    id: 5,
    title: 'Luxury Farmhouse',
    category: 'Residential',
    image: 'img5.jpeg',
  },
  {
    id: 6,
    title: 'Commercial Complex',
    category: 'Commercial',
    image: 'img6.jpeg',
  },
  {
    id: 7,
    title: 'Landscape Design',
    category: 'Landscape',
    image: 'img7.jpeg',
  },
  {
    id: 8,
    title: 'Construction Site',
    category: 'Construction',
    image: 'img8.jpeg',
  },
]

export default function Gallery() {
  const [category, setCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)

  const categories = [
    'All',
    'Residential',
    'Commercial',
    'Interior',
    'Landscape',
    'Construction',
  ]

  const filtered =
    category === 'All'
      ? galleryData
      : galleryData.filter((item) => item.category === category)

  return (
    <section id="gallery" className="bg-black text-white py-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h6 className="text-warning text-uppercase fw-bold">Our Portfolio</h6>

          <h2 className="fw-bold display-5">
            Project <span className="text-warning">Gallery</span>
          </h2>

          <p className="text-secondary mx-auto" style={{ maxWidth: '700px' }}>
            Explore our collection of residential, commercial and interior
            projects designed with precision, creativity and engineering
            excellence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`btn ${
                category === cat ? 'btn-warning' : 'btn-outline-warning'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="row g-4">
          {filtered.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div
                className="position-relative overflow-hidden rounded shadow"
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid w-100"
                  style={{
                    height: '300px',
                    objectFit: 'cover',
                    transition: '.5s',
                  }}
                />

                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-4"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,.85), rgba(0,0,0,.1))',
                  }}
                >
                  <small className="text-warning">{item.category}</small>

                  <h5 className="fw-bold">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{
              background: 'rgba(0,0,0,.92)',
              zIndex: 9999,
            }}
            onClick={() => setSelectedImage(null)}
          >
            <div className="text-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="img-fluid rounded"
                style={{
                  maxHeight: '80vh',
                  maxWidth: '90vw',
                }}
              />

              <h3 className="text-warning mt-4">{selectedImage.title}</h3>

              <p>{selectedImage.category}</p>

              <button
                className="btn btn-warning mt-2"
                onClick={() => setSelectedImage(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
