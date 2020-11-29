<template>
  <div id="app">
    <header>
      <GlobalHeader/>
      <div class="global-header-placeholder"></div>
    </header>
    <main class="main">
      <div class="anchor-wrap">
        <AnchorLink v-for="i in demos" :key="i.id" :href="'#demo-item-'+i.id" :title="i.title" @onClick="anchorLinkTo"/>
      </div>
      <div class="main-content">
        <div class="demo-item" v-for="i in demos" :key="i.id" :id="'demo-item-'+i.id">{{i.title}}</div>
      </div>
    </main>
  </div>
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader'
import AnchorLink from '@/components/AnchorLink'
export default {
  name: 'App',
  components: {
    GlobalHeader,
    AnchorLink
  },
  data() {
    return {
      demos: [
        { id: 1, title: 'demo-1' },
        { id: 2, title: 'demo-2' },
        { id: 3, title: 'demo-3' },
        { id: 4, title: 'demo-4' },
        { id: 5, title: 'demo-5' },
        { id: 6, title: 'demo-6' },
      ]
    }
  },
  mounted() {
  },
  methods: {
    anchorLinkTo(el) {
      const main = document.querySelector('.main')
      const app = document.querySelector('#app')
      const target = document.querySelector(el)

      // 没有滚动条
      if (main.clientHeight < app.clientHeight) return

      // 目标元素到顶部的距离 - 头部 - main的padding
      const total = target.offsetTop - 64 - 16
      // 当前滚动距离和目标元素相距
      let distance = Math.abs(app.scrollTop - total)
      // 每次跳跃的距离： 平滑滚动，时长500ms，每10ms一跳，共50跳
      const step = distance / 50


      if (app.scrollTop < target.offsetTop) {
        smoothDown()
      } else {
        smoothUp()
      }

      function smoothDown() {
        if (distance > 0) {
          distance -= step
          app.scrollTop += step
          setTimeout(smoothDown, 10)
        } else {
          app.scrollTop = total
        }
      }

      function smoothUp() {
        if (distance > 0) {
          distance -= step
          app.scrollTop -= step
          setTimeout(smoothUp, 10)
        } else {
          app.scrollTop = total
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  overflow: auto;
}

main {
  padding: 16px;
}

.global-header-placeholder {
  height: 64px;
}

.main-content {
  margin: 0 calc(50% - 400px);
}

.anchor-wrap {
  position: fixed;
  left: 50%;
  top: 40%;
  display: flex;
  flex-direction: column;
  transform: translate(416px, -50%);
}

.demo-item {
  height: 800px;
  margin-bottom: 32px;
  padding: 16px;
  background-color: #ddd;
}
</style>
