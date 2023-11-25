import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock'

window.addEventListener(
  'DOMContentLoaded',
  () => {
    navbarHandle()
    navScreenHandle()
    flyoutHandle()
    appearanceHandle()
  },
  false,
)

function navbarHandle() {
  const navbar = document.querySelector('#navbarEl')
  let scrolled: boolean | undefined
  window.addEventListener(
    'scroll',
    () => {
      const currentScroll = window.scrollY > 0
      if (currentScroll !== scrolled) {
        scrolled = currentScroll
        navbar?.classList.toggle('fill', currentScroll)
      }
    },
    { capture: false, passive: true },
  )
}

function navScreenHandle() {
  const hamburger = document.querySelector('#navbarHamburger')
  const navScreen = document.querySelector('#navScreen')
  const navScreenLinks = Array.from(
    document.querySelectorAll('.nav-screen-link-item'),
  )
  const navScreenGroup = Array.from(
    document.querySelectorAll('.nav-screen-menu-group'),
  )
  let active = false
  hamburger?.addEventListener('click', () => toggleScreen(), false)
  window.addEventListener('hashchange', closeScreen, false)
  navScreenLinks.forEach(link =>
    link.addEventListener('click', closeScreen, false),
  )

  navScreenGroup.forEach((group) => {
    let open = false
    group.addEventListener(
      'click',
      () => {
        open = !open
        group.classList.toggle('open', open)
        group.children[0].setAttribute('aria-expanded', String(open))
      },
      false,
    )
  })

  function toggleScreen() {
    if (active)
      closeScreen()
    else
      openScreen()
  }

  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen()
  }

  function openScreen() {
    toggle((active = true))
    window.addEventListener('resize', closeScreenOnTabletWindow)
  }

  function closeScreen() {
    toggle((active = false))
    window.removeEventListener('resize', closeScreenOnTabletWindow)
  }
  function toggle(active: boolean) {
    if (hamburger) {
      hamburger.classList.toggle('active', active)
      hamburger.setAttribute('aria-expanded', String(active))
    }
    if (active) {
      navScreen?.classList.add('show')
      disableBodyScroll(navScreen!, { reserveScrollBarGap: true })
      setTimeout(() => navScreen?.classList.add('animation'), 0)
    }
    else {
      navScreen?.classList.remove('animation')
      setTimeout(() => {
        navScreen?.classList.remove('show')
        clearAllBodyScrollLocks()
      }, 250)
    }
  }
}

function flyoutHandle() {
  const flyoutList = Array.from(document.querySelectorAll('.flyout-wrapper'))
  flyoutList.forEach((flyout) => {
    const button = flyout.querySelector('.button')
    flyout.addEventListener(
      'mouseenter',
      () => {
        button?.setAttribute('aria-expanded', 'true')
      },
      false,
    )
    flyout.addEventListener(
      'mouseleave',
      () => {
        button?.removeAttribute('aria-expanded')
      },
      false,
    )
    button?.addEventListener(
      'click',
      () => {
        if (button.hasAttribute('aria-expanded'))
          button.removeAttribute('aria-expanded')
        else
          button.setAttribute('aria-expanded', 'true')
      },
      false,
    )
  })

  document.addEventListener('focusin', () => {
    const activeEl = document.activeElement as HTMLElement
    flyoutList.forEach((flyout) => {
      if (flyout === activeEl || flyout.contains(activeEl))
        flyout.children[0].setAttribute('aria-expanded', 'true')
      else
        flyout.children[0].removeAttribute('aria-expanded')
    })
  })
}

function appearanceHandle() {
  const toggle = initAppearance()
  const appearanceList = document.querySelectorAll('.switch-appearance')
  Array.from(appearanceList).forEach((appearance) => {
    appearance.addEventListener('click', toggle, false)
  })
}

function initAppearance() {
  const query = window.matchMedia('(prefers-color-scheme: dark)')
  const classList = document.documentElement.classList

  let userPreference = localStorage.getItem('poetry-appearance')

  let isDark
    = userPreference === 'auto' || userPreference === null
      ? query.matches
      : userPreference === 'dark'

  query.onchange = (e) => {
    if (userPreference === 'auto')
      setClass((isDark = e.matches))
  }

  function toggle() {
    setClass((isDark = !isDark))

    userPreference = isDark
      ? query.matches
        ? 'auto'
        : 'dark'
      : query.matches
        ? 'light'
        : 'auto'

    localStorage.setItem('poetry-appearance', userPreference)
  }

  function setClass(dark: boolean): void {
    const css = document.createElement('style')
    css.type = 'text/css'
    css.appendChild(
      document.createTextNode(
        `:not(.switch-appearance):not(.switch-appearance *) {
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -o-transition: none !important;
  -ms-transition: none !important;
  transition: none !important;
}`,
      ),
    )
    document.head.appendChild(css)

    classList[dark ? 'add' : 'remove']('dark')

    const _ = window.getComputedStyle(css).opacity
    document.head.removeChild(css)
  }

  return toggle
}
