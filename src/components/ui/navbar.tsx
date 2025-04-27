import ToggleTheme from '../layout/toggle-theme'
import { UserDropdown } from '../layout/user-dropdown'
import { SidebarTrigger } from './sidebar'

export default function Navbar() {
  return (
    <header className='flex items-center justify-between p-4 border-b-[1px] bg-navbar'>
      <div className='flex items-center space-x-3'>
        <div className='md:block sm:hidden'>
          <SidebarTrigger />
        </div>

        <h1 className='text-xl font-bold'>CMS Initiator</h1>
      </div>

      <div className='flex items-center space-x-3'>
        <ToggleTheme />
        <UserDropdown />
      </div>
    </header>
  )
}
