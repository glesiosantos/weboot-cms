import feather from 'feather-icons'

export default {
  mounted(el) {
    const icon = el.getAttribute('data-feather')
    if (icon && feather.icons[icon]) {
      el.innerHTML = feather.icons[icon].toSvg({
        class: el.getAttribute('class') || ''
      })
    }
  },
  updated(el) {
    const icon = el.getAttribute('data-feather')
    if (icon && feather.icons[icon]) {
      el.innerHTML = feather.icons[icon].toSvg({
        class: el.getAttribute('class') || ''
      })
    }
  }
}
