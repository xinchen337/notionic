import { useEffect, useCallback, useState, useRef } from 'react'
import Link from 'next/link'
import BLOG from '@/blog.config'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import {
  HomeIcon,
  NewspaperIcon,
  CollectionIcon,
  SparklesIcon,
  SearchIcon,
  MenuIcon
} from '@heroicons/react/outline'
import Social from '../Common/Social.js'
import ThemeSwitcher from './ThemeSwitcher.js'
import LangSwitcher from './LangSwitcher.js'
import Logo from '@/components/Common/Logo'
import { motion } from 'framer-motion'

const NavBar = () => {
  const router = useRouter()
  const { locale } = useRouter()
  const t = lang[locale]
  const [showMenu, setShowMenu] = useState(false)

  let activeMenu = ''
  if (router.query.slug) {
    activeMenu = '/' + router.query.slug
  } else {
    activeMenu = router.pathname
  }

  const links = [
    {
      id: 0,
      name: t.NAV.INDEX,
      to: BLOG.path || '/',
      icon: <HomeIcon className='inline-block mb-1 h-5 w-5' />,
      show: true
    },
    {
      id: 1,
      name: t.NAV.NEWSLETTER,
      to: '/newsletter',
      icon: <NewspaperIcon className='inline-block mb-1 h-5 w-5' />,
      show: BLOG.pagesShow.newsletter
    },
    {
      id: 2,
      name: t.NAV.NOTES,
      to: '/notes',
      icon: <CollectionIcon className='inline-block mb-1 h-5 w-5' />,
      show: BLOG.pagesShow.notes
    },
    {
      id: 3,
      name: t.NAV.PROJECTS,
      to: '/projects',
      icon: <SparklesIcon className='inline-block mb-1 h-5 w-5' />,
      show: BLOG.pagesShow.projects
    },
    {
      id: 4,
      name: t.NAV.SEARCH,
      to: '/search',
      icon: <SearchIcon className='inline-block mb-1 h-5 w-5' />,
      show: true
    }
  ]
  return (
    <motion.div className='flex'>
      {/* Desktop Menu */}
      <ul className='hidden md:flex md:gap-1'>
        {links.map(
          (link) =>
            link.show && (
              <Link passHref href={link.to} key={link.id} scroll={false}>
                <li
                  className={`${
                    activeMenu === link.to ? 'bg-gray-200 dark:bg-gray-700' : ''
                  } hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg block py-1 px-2 nav`}
                >
                  <div className='font-light'>
                    {link.icon}
                    <span className='inline-block m-1'>{link.name}</span>
                  </div>
                </li>
              </Link>

            )
        )}
      </ul>

      <div className='nav-func-btn block'>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>

      {/* Mobile Phone Menu */}
      <div className='md:hidden mr-2 block '>
        <button
          type='button' aria-label='Menu'
          onClick={() => setShowMenu((showMenu) => !showMenu)}
          className='hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg block p-2 -mr-3 md:pb-3'
        >
          <MenuIcon className='inline-block mb-1 h-5 w-5' />
        </button>
        {showMenu && (
          <div className='absolute right-0 w-40 mr-4 mt-2 bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600 rounded-md shadow-lg outline-none'>
            <div className='py-1'>
              {links.map(
                (link) =>
                  link.show && (
                    <Link passHref key={link.id} href={link.to} scroll={false}>
                      <button
                        onClick={() => setShowMenu((showMenu) => !showMenu)}
                        className='text-left hover:bg-gray-100 dark:hover:bg-gray-600 font-light block justify-between w-full px-4 py-2 leading-5'
                      >
                        {link.icon}
                        <span className='m-1'>{link.name}</span>
                      </button>
                    </Link>
                  )
              )}
            </div>
            <div className='px-4 py-4'>
              <Social />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

const Header = ({ navBarTitle, fullWidth }) => {
  const [showTitle, setShowTitle] = useState(false)
  const useSticky = !BLOG.autoCollapsedNavBar
  const navRef = useRef(/** @type {HTMLDivElement} */ undefined)
  const sentinelRef = useRef(/** @type {HTMLDivElement} */ undefined)
  const handler = useCallback(([entry]) => {
    if (useSticky && navRef.current) {
      navRef.current?.classList.toggle('sticky-nav-full', !entry.isIntersecting)
    } else {
      navRef.current?.classList.add('remove-sticky')
    }
  }, [useSticky])

  useEffect(() => {
    const sentinelEl = sentinelRef.current
    const observer = new window.IntersectionObserver(handler)
    observer.observe(sentinelEl)

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 400) {
        setShowTitle(true)
      } else {
        setShowTitle(false)
      }
    })
    return () => {
      sentinelEl && observer.unobserve(sentinelEl)
    }
  }, [handler, sentinelRef])
  return (
    <>
      <div className='observer-element h-4 md:h-12' ref={sentinelRef}></div>
      <div
        className={`sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 ${
          !fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'
        }`}
        id='sticky-nav'
        ref={navRef}
      >
        <div className='flex items-center'>
          <Link passHref href='/' scroll={false} aria-label={BLOG.title}>
            <motion.div>
              <Logo className='h-6 hover:text-blue-500 dark:hover:text-blue-500 fill-current' />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M303.635 61L204.247 367.447H353.329L303.635 61Z" fill="black"/>
<path d="M440.294 131.4L295.353 318.08L150.412 131.4L186.553 508.247H278.788H371.023L440.294 131.4Z" fill="black"/>
<path d="M109 508.247H461" stroke="black" stroke-width="8.28235"/>
<path d="M363.682 222.506L299.494 307.4" stroke="white" stroke-width="8.28235"/>
</svg>

            </motion.div>
          </Link>
          {navBarTitle ? (
            <p
              className={`ml-2 font-medium ${
                !showTitle ? 'hidden' : 'hidden xl:block'
              }`}
            >
              {navBarTitle}
            </p>
          ) : (
            <p
              className={`ml-2 font-medium ${
                !showTitle ? 'hidden' : 'hidden xl:block'
              }`}
            >
              {BLOG.title},{' '}
              <span className='font-normal'>{BLOG.description}</span>
            </p>
          )}
        </div>
        <NavBar />
      </div>
    </>
  )
}

export default Header
