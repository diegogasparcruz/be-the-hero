<template>
  <div>
    <ul>
      <li>
        <strong>CASO:</strong>
        <p>{{ incident.title }}</p>

        <strong>DESCRIÇÃO:</strong>
        <p>{{ incident.description }}</p>

        <strong>VALOR:</strong>
        <p>{{ incident.value | toMoney }}</p>

        <button @click="handleDeleteIncident(incident.id)" type="button">
          X
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("incidents");

export default {
  name: "ProfileListIncidentsItem",
  props: {
    incident: Object
  },
  methods: {
    ...mapActions(["handleDeleteIncident"])
  }
};
</script>
