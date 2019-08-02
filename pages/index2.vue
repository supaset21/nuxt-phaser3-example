<template>
  <no-ssr>
    <Game />
  </no-ssr>
</template>


<script>
import Game from "@/components/Game2";
export default {
  components: { Game }
};
</script>


<style >
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
</style>
