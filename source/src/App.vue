<template>
  <div class="main">
    <div class="signin">
      <Signin></Signin>
    </div>
  </div>
</template>

<script>
import Signin from "./components/Signin";
export default {
  name: 'App',
  components: {
    Signin
  }
}
</script>
<style>
  * {
    margin:0;
    padding: 0;
    color: white;
    font-family: Rubik,Helvetica,Arial,serif;

  }
  .main {
    width: 100%;
    height: 100vh;
    background:#1a233a;
    font-family: Rubik,Helvetica,Arial,serif;
  }
  .signin {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
