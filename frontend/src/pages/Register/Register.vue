<template>
  <div class="register-container">
    <div class="content">
      <section>
        <LogoImg />

        <h1>Cadastro</h1>
        <p>
          Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
          os casos da sua ONG.
        </p>

        <router-link to="/" class="back-link">
          Voltar
        </router-link>
      </section>

      <form>
        <input placeholder="Nome da ONG" />
        <input type="email" placeholder="E-mail" />
        <input placeholder="Whatsapp" />
        <div class="input-group">
          <input placeholder="Cidade" />
          <input placeholder="UF" />
        </div>

        <button class="button" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import LogoImg from "../../components/LogoImg.vue";
export default {
  name: "Register",
  components: {
    LogoImg
  }
};
</script>

<style>
.register-container {
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
}

.register-container .content {
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.register-container .content section {
  width: 100%;
  max-width: 380px;
}

.register-container .content section h1 {
  margin: 64px 0 32px;
  font-size: 32px;
}

.register-container .content section p {
  font-size: 18px;
  color: #737380;
  line-height: 32px;
}

.register-container .content form {
  width: 100%;
  max-width: 450px;
}

.register-container .content form input {
  margin-top: 8px;
}

.register-container .content form .input-group {
  display: flex;
}

.register-container .content form .input-group input + input {
  margin-left: 8px;
}
</style>
