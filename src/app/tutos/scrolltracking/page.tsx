import {generateMetadataReturn} from '~/helpers/metadata'

export default function Scroll() {
  return (
    <>
      <h1>scroll</h1>
    </>
  )
}
export async function generateMetadata() {
  return generateMetadataReturn(0)
}
