import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { User } from 'lucide-react'
import Link from 'next/link'

export function UserDropdown() {
  const menuItems = [
    { label: 'Profile', url: '/profile' },
    { label: 'Billing', url: '/billing' },
    { label: 'Settings', url: '/settings' },
    { label: 'Keyboard shortcuts', url: '/shortcuts' },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className='cursor-pointer text-dark rounded-full focus-visible:ring-0 focus-visible:border-ring-0'
        >
          <User />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='w-56' side='bottom' align='end'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {menuItems.map((item) => (
            <DropdownMenuItem key={item.label}>
              <Link href={item.url}>{item.label}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
