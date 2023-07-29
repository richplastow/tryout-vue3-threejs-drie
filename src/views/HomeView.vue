<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps<{
  fullPath: string
}>()
const { fullPath } = props

const route = useRouter()
if (fullPath.length > 2 && fullPath.startsWith('/?')) {
  // Normalise redirects from 404.html, where a double slash can appear.
  const p = fullPath.slice(0, 4) === '/?//' ? `/?/${fullPath.slice(4)}` : fullPath
  // Tidy up the URL when the query is essentially empty.
  if (p === '/?' || p === '/?/' || p === '/?//') {
    route.replace({ path: '/', query: {} })
  } else if (p === '/?/about') {
    route.replace({ path: '/about/' })
  } else if (p.startsWith('/?/about/?')) {
    route.replace({ path: '/about/', query: { [p.slice(10)]: null } })
  } else if (p.startsWith('/?/about/')) {
    route.replace({ path: '/about/', query: { [p.slice(9)]: null } })
  } else {
    console.log('Not Found!')    
  }
}

</script>

<template>
  <!--
    Parent element's width and height are automatically propagated to the renderer.
    This behavior can be disabled by the autoResize property on the Renderer.
    Disabling autoResize requires you to set renderer width and height manually.
    The following example makes the renderer full screen (and responsive).
  -->
  <div style="width: 100vh; height: 100vh;">
    <aside>
      {{ fullPath }}
    </aside>
    <!-- Renderer is a mandatory component wrapping up all the rendering -->
    <Renderer :autoResize="true">
      <!--
        At least one camera is required to render the scene.
        Using single camera makes it automatically renderer's default camera.
      -->
      <PerspectiveCamera :position="[1, 1, 1]" :up="[0, 0, 1]">
        <!-- Controls can be passed directly to the camera. -->
        <OrbitControls />
      </PerspectiveCamera>
      <!-- A scene containing objects to be rendered -->
      <Scene background="#f9f9f9">
        <!-- Mesh needs geometry and material -->
        <Mesh>
          <!-- Any mesh material can be passed to the mesh -->
          <MeshBasicMaterial color="blue" />
          <!-- Any triangular geometry can be passed to the mesh -->
          <BoxGeometry />
        </Mesh>
      </Scene>
    </Renderer>
  </div>
</template>

<style scoped>
aside {
  position: fixed;
  top: 5rem;
  left: 5rem;
  z-index: 10;
}
</style>
