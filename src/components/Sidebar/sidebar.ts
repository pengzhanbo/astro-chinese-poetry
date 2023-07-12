window.addEventListener(
  'DOMContentLoaded',
  () => {
    sidebarHandler()
    sidebarItemHandle()
  },
  false,
)

function sidebarItemHandle() {
  document.querySelector('.sidebar-item.is-active')?.scrollIntoView({
    block: 'center',
  })
  function sidebarHandler(ev: Event) {
    const target = ev.currentTarget as HTMLElement
    let sidebar = target
    // eslint-disable-next-line no-cond-assign, no-unmodified-loop-condition
    while ((sidebar = sidebar.parentNode as HTMLElement)) {
      if (sidebar.hasAttribute('data-collasible')) {
        sidebar.classList.toggle('collapsed')
        break
      }
    }
  }
  Array.from(
    document.querySelectorAll('.sidebar-item[data-collasible] .item'),
  ).forEach((item) => item.addEventListener('click', sidebarHandler, false))
}

function sidebarHandler() {
  const localNav = document.querySelector('#localNav')
  const sidebarEl = document.querySelector('#sidebarEl')
  const backdrop = document.querySelector('.backdrop')
  let sidebarOpen = false
  function setSidebar() {
    sidebarEl?.classList.toggle('open', sidebarOpen)
    localNav?.setAttribute('aria-expanded', String(sidebarOpen))
    if (sidebarOpen) {
      backdrop?.classList.add('show')
      setTimeout(() => backdrop?.classList.add('animation'), 0)
    } else {
      backdrop?.classList.remove('animation')
      setTimeout(() => backdrop?.classList.remove('show'), 250)
    }
  }
  localNav?.addEventListener(
    'click',
    () => {
      sidebarOpen = !sidebarOpen
      setSidebar()
    },
    false,
  )
  backdrop?.addEventListener('click', () => {
    sidebarOpen = false
    setSidebar()
  })
}
