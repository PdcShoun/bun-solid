import { getUserDetail } from '@/resource/user'
import { useParams, A, useNavigate } from '@solidjs/router'
import { Show, createResource } from 'solid-js'

const User = () => {
  const params = useParams()
  const userId = () => params.userId
  const nextId = () => Number(userId()) + 1
  const prevId = () => Number(userId()) - 1
  const [userData] = createResource(userId, getUserDetail)
  return (
    <div class="">
      User id: {userId()}
      <div>
        <Show when={!userData.loading} fallback={<>Loding</>}>
          first name: {userData()?.firstName}
        </Show>
      </div>
      <Show when={prevId() > 0}>
        <A href={`/users/${prevId()}`}>Prev</A>
      </Show>
      <A href={`/users/${nextId()}`}>Next</A>
    </div>
  )
}

export default User
