<template>
  <div class="matches-list">
    <div v-for="(match, index) in currentMatches" :key="index">
        <hr>
        <div class="row">
          <div class="col-sm-5">
            <a> 
              <strong> {{ match.home_team.country }} </strong>
            </a>
          </div>
          <div class="col-sm-2"> 
            <strong> X </strong>
          </div>
          <div class="col-sm-5"> 
            <a> 
              <strong> {{ match.away_team.country }} </strong>
            </a>
          </div>
        </div>
    </div>

  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: "MatchesList",
  props: {},
  computed: {
    ...mapGetters(['matches', 'currentMatches']),
  },
  methods: {
  },
}

</script>
