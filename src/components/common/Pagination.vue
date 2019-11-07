<template>
  <div :class="{'hidden':hidden}" class="pagination-container">
    <el-pagination
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      @size-change="changeSize"
      @current-change="changePage"
    />
  </div>
</template>

<script>
import { scrollTo } from '@/utils/scroll-to'

export default {
  name: 'Pagination',
  props: {
    total: {
      required: true,
      type: Number
    },
    current: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 50, 100, 500]
      }
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    background: {
      type: Boolean,
      default: true
    },
    autoScroll: {
      type: Boolean,
      default: true
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.current
      },
      set(val) {
        this.$emit('update:current', val)
      }
    },
    pageSize: {
      get() {
        return this.size
      },
      set(val) {
        this.$emit('update:size', val)
      }
    }
  },
  methods: {
    // 每页现实条数改变
    changeSize(val) {
      this.$emit('pagination', { current: this.currentPage, size: val })
      if (this.autoScroll) {
        scrollTo(0, 500)
      }
    },
    // 页数改变
    changePage(val) {
      this.$emit('pagination', { current: val, size: this.pageSize })
      if (this.autoScroll) {
        scrollTo(0, 500)
      }
    }
  }
}
</script>

<style scoped>
.pagination-container {
  background: #fff;
  padding: 32px 16px;
}
.pagination-container.hidden {
  display: none;
}
</style>
