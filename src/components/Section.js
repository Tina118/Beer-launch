import styled from 'styled-components'
import { Flex } from 'rebass'

const HeaderSection = styled.section`
  overflow: hidden;
`

const Head = styled.div`
  padding: 100px 0;
  width: 100%;
  height: 100%;
`

const Section = ({ backgroundColor, children }) => (
  <HeaderSection>
    <Head style={{ backgroundColor }}>
      <Flex
        style={{
          maxWidth: '1300px',
          marginRight: 'auto',
          marginLeft: 'auto',
          position: 'relative',
        }}
      >
        {children}
      </Flex>
    </Head>
  </HeaderSection>
)

export default Section
