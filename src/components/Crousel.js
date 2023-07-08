import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from 'react-slick'

const Box = styled.div`
  margin-left: 20px;
  margin-right: 10px;
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
  }

  return (
    <Slider {...settings}>
      <Box>
        <img
          width="232px"
          decoding="async"
          src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/gallery-5.jpg"
          alt="gallery-5"
        />
      </Box>
      <Box>
        <img
          width="232px"
          decoding="async"
          src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/gallery-3.jpg"
          alt="gallery-3"
        />
      </Box>
      <Box>
        <img
          width="232px"
          decoding="async"
          src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/gallery-4.jpg"
          alt="gallery-4"
        />
      </Box>
      <Box>
        <img
          width="232px"
          decoding="async"
          src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/gallery-1.jpg"
          alt="gallery-1"
        />
      </Box>
      <Box>
        <img
          width="232px"
          decoding="async"
          src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/gallery-2.jpg"
          alt="gallery-2"
        />
      </Box>
      <Box>
        <img
          width="232px"
          decoding="async"
          src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/gallery-6.jpg"
          alt="gallery-6"
        />
      </Box>
      <Box>
        <img
          width="232px"
          decoding="async"
          src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/gallery-5.jpg"
          alt="gallery-5"
        />
      </Box>
      <Box>
        <img
          width="232px"
          decoding="async"
          src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/gallery-3.jpg"
          alt="gallery-3"
        />
      </Box>
      <Box>
        <img
          width="232px"
          decoding="async"
          src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/gallery-4.jpg"
          alt="gallery-4"
        />
      </Box>
      <Box>
        <img
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
