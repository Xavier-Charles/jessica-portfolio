import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'
import { SiteCreator, profileDetails } from '@/config'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} {profileDetails.name}. All
                rights reserved.
              </p>
              <a
                href={SiteCreator.url}
                className="text-sm text-zinc-400 underline dark:text-zinc-500"
              >
                Dev with ❤️ by {SiteCreator.name}
              </a>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
