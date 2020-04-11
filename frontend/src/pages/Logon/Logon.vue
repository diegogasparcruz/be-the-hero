<template>
  <div class="logon-container">
    <section class="form">
      <LogoImg />

      <form>
        <h1>Faça seu logon</h1>

        <input v-model="id" placeholder="Sua ID" />

        <button class="button" type="submit">Entrar</button>

        <router-link to="/register" class="back-link">
          Não tenho cadastro
        </router-link>
      </form>
    </section>

    <HeroesImg />
  </div>
</template>

<script>
import LogoImg from "../../components/LogoImg";
import HeroesImg from "../../components/HeroesImg";
export default {
  name: "Logon",
  components: {
    LogoImg,
    HeroesImg
  }
};
</script>

<style lang="stylus" scoped>
.logon-container{
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logon-container section.form{
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
}

.logon-container section.form form{
  margin-top: 100px;
}

.logon-container section.form form h1{
  font-size: 32px;
  margin-bottom: 32px;
}
</style>
