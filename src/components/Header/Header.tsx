import { useState } from 'react';
import { createStyles, Header, Group, ActionIcon, Container, Burger, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandTwitter, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';
import { useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import Link from 'next/link';
import { SearchBar } from "@/components/Search/Search"
const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: rem(56),

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  links: {
    width: rem(260),

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  social: {
    width: rem(260),

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderMiddleProps {
  links: { link: string; label: string }[];
}

export function HeaderMenu({ links }: HeaderMiddleProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';


  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={56} mb={120}>
      <Container className={classes.inner}>
        <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />
        <Link href={"/"}>
          <MantineLogo size={28} />
        </Link>
        <Group position='center'>

          <Group className={classes.links} position='right' spacing={5}>
            {items}
          </Group>

          <Group spacing={0} className={classes.social} position="center" noWrap>
            <Link target='_blank' href="https://twitter.com/Official_R_deep">
              <ActionIcon size="lg">
                <IconBrandTwitter size="1.1rem" stroke={1.5} />
              </ActionIcon>
            </Link>
            <Link target='_blank' href="https://www.linkedin.com/in/officalrajdeepsingh/">
              <ActionIcon size="lg">
                <IconBrandLinkedin size="1.1rem" stroke={1.5} />
              </ActionIcon>
            </Link>
            <Link target='_blank' href="http://github.com/officialrajdeepsingh">
              <ActionIcon size="lg">
                <IconBrandGithub size="1.1rem" stroke={1.5} />
              </ActionIcon>
            </Link>
            <SearchBar />

            <ActionIcon
              size="lg"
              variant="outline"
              color={dark ? 'yellow' : 'blue'}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
            </ActionIcon>
          </Group>
        </Group>
      </Container>
    </Header>
  );
}
