import { Flex } from 'rebass'

import Section from 'components/Section'
import { H2, Description } from 'components/Text'

const features = [
  {
    src: 'https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/ICON-FINDER-1-5.png',
    description:
      'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit',
  },
  {
    src: 'https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/ICON-FINDER-1-3.png',
    description:
      'Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
  },
  {
    src: 'https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/iconfinder_Seed_7609583.png',
    description:
      'Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat.',
  },
]

const ingredients = [
  {
    src: 'https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/ICON-FINDER-1-4.png',
    description: 'Vestibulum ac diam sit amet quam vehicula elementum .',
  },
  {
    src: 'https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/ICON-FINDER-1-2.png',
    description: 'Vestibulum ac diam sit amet quam vehicula elementum .',
  },
  {
    src: 'https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/ICON-FINDER-1-1.png',
    description: 'Vestibulum ac diam sit amet quam vehicula elementum .',
  },
]

const Features = () => (
  <>
    <Section paddingTop="0px">
      <Flex
        alignItems="center"
        justifyContent="center"
        width="100%"
        flexDirection="column"
      >
        <H2 style={{ textAlign: 'center', marginBottom: '20px' }}>
          Features & <br />
          Ingredients
        </H2>
        <Description
          style={{
            textAlign: 'center',
            fontSize: '25px',
            marginBottom: '20px',
          }}
        >
          Curabitur arcu erat, accumsan id imperdiet et, port titor at sem.
          Donec <br />
          sollici tudin molestie malesuada.
        </Description>
      </Flex>
    </Section>
    <Section marginTop="-100px" paddingBottom="0px">
      <Flex width="100%" style={{ margin: `0PX 85px` }} height="570px">
        <Flex width="45%" justifyContent="center" alignItems="center">
          <img
            decoding="async"
            width="350"
            height="554"
            src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/beer-features-1.png"
          />
        </Flex>
        <Flex
          width="55%"
          flexDirection="column"
          style={{ padding: `70px 0px` }}
        >
          {features.map(({ src, description }, index) => (
            <Flex style={{ marginBottom: '40px' }} key={`feature-${index}`}>
              <img
                style={{ marginRight: '30px' }}
                decoding="async"
                width="66"
                height="66"
                src={src}
              />
              <Description style={{ fontSize: '25px', marginBottom: '20px' }}>
                {description}
              </Description>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Section>
    <Section paddingTo="0px">
      <Flex>
        {ingredients.map(({ src, description }, index) => (
          <Flex style={{ padding: `0px 80px` }} key={`ingredient-${index}`}>
            <img
              style={{ marginRight: '30px' }}
              width="37"
              height="37"
              src={src}
            />
            <Description style={{ fontSize: '25px', marginBottom: '20px' }}>
              {description}
            </Description>
          </Flex>
        ))}
      </Flex>
    </Section>
  </>
)

export default Features
