import {generateMetadataReturn} from '~/helpers/metadata'

export default function Tutos() {
  return (
    <>
      <h1>Animation apparition</h1>
    </>
  )
}
export async function generateMetadata() {
  return generateMetadataReturn(1)
}
