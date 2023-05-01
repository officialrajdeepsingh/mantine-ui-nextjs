import React from 'react';
import { Text } from '@mantine/core';
import { createStyles } from '@mantine/core';
import Image from 'next/image';


const useStyles = createStyles((theme) => {
  return ({
    prose: {
      "--tw-prose-body": theme.colorScheme === "dark" ? "#d1d5db !important" : "#b5c0d3",
      "--tw-prose-headings": theme.colorScheme === "dark" ? "white !important" : "white",
      "--tw-prose-bold": theme.colorScheme === "dark" ? "white !important" : "#111827",
      "--tw-prose-code": theme.colorScheme === "dark" ? "white !important " : "#111827",
      "--tw-prose-quotes": theme.colorScheme === "dark" ? "white !important " : "#111827"
    }
  })
});

function Read() {

  const { classes } = useStyles();

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24">

      <div className="flex justify-between px-4 mx-auto max-w-screen-xl">


        <article className={`mx-auto prose ${classes.prose} prose-blue `}>

          <Text component='h1' className='mb-4 text-3xl font-extrabold leading-tight text-black lg:mb-6 lg:text-4xl dark:text-white' size="xs" transform="capitalize" weight={600} mt="md">
            Best practices for successful prototypes
          </Text>

          <p className="lead">
            Flowbite is an open-source library of UI components built with the utility-first
            classNamees from Tailwind CSS. It also includes interactive elements such as dropdowns, modals,
            datepickers.
          </p>

          <p>
            Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way,
            you can think things through before committing to an actual design project.
          </p>

          <p>
            But then I found a <a href="https://flowbite.com">component library based on Tailwind CSS called
              Flowbite</a>. It comes with the most commonly used UI components, such as buttons, navigation
            bars, cards, form elements, and more which are conveniently built with the utility classNamees from
            Tailwind CSS.
          </p>

          <figure>
            <Image width={1000} height={324} src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt="demo image" />
            <figcaption className="text-center">Digital art by Anonymous</figcaption>
          </figure>

          <h2>Getting started with Flowbite</h2>

          <p>First of all you need to understand how Flowbite works. This library is not another framework.
            Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the
            documentation.
          </p>

          <p>It also includes a JavaScript file that enables interactive components, such as modals, dropdowns,
            and datepickers which you can optionally include into your project via CDN or NPM.
          </p>

          <p>You can check out the <a href="https://flowbite.com/docs/getting-started/quickstart/">quickstart
            guide</a> to explore the elements by including the CDN files into your project. But if you want
            to build a project with Flowbite I recommend you to follow the build tools steps so that you can
            purge and minify the generated CSS.
          </p>

          <p>You will also receive a lot of useful application UI, marketing UI, and e-commerce pages that can help
            you get started with your projects even faster. You can check out this <a href="https://flowbite.com/docs/components/tables/">comparison table</a> to better understand
            the differences between the open-source and pro version of Flowbite.
          </p>

          <h2>When does design come in handy?</h2>

          <p>While it might seem like extra work at a first glance, here are some key moments in which prototyping
            will come in handy:
          </p>

          <ol>
            <li><strong>Usability testing</strong>. Does your user know how to exit out of screens? Can they
              follow your intended user journey and buy something from the site you’ve designed? By running a
              usability test, you’ll be able to see how users will interact with your design once it’s live;
            </li>
            <li><strong>Involving stakeholders</strong>. Need to check if your GDPR consent boxes are displaying
              properly? Pass your prototype to your data protection team and they can test it for real;</li>
            <li><strong>Impressing a client</strong>. Prototypes can help explain or even sell your idea by
              providing your client with a hands-on experience;</li>
            <li><strong>Communicating your vision</strong>. By using an interactive medium to preview and test
              design elements, designers and developers can understand each other — and the project — better.
            </li>
          </ol>

          <h3>Laying the groundwork for best design</h3>

          <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way,
            you can think things through before committing to an actual design project.</p>

          <p>Lets start by including the CSS file inside the <code>head</code> tag of your HTML.</p>

          <h3>Understanding typography</h3>

          <h4>Type properties</h4>

          <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
            letters. A typeface represents shared patterns across a collection of letters.</p>

          <h4>Baseline</h4>

          <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
            letters. A typeface represents shared patterns across a collection of letters.</p>

          <h4>Measurement from the baseline</h4>

          <p>A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
            letters. A typeface represents shared patterns across a collection of letters.</p>

          <h3>Type classNameification</h3>

          <h4>Serif</h4>

          <p>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
            Typefaces with serifs are called serif typefaces. Serif fonts are classNameified as one of the
            following:</p>

          <h4>Old-Style serifs</h4>

          <ul>
            <li>Low contrast between thick and thin strokes</li>
            <li>Diagonal stress in the strokes</li>
            <li>Slanted serifs on lower-case ascenders</li>
          </ul>

          <ol>
            <li>Low contrast between thick and thin strokes</li>
            <li>Diagonal stress in the strokes</li>
            <li>Slanted serifs on lower-case ascenders</li>
          </ol>

          <h3>Laying the best for successful prototyping</h3>
          <p>A serif is a small shape or projection that appears at the beginning:</p>

          <blockquote>
            <p>Flowbite is just awesome. It contains tons of predesigned components and pages starting from
              login screen to complex dashboard. Perfect choice for your next SaaS application.</p>
          </blockquote>

          <h4>Code example</h4>
          <p>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
            Typefaces with serifs are called serif typefaces. Serif fonts are classNameified as one of the
            following:</p>

          <h4>Table example</h4>
          <p>A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
          </p>

          <h3>Best practices for setting up your prototype</h3>
          <p>
            <strong>Low fidelity or high fidelity?</strong> Fidelity refers to how close a prototype will be to
            the real deal. If you’re simply preparing a quick visual aid for a presentation, a low-fidelity
            prototype — like a wireframe with placeholder images and some basic text — would be more than
            enough. But if you’re going for more intricate usability testing, a high-fidelity prototype — with
            on-brand colors, fonts and imagery — could help get more pointed results.</p>

          <p>
            <strong>Consider your user</strong>. To create an intuitive user flow, try to think as your user
            would when interacting with your product. While you can fine-tune this during beta testing,
            considering your user’s needs and habits early on will save you time by setting you on the right
            path.
          </p>

          <p>
            <strong>Start from the inside out</strong>. A nice way to both organize your tasks and create more
            user-friendly prototypes is by building your prototypes ‘inside out’. Start by focusing on what will
            be important to your user, like a Buy now button or an image gallery, and list each element by order
            of priority. This way, you’ll be able to create a prototype that puts your users’ needs at the heart
            of your design.
          </p>
          <p>
            And there you have it! Everything you need to design and share prototypes — right in Flowbite Figma.
          </p>

        </article>

      </div>

    </main>
  )
}

export default Read
