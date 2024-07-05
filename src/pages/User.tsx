import { getUserDetail } from '@/resource/user'
import { useParams } from '@solidjs/router'
import { Show, createResource } from 'solid-js'


const User = () => {
  const params = useParams()
  const userId = () => params.id
  const [userData] = createResource(userId, getUserDetail)
  return (
    <div class="">
      User {userId()}
      <div>
        <Show when={true}>data:</Show>
        {JSON.stringify(userData()?.firstName)}
      </div>
    </div>
  )
}

export default User
