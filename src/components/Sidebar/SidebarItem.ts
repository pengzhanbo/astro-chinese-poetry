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
