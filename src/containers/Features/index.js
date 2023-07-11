import styled from 'styled-components'
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

const StyledFlavourDesc = styled(Description)`
  text-align: center;
  font-size: 25px;
  margin-bottom: 20px;

  @media (max-width: 921px) {
    font-size: 20px;
  }

  @media (max-width: 769px) {
    font-size: 18px;
  }
`

const StyledDesc = styled(Description)`
  font-size: 25px;
  margin-bottom: 20px;

  @media (max-width: 1025px) {
    font-size: 22px;
  }

  @media (max-width: 921px) {
    font-size: 20px;
  }

  @media (max-width: 769px) {
    font-size: 18px;
  }
`

const Image = styled.img`
  margin-right: 30px;
  @media (max-width: 769px) {
    margin: 0;
  }
`

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
        <StyledFlavourDesc>
          Curabitur arcu erat, accumsan id imperdiet et, port titor at sem.
          Donec <br />
          sollici tudin molestie malesuada.
        </StyledFlavourDesc>
      </Flex>
    </Section>
    <Section marginTop="-50px" paddingBottom="0px">
      <Flex
        width="100%"
        sx={{
          margin: `0pX 85px`,
          [`@media (max-width: 1025px)`]: {
            margin: 0,
          },
          [`@media (max-width: 769px)`]: {
            flexDirection: 'column',
          },
        }}
        height="100%"
      >
        <Flex
          width="45%"
          justifyContent="center"
          alignItems="center"
          sx={{
            [`@media (max-width: 769px)`]: {
              width: '100%',
            },
          }}
        >
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
          sx={{
            padding: `70px 0px`,
            [`@media (max-width: 769px)`]: {
              width: '100%',
              padding: `50px 0px 0px;`,
            },
          }}
        >
          {features.map(({ src, description }, index) => (
            <Flex
              sx={{
                marginBottom: '40px',
                [`@media (max-width: 769px)`]: {
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                },
              }}
              key={`feature-${index}`}
            >
              <Image decoding="async" width="66" height="66" src={src} />
              <StyledDesc>{description}</StyledDesc>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Section>
    <Section paddingTo="0px">
      <Flex
        sx={{
          [`@media (max-width: 769px)`]: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          },
        }}
      >
        {ingredients.map(({ src, description }, index) => (
          <Flex
            sx={{
              padding: `0px 80px`,
              [`@media (max-width: 1025px)`]: {
                padding: `0px 40px`,
              },
              [`@media (max-width: 921px)`]: {
                padding: `0px 15px`,
              },
              [`@media (max-width: 769px)`]: {
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              },
            }}
            key={`ingredient-${index}`}
          >
            <Image width="37" height="37" src={src} />
            <StyledDesc>{description}</StyledDesc>
          </Flex>
        ))}
      </Flex>
    </Section>
  </>
)

export default Features
