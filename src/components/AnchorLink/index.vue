<template>
  <div class="anchor-link" @click="onClick">
    <div class="circle"></div>
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: "AnchorLink",
  props: {
    href: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
  },
  data() {
    return {}
  },
  computed: {},
  mounted() { },
  methods: {
    onClick() {
      this.$emit('onClick', this.href)
    }
  },
}
</script>

<style lang="scss" scoped>
.anchor-link {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}
.circle {
  width: 16px;
  height: 4px;
  border-radius: 20px;
  background: #8e8787;
  transition: background 0.5s;
}
.title {
  font-size: 12px;
  line-height: 17px;
  color: #8e8787;
  display: inline-block;
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 10px;
  font-weight: 600;
  line-height: 24px;
}
</style>
