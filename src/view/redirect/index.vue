<script>
import { useRouter, useRoute } from 'vue-router'
import { h, defineComponent } from 'vue'

export default defineComponent({
  mounted() {
    const { params, query } = useRoute()
    const { path } = params
    const router = useRouter()
    router.replace({ path: `/${path}`, query })
  },
  render() {
    return h('div', {}) // avoid warning message
  }
})
</script>
