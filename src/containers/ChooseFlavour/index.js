import styled from 'styled-components'
import { Flex } from 'rebass'

import Section from 'components/Section'
import { H2, Description } from 'components/Text'

const Button = styled.button`
  font-family: 'Bungee', cursive;
  width: 270px;
  max-width: 270px;
  margin-right: 20px;
  padding: 10px 32px;
  border: 0;
  font-size: 16px;
  cursor: pointer;
  margin-top: 30px;
  background-color: #f9b301;
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

const ChooseFlavour = () => (
  <Section
    paddingTop="0px"
    style={{
      [`@media (max-width: 1025px)`]: {
        flexDirection: 'column',
      },
    }}
  >
    <Flex
      width="50%"
      sx={{
        [`@media (max-width: 1025px)`]: {
          width: '100%',
          justifyContent: 'center',
          alignContent: 'center',
        },
      }}
    >
      <img
        style={{
          objectFit: 'cover',
          height: 'auto',
          maxWidth: '100%',
        }}
        decoding="async"
        width="456"
        height="577"
        src="https://websitedemos.net/beer-launch-04/wp-content/uploads/sites/795/2021/04/choose-flavor.png"
      />
    </Flex>
    <Flex
      width="50%"
      flexDirection="column"
      sx={{
        [`@media (max-width: 1025px)`]: {
          width: '100%',
          marginTop: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        },
      }}
    >
      <H2 style={{ textTransform: 'uppercase', marginBottom: '20px' }}>
        Choose your Flavour
      </H2>
      <StyledDesc>
        Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec
        rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id
        imperdiet et, porttitor at sem.
      </StyledDesc>
      <StyledDesc>
        Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan
        tincidunt. Cras ultricies ligula sed magna dictum porta. Cras ultricies
        ligula sed magna dictum porta. Donec sollicitudin molestie malesuada.
        Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero
        malesuada feugiat. Vivamus suscipit tortor eget felis porttitor
        volutpat.
      </StyledDesc>
      <Button>CHOOSE FOR YOURSELF</Button>
    </Flex>
  </Section>
)

export default ChooseFlavour
