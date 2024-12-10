export const testimonialsData = [
  {
    id: 0,
    name: "John Doe",
    text: "This developer is amazing! They delivered high-quality work and exceeded expectations.",
    img: "https://via.placeholder.com/100",
    delay: 0.5,
  },
  {
    id: 1,
    name: "Jane Smith",
    text: "Their attention to detail and communication skills are top-notch!",
    img: "https://via.placeholder.com/100",
    delay: 1.0,
  },
  {
    id: 2,
    name: "Michael Lee",
    text: "Highly recommend! They are professional and efficient in every way.",
    img: "https://via.placeholder.com/100",
    delay: 1.5,
  },
  {
    id: 3,
    name: "Sarah Brown",
    text: "Their innovative solutions saved us time and resources. Truly outstanding!",
    img: "https://via.placeholder.com/100",
    delay: 2.0,
  },
  {
    id: 4,
    name: "Emma Wilson",
    text: "Working with them has been a pleasure. Excellent work ethic!",
    img: "https://via.placeholder.com/100",
    delay: 2.5,
  },
];

// slider settings
export const setting = {
  dots: true,
  arrow: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  cssEase: "linear",
  autoplay: true,
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    {
        breakpoint: 10000,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
        }
    },
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 640,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
        }
    },
  ]
};

