<template>
  <div class="main">
    <div class="signin">
      <Signin v-if="!hideAuth" @userType="showView"></Signin>
      <ProjectOwner v-if="isPO"></ProjectOwner>
      <Developer-View v-if="isDev"></Developer-View>
      <Guest-View v-if="isGuest"></Guest-View>
    </div>
  </div>
</template>

<script>
import Signin from "./components/Signin";
import DeveloperView from "./components/Developer-View"
import GuestView from "./components/Guest-View"
import ProjectOwner from "./components/ProjectOwner"
export default {
  name: 'App',
  components: {
    Signin,
    ProjectOwner,
    DeveloperView,
    GuestView,
  },
  data(){
    return {
      isDev : false,
      isPO : false,
      isGuest : false,
      hideAuth : false

    }
  },
  methods: {
    showView(type) {
      switch(type) {
        case "dev":
          this.isDev = true;
          this.hideAuth = true;
          break;
        case "po":
          this.isPO = true;
          this.hideAuth = true;
          break;
        case "guest":
          this.isGuest = true;
          this.hideAuth = true;
          break;
      }
    }
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
