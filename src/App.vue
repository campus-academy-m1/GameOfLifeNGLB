<template>
  <div id="app">
    <div id="game">
      <div class="container">
        <h1 class="row skew-title">
          {{ name }}
        </h1>
      </div>
      <div class="main">
        <div class="control-panel">
          <button @click="play" class="btn btn-sm">
            <template v-if="!this.config.play">Play</template>
            <template v-else>Stop</template>
          </button>
          <button @click="clear" class="btn btn-sm">Clear</button>
          <div class="form-group">
            <label for="speed">Speed:</label>
            <input
              type="range"
              id="speed"
              min="10"
              max="1000"
              v-model="config.speed"
            />
            {{ config.speed }}
          </div>
          <div class="form-group">
            <label for="speed">Vertical:</label>
            <input
              type="number"
              v-model="vertical_count"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="speed">Horizontal:</label>
            <input
              type="number"
              v-model="horizontal_count"
              class="form-control"
            />
          </div>

          <span class="badge badge-success">
            {{ config.alive_count }} Alive
          </span>
          <span class="badge badge-danger">{{ config.dead_count }} Dead</span>
        </div>
        <table border="1">
          <thead>
            <tr>
              <td v-bind:key="n" v-for="n in horizontal_count + 1">
                <span>{{ n - 1 }}</span>
              </td>
            </tr>
          </thead>
          <tr v-bind:key="ver_index" v-for="(rows, ver_index) in grid">
            <td>
              <span>{{ ver_index + 1 }}</span>
            </td>
            <td
              class="LifeSquare"
              v-bind:key="hor_index"
              v-for="(value, hor_index) in rows"
              @click="liveGridItem(ver_index, hor_index)"
              :style="value.live ? 'background-color: ' + value.color : ''"
            ></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script src="vue.min.js"></script>
<script src="./scripts/functions.js"></script>

<style>
.LifeSquare {
  width: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
