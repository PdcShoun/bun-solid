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
      Page
      <Show when={totalUser}>
        <nav aria-label="Page navigation example">
          <ul class="inline-flex -space-x-px text-sm">
            {UserPageLink(totalUser())}
          </ul>
        </nav>
      </Show>
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
        {(_item, index) => (
          <li>
            <A
              class="ms-0 flex h-8 items-center justify-center rounded-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              href={calPage(index)}
            >
              {index + 1}
            </A>
          </li>
        )}
      </Index>
    </>
  )
}
