import { createResource, For, Index, Show } from 'solid-js'
import { A, useSearchParams } from '@solidjs/router'

import { getUserList } from '@/resource/user'

const UsersList = () => {
  const [searchParams] = useSearchParams()
  const page = () => Number(searchParams.page) || 1
  const [users] = createResource(page, getUserList)
  const totalUser = () => Math.ceil((users()?.total || 0) / 10)
  return (
    <>
      <div class="">User list</div>
      <ul>
        <Show when={!users.loading} fallback={<>Loading</>}>
          <For each={users()?.users}>
            {(user) => (
              <li>
                <A href={`/users/${user.id}`}>{user.firstName}</A>
              </li>
            )}
          </For>
        </Show>
      </ul>
      Page<Show when={totalUser}>{UserPageLink(totalUser())}</Show>
    </>
  )
}

export default UsersList

const UserPageLink = (total: number) => {
  const calPage = (index: number) => `?page=${index + 1}`
  const arrayLenth = total ? total - 1 : 0
  return (
    <>
      <Index each={[...Array(arrayLenth)]}>
        {(_item, index) => <A href={calPage(index)}>{index + 1}</A>}
      </Index>
    </>
  )
}
