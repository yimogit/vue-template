<template>
  <div id="app">
    <h2>组件</h2>
    <router-link to="/comps/loadmore">loadmore</router-link>
    <router-link to="/comps/vuex">vuex</router-link>
    <router-link to="/comps/croppeer">croppeer</router-link>
    <router-link to="/comps/previewer">previewer</router-link>
    <router-link to="/comps/loading">loading</router-link>
    <router-link to="/comps/popup">popup</router-link>
    <router-link to="/comps/toast">toast</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
