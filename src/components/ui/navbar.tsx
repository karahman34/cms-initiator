import { UserDropdown } from '../layout/user-dropdown'
import { SidebarTrigger } from './sidebar'

export default function Navbar() {
  return (
    <header className='flex items-center justify-between p-4 bg-white border-b-[1px]'>
      <div className='flex items-center space-x-3'>
        <div className='md:block sm:hidden'>
          <SidebarTrigger />
        </div>

        <h1 className='text-xl font-bold'>CMS Initiator</h1>
      </div>

      <UserDropdown />
    </header>
  )
}
