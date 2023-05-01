import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { HeaderMenu } from '@/components/Header/Header';
let links = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About us" },
  { link: "/contact", label: "Contact us" },


]

export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'demo-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));


  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
        <HeaderMenu links={links} />
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
