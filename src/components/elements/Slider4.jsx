import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const imageData = [
  "https://res.cloudinary.com/dgujs7cy9/image/upload/v1758134470/full-project-1_jaunjg.jpg",
  "https://res.cloudinary.com/dgujs7cy9/image/upload/v1758134549/full-project-2_l0ibyi.jpg",
  "https://res.cloudinary.com/dgujs7cy9/image/upload/v1758135286/full-project-3_r5nbb0.jpg",
  "https://res.cloudinary.com/dgujs7cy9/image/upload/v1758135286/full-project-4_izopr6.jpg",
  "https://res.cloudinary.com/dgujs7cy9/image/upload/v1758135286/full-project-5_vhsohf.jpg",
  "https://res.cloudinary.com/dgujs7cy9/image/upload/v1758135287/full-project-6_kvdtzb.jpg",
  "https://res.cloudinary.com/dgujs7cy9/image/upload/v1758135287/full-project-6_kvdtzb.jpg",
  "https://res.cloudinary.com/dgujs7cy9/image/upload/v1758135287/full-project-7_dy63hi.jpg",
  "https://res.cloudinary.com/dgujs7cy9/image/upload/v1758135288/full-project-8_dbwbjt.jpg",
  "https://res.cloudinary.com/dgujs7cy9/image/upload/v1758135289/full-project-9_glrlba.jpg",
  "https://res.cloudinary.com/dgujs7cy9/image/upload/v1758135290/full-project-10_ghnazn.jpg",
  "https://res.cloudinary.com/dgujs7cy9/image/upload/v1758135290/full-project-11_hivlua.jpg",
  "https://res.cloudinary.com/dgujs7cy9/image/upload/v1758135291/full-project-12_sjxboh.jpg",
  "https://res.cloudinary.com/dgujs7cy9/image/upload/v1758135292/full-project-13_o1mod2.jpg",
  "https://res.cloudinary.com/dgujs7cy9/image/upload/v1758135295/full-project-14_wvk32r.jpg",
  "https://res.cloudinary.com/dgujs7cy9/image/upload/v1758135295/full-project-15_dikun8.jpg",
];

export default function Slider4() {
  return (
    <div className="container relative">
      <div className="work-full-media image-fullwidth mb-0">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".snbp1",
            nextEl: ".snbn1",
          }}
          watchSlidesProgress
          resizeObserver
          className="clearlist work-full-slider owl-carousel owl-theme overflow-hidden light-content"
          style={{
            opacity: 1,
            display: "block",
          }}
        >
          {/* Team item */}
          {imageData.map((image, index) => (
            <SwiperSlide className="owl-item" key={index}>
              <img
                src={image}
                width={1920}
                height={1080}
                alt="Image Description"
              />
            </SwiperSlide>
          ))}
          <div className="owl-controls clickable">
            <div className="owl-pagination sp1"></div>
            <div className="owl-buttons">
              <div className="owl-prev snbp1 " role="button" tabIndex="0">
                <span className="visually-hidden">Previous Slide</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27px"
                  height="57px"
                  viewBox="0 0 27 57"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M5.005,28.500 L27.000,54.494 L24.000,56.994 L0.005,28.500 L24.000,0.006 L27.000,2.506 L5.005,28.500 Z"></path>
                </svg>
              </div>
              <div className="owl-next snbn1" role="button" tabIndex="0">
                <span className="visually-hidden">Next Slide</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27px"
                  height="57px"
                  viewBox="0 0 27 57"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M21.995,28.500 L-0.000,54.494 L3.000,56.994 L26.995,28.500 L3.000,0.006 L-0.000,2.506 L21.995,28.500 Z"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* End Team item */}
        </Swiper>
      </div>
    </div>
  );
}
