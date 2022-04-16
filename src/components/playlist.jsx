import React from "react";
import SlideshowWithPagination from "react-slideshow-with-pagination";

const Image1 = "./image1.png";
const CARDS_DETAILS = [
  { image: Image1, title: "1" },
  { image: Image1, title: "2" },
  { image: Image1, title: "3" },
  { image: Image1, title: "4" },
];

const Slideshow = () => {
  return (
    <div style={{ color: "white", marginTop: 40 }}>
      // Slideshow with preset card features along with pagination and arrow
      <h3>Recents Videos</h3>
      <SlideshowWithPagination
        options={CARDS_DETAILS}
        showNumbers={true}
        showDots={true}
        showArrows={true}
        numberOfCardsPerScreen={3}
        showOneCardForWidthLower="sm"
        slideshowContainerMaxWidth={false}
        cardWidth={500}
        cardHeight={300}
      />
      // Slideshow with (only) pagination and arrow buttons feature
      <SlideshowWithPagination
        showNumbers={true}
        showDots={true}
        showArrows={true}
      >
        {CARDS_DETAILS.map((item, index) => (
          <React.Fragment key={index}>
            <img
              style={{ width: 200, height: 200 }}
              src={item.image}
              alt={item.title}
            />
            <p>{item.title}</p>
          </React.Fragment>
        ))}
      </SlideshowWithPagination>
    </div>
  );
};

export default Slideshow;
