import { ActionIcon } from '@mantine/core';
import { SpotlightProvider, spotlight } from '@mantine/spotlight';
import type { SpotlightAction } from '@mantine/spotlight';
import { IconHome, IconDashboard, IconSearch, IconMail, IconSun, IconMoonStars } from '@tabler/icons-react';

import { useRouter } from 'next/router';
import { useMantineColorScheme } from '@mantine/core';

function SpotlightControl() {
  return (
    <ActionIcon onClick={() => spotlight.open()} size={"lg"}>

      <IconSearch size={"1.1rem"} />

    </ActionIcon >

  );
}



export function SearchBar() {

  const { toggleColorScheme } = useMantineColorScheme();
  const router = useRouter()

  const actions: SpotlightAction[] = [
    {
      group: "Change theme",
      title: 'Change light Theme',
      description: 'Change theme',
      onTrigger: () => toggleColorScheme("light"),
      icon: <IconSun size="1.2rem" />,
    },
    {
      group: "Change theme",
      title: 'Change Dark Theme',
      description: 'Change theme',
      onTrigger: () => toggleColorScheme("dark"),
      icon: <IconMoonStars size="1.2rem" />,
    },

    {
      title: 'Home',
      group: "Navigation",
      description: 'Get to Home Page',
      onTrigger: () => router.push("/"),
      icon: <IconHome size="1.2rem" />,
    },

    {
      title: 'About',
      group: "Navigation",

      description: 'Read our journey to build a startup from Zero.',
      onTrigger: () => router.push("/about"),
      icon: <IconDashboard size="1.2rem" />,
    },
    {
      title: 'Contact',
      group: "Navigation",
      description: 'Get contact us',
      onTrigger: () => router.push("/contact"),
      icon: <IconMail size="1.2rem" />,
    },
  ];

  return (
    <SpotlightProvider
      actions={actions}
      searchIcon={<IconSearch size="1.2rem" />}
      searchPlaceholder="Search..."
      shortcut="ctrl + k"
      nothingFoundMessage="Nothing found..."
    >
      <SpotlightControl />
    </SpotlightProvider>
  );
}
