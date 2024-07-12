import { useParams } from '@solidjs/router'

const RecordId = () => {
  const param = useParams()
  const recordId = () => param.recordId
  const recId = () => param.recId
  return (
    <div>
      RecordId: {recordId()}
      RecId: {recId()}
    </div>
  )
}

export default RecordId
