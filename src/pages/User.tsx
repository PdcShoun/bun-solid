import { getUserDetail } from '@/resource/user'
import { useParams, A, useNavigate } from '@solidjs/router'
import { Show, createResource } from 'solid-js'
import { Button } from '@suid/material'

const User = () => {
  const params = useParams()
  const navigation = useNavigate()
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
        <Button
          variant="contained"
          onclick={() => navigation(`/users/${prevId()}`)}
        >
          Prev
        </Button>
      </Show>
      <Button
        variant="contained"
        onclick={() => navigation(`/users/${nextId()}`)}
      >
        Next
      </Button>
    </div>
  )
}

export default User
