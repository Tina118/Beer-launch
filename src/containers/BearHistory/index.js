import Section from 'components/Section'
import History from 'components/History'

const years = [1974, 1985, 2005, 2023]

const BearHistory = () => (
  <Section backgroundColor="#95959517" marginTop="-100px">
    {years.map((year) => (
      <History year={year} key={year} />
    ))}
  </Section>
)

export default BearHistory
