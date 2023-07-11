import styled from 'styled-components'
import { Flex } from 'rebass'

const HeaderSection = styled.section`
  overflow: hidden;
`

const Head = styled.div`
  padding: 50px 0;
  width: 100%;
  height: 100%;
`

const Section = ({ backgroundColor = '', children, style, ...rest }) => (
  <HeaderSection>
    <Head style={{ backgroundColor, ...rest }}>
      <Flex
        sx={{
          maxWidth: '92%',
          marginRight: 'auto',
          marginLeft: 'auto',
          position: 'relative',
          [`@media (max-width: 1025px)`]: {
            maxWidth: '90%',
          },
          [`@media (max-width: 921px)`]: {
            maxWidth: '90%',
          },
          [`@media (max-width: 769px)`]: {
            maxWidth: '80%',
            flexDirection: 'column',
          },
          ...style,
        }}
      >
        {children}
      </Flex>
    </Head>
  </HeaderSection>
)

export default Section
