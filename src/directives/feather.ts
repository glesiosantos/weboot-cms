import feather from 'feather-icons'
import type { Directive } from 'vue'

export const featherDirective: Directive = {
  mounted() {
    feather.replace()
  },
  updated() {
    feather.replace()
  }
}
