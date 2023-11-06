<script>
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  mounted() {
    const { params, query } = useRoute()
    const { path } = params
    const router = useRouter()
    router.replace({ path: `/${path}`, query })
  },
  render() {
    return h('div', {}) // avoid warning message
  },
})
</script>
