export const LS_THEME_KEY = 'theme'

export function setTheme(theme: 'dark' | 'light') {
  const html = document.querySelector('html')
  if (html) {
    html.setAttribute('data-theme', theme)
    localStorage.setItem(LS_THEME_KEY, theme)
  }
}

export function toggleDarkTheme() {
  const html = document.querySelector('html')
  if (html) {
    if (html.getAttribute('data-theme') === 'dark') {
      html.setAttribute('data-theme', 'light')
      localStorage.setItem(LS_THEME_KEY, 'light')
    } else {
      html.setAttribute('data-theme', 'dark')
      localStorage.setItem(LS_THEME_KEY, 'dark')
    }
  }
}

export function isDarkTheme() {
  const html = document.querySelector('html')
  if (html) {
    return html.getAttribute('data-theme') === 'dark'
  }
  return false
}
