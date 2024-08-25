import { createResource, For, Index, Show } from 'solid-js'
import { A, useNavigate, useSearchParams } from '@solidjs/router'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { Skeleton } from '@/components/ui/skeleton'

import { getUserList } from '@/resource/user'

const UsersList = () => {
  const [searchParams] = useSearchParams()
  const page = () => Number(searchParams.page) || 1
  const [users] = createResource(page, getUserList)
  const totalUser = () => Math.ceil((users()?.total || 0) / 10)

  const navigate = useNavigate()

  return (
    <>
      <div class="text-2xl">User list</div>
      <Table>
        <TableHeader>
          <TableRow class="">
            <TableHead class="text-black">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Password</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <Show
            when={!users.loading}
            fallback={
              <For each={[...Array(10)]}>
                {(_i) => (
                  <TableRow>
                    <TableCell>
                      <Skeleton class="p-1.5" />
                    </TableCell>
                    <TableCell>
                      <Skeleton class="p-1.5" />
                    </TableCell>
                    <TableCell>
                      <Skeleton class="p-1.5" />
                    </TableCell>
                    <TableCell>
                      <Skeleton class="p-1.5" />
                    </TableCell>
                  </TableRow>
                )}
              </For>
            }
          >
            <For each={users()?.users}>
              {(user) => (
                <TableRow
                  data-href={`/users/${user.id}`}
                  onclick={() => navigate(`/users/${user.id}`)}
                >
                  <TableCell>{user.firstName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.password}</TableCell>
                </TableRow>
              )}
            </For>
          </Show>
        </TableBody>
      </Table>
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
  const arrayLenth = total ? total : 0
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
