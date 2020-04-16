<template>
  <div class="new-incident-container">
    <div class="content">
      <section>
        <LogoImg />

        <h1>Cadastrar novo caso</h1>
        <p>
          Descreva o caso detalhadamente para encontrar um herói para resolver
          isso.
        </p>

        <router-link to="/profile" class="back-link">
          Voltar para home
        </router-link>
      </section>

      <form @submit.prevent="handleRegister">
        <input v-model="title" placeholder="Título do caso" />
        <textarea v-model="description" placeholder="Descrição" />
        <input v-model="value" placeholder="Valor em reais" />

        <button class="button" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import LogoImg from "../../components/LogoImg.vue";
import { createNamespacedHelpers } from "vuex";
import { createHelpers } from "vuex-map-fields";

const { mapFields } = createHelpers({
  getterType: `incidents/getField`,
  mutationType: `incidents/updateField`
});
const { mapActions } = createNamespacedHelpers("incidents");

export default {
  name: "NewIncidents",
  components: {
    LogoImg
  },
  computed: {
    ...mapFields([
      "incident.title",
      "incident.description",
      "incident.value"
    ])
  },
  methods: {
    ...mapActions(["handleRegister"])
  }
};
</script>

<style>
.new-incident-container {
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
}

.new-incident-container .content {
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.new-incident-container .content section {
  width: 100%;
  max-width: 380px;
}

.new-incident-container .content section h1 {
  margin: 64px 0 32px;
  font-size: 32px;
}

.new-incident-container .content section p {
  font-size: 18px;
  color: #737380;
  line-height: 32px;
}

.new-incident-container .content form {
  width: 100%;
  max-width: 450px;
}

.new-incident-container .content form textarea,
.new-incident-container .content form input {
  margin-top: 8px;
}
</style>
