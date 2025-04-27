import { Moon, Sun } from 'lucide-react'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import { isDarkTheme, toggleDarkTheme } from '@/lib/theme'

export default function ToggleTheme() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light')

  const handleToggleTheme = () => {
    toggleDarkTheme()
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    const currentTheme = isDarkTheme()
    setTheme(currentTheme ? 'dark' : 'light')
  }, [])

  return (
    <Button
      variant='outline'
      size='icon'
      className='cursor-pointer rounded-full'
      onClick={handleToggleTheme}
    >
      {theme === 'dark' ? <Moon /> : <Sun />}
    </Button>
  )
}
