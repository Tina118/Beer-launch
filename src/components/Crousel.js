import styled from 'styled-components'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from 'react-slick'

const Box = styled.div`
  margin-left: 20px;
  margin-right: 10px;
  width: 100%;
`

const Image = styled.img`
  @media (max-width: 921px) {
    width: 285px;
  }

  @media (max-width: 874px) {
    width: 270px;
  }

  @media (max-width: 820px) {
    width: 240px;
  }

  @media (max-width: 740px) {
    width: 220px;
  }

  @media (max-width: 670px) {
    width: 200px;
  }

  @media (max-width: 600px) {
    width: 250px;
  }

  @media (max-width: 511px) {
    width: 230px;
  }

  @media (max-width: 471px) {
    width: 200px;
  }

  @media (max-width: 401px) {
    width: 300px;
    margin-left: 30px;
  }
`

const Crousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          dots: false,
          infinite: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 921,
        settings: {
          dots: false,
          infinite: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          infinite: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          dots: false,
          infinite: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      <Box>
        <Image
          width="232px"
          decoding="async"
          src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/gallery-5.jpg"
          alt="gallery-5"
        />
      </Box>
      <Box>
        <Image
          width="232px"
          decoding="async"
          src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/gallery-3.jpg"
          alt="gallery-3"
        />
      </Box>
      <Box>
        <Image
          width="232px"
          decoding="async"
          src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/gallery-4.jpg"
          alt="gallery-4"
        />
      </Box>
      <Box>
        <Image
          width="232px"
          decoding="async"
          src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/gallery-1.jpg"
          alt="gallery-1"
        />
      </Box>
      <Box>
        <Image
          width="232px"
          decoding="async"
          src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/gallery-2.jpg"
          alt="gallery-2"
        />
      </Box>
      <Box>
        <Image
          width="232px"
          decoding="async"
          src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/gallery-6.jpg"
          alt="gallery-6"
        />
      </Box>
      <Box>
        <Image
          width="232px"
          decoding="async"
          src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/gallery-5.jpg"
          alt="gallery-5"
        />
      </Box>
      <Box>
        <Image
          width="232px"
          decoding="async"
          src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/gallery-3.jpg"
          alt="gallery-3"
        />
      </Box>
      <Box>
        <Image
          width="232px"
          decoding="async"
          src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/gallery-4.jpg"
          alt="gallery-4"
        />
      </Box>
      <Box>
        <Image
          width="232px"
          decoding="async"
          src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/gallery-1.jpg"
          alt="gallery-1"
        />
      </Box>
    </Slider>
  )
}

export default Crousel
