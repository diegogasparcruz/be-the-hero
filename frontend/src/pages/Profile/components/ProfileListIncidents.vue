<template>
  <div>
    <profile-list-incidents-item
      v-for="incident in incidents"
      :key="incident.id"
      :incident="incident"
    />

    <p v-if="incidents === null"> Não há casos cadastrados </p>
  </div>
</template>

<script>
import ProfileListIncidentsItem from "./ProfileListIncidentsItem";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("incidents");

export default {
  name: "ProfileListIncidents",
  components: {
    ProfileListIncidentsItem
  },
  computed: {
    ...mapState(["incidents"])
  },
  created() {
    this.loadIncidents();
  },
  methods: {
    ...mapActions(["loadIncidents"])
  }
}
</script>
