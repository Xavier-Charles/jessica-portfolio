import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  InstagramIcon,
  LinkedInIcon,
  SubstackIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import { appImages, profileDetails, socialHandles, socialLinks } from '@/config'

const potraitImage = appImages.photos.potrait

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description: `I’m ${profileDetails.name}. I live in New York City, where I design the future.`,
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              width={1000}
              height={1000}
              src={potraitImage.src}
              alt={potraitImage.alt}
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m {profileDetails.name}. I live in Lagos, Nigeria, where I write.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              In the last five years of my life, I have put myself out there a
              lot and I'd like to use this opportunity to toot my own horn.
              Before I do that, I want to tell you a story.
            </p>
            <p>
              I was given a project to handle recently by a youth group. I
              drafted a powerful proposal that was accepted everywhere. I was
              pumped. My team was doing the work. However, when the time came to
              execute our proposal, everyone was too occupied and the rooms that
              need to open up kept telling me "Nos!!!" I became devastated. I
              did not get a good rest for weeks, I felt like a failure. But I
              didn't stop until I hacked it. I hacked it. Yep! I decided to toot
              my horn the day after I solved my problem because it made me
              realise that I am a problem-solver before I am anything else.
            </p>
            <p>
              I am a digital marketer and skilled content writer with a passion
              for creating engaging and impactful online experiences. With three
              years of professional experience in writing and six months of
              hands-on involvement in digital marketing, I bring a unique blend
              of creativity, strategic thinking, and analytical skills to drive
              results.
            </p>
            <p>
              As a content writer, I have honed my ability to craft compelling
              and persuasive copy across various platforms, including blogs,
              articles, social media posts, and website content. My writing
              style is conversational and versatile, allowing me to effectively
              communicate with my audience. Also, I have gained practical
              experience in developing and implementing effective strategies to
              enhance brand visibility, engage target audiences, and drive
              organic traffic. I am well-versed in utilizing analytics tools to
              track campaign performance, identify areas for improvement, and
              optimize marketing efforts for maximum impact.
            </p>
            <p>
              I am a lifelong learner and stay abreast of the latest trends and
              best practices in digital marketing and content creation. I hold a
              bachelor's degree in International Studies and Diplomacy where I
              graduated as the second-best graduating student in a class of over
              300 students. I am also an active volunteer who has engaged in
              various volunteering activities. I regularly participate in
              professional development programs to enhance my skills and
              knowledge and to put my best foot forward.
            </p>
            <p>
              If you're looking for a dedicated digital marketer and content
              writer who combines creativity, analytical thinking, and a
              results-driven mindset, I am confident that I can contribute to
              your organization's growth and success. Let's connect and explore
              how we can collaborate to achieve your marketing objectives.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href={socialLinks.twitter} icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink
              href={socialLinks.instagram}
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href={socialLinks.linkedIn}
              icon={LinkedInIcon}
              className="mt-4"
            >
              Connect on LinkedIn
            </SocialLink>
            <SocialLink
              href={socialLinks.substack}
              icon={SubstackIcon}
              className="mt-4 [&_svg]:mx-1 [&_svg]:w-4"
            >
              Follow on Substack
            </SocialLink>
            <SocialLink
              href={socialLinks.mail}
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              {socialHandles.mail}
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
