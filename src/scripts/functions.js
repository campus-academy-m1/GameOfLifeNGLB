import Vue from "vue";
/* eslint-disable */
export default {
  name: "functions",
  components: {},
  data() {
    return {
      name: "Devops GameOfLife Nicolas Gerard - Lucas Brocheton",
      config: {
        play: false,
        speed: 1000,
        time: 0,
        alive_count: 0,
        dead_count: 0,
      },
      vertical_count: 25,
      horizontal_count: 30,
      grid: [],
      colors: ["#001f3f", "#0074D9", "#7FDBFF"],
    };
  },
  watch: {
    vertical_count: function(val) {
      this.vertical_count = parseInt(val);
      this.clear();
    },
    horizontal_count: function(val) {
      this.horizontal_count = parseInt(val);
      this.clear();
    },
  },
  created() {
    this.createFirstGrid();
  },
  methods: {
    getRndColor() {
      let min = 0;
      let max = this.colors.length;
      let number = Math.floor(Math.random() * (max - min)) + min;
      return this.colors[number];
    },
    createFirstGrid() {
      this.grid = [];

      for (let i = 0; i < this.vertical_count; i++) {
        const row = [];
        for (let j = 0; j < this.horizontal_count; j++) {
          let cell = {
            live: false,
            color: this.getRndColor(),
          };
          row.push(cell);
        }
        this.grid.push(row);
      }
    },
    generateGrid() {
      const nextGrid = this.nextGrid();

      for (let ver_index = 0; ver_index < this.vertical_count; ver_index++) {
        for (
          let hor_index = 0;
          hor_index < this.horizontal_count;
          hor_index++
        ) {
          let count = this.getNeighborsCount(ver_index, hor_index);
          let living = this.grid[ver_index][hor_index].live;
          let result = false;

          if (living && count < 2) result = false;
          if (living && (count === 2 || count === 3)) {
            result = true;
            if (nextGrid[ver_index][hor_index] === false) this.config.time += 1;
          }
          if (living && count > 3) result = false;
          if (!living && count === 3) {
            result = true;
            if (nextGrid[ver_index][hor_index].live === false)
              this.config.time += 1;
          }

          let cell = {
            live: result,
            color: this.getRndColor(),
          };

          nextGrid[ver_index][hor_index] = cell;
        }
      }

      this.grid = nextGrid;
    },
    nextGrid() {
      const newGrid = [];
      this.config.alive_count = this.config.dead_count = 0;
      for (let ver_index = 0; ver_index < this.grid.length; ver_index++) {
        newGrid[ver_index] = [];
        for (
          let hor_index = 0;
          hor_index < this.grid[ver_index].length;
          hor_index++
        ) {
          newGrid[ver_index][hor_index] = this.grid[ver_index][hor_index];
          if (this.grid[ver_index][hor_index].live === true) {
            this.config.alive_count += 1;
          } else {
            this.config.dead_count += 1;
          }
        }
      }

      return newGrid;
    },
    mod(a, b) {
      return ((a % b) + b) % b;
    },
    safeHor(hor_index) {
      return this.mod(hor_index, this.horizontal_count);
    },
    safeVer(ver_index) {
      return this.mod(ver_index, this.vertical_count);
    },
    getNeighbor(ver_index, hor_index) {
      return this.grid[this.safeVer(ver_index)][this.safeHor(hor_index)];
    },
    getNeighborsCount(ver_index, hor_index) {
      let count = 0;
      let neighbors = [];

      neighbors = [
        this.getNeighbor(ver_index + 0, hor_index - 1),
        this.getNeighbor(ver_index + 1, hor_index - 1),
        this.getNeighbor(ver_index + 1, hor_index - 0),
        this.getNeighbor(ver_index + 1, hor_index + 1),
        this.getNeighbor(ver_index + 0, hor_index + 1),
        this.getNeighbor(ver_index - 1, hor_index - 1),
        this.getNeighbor(ver_index - 1, hor_index - 0),
        this.getNeighbor(ver_index - 1, hor_index + 1),
      ];

      neighbors.forEach(function(cell) {
        if (cell.live) count++;
      });

      return count;
    },
    getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    intervalFunction() {
      if (this.config.play) {
        this.generateGrid();
        setTimeout(this.intervalFunction, this.config.speed);
      }
    },
    liveGridItem(ver_index, hor_index) {
      let cell = this.grid[ver_index][hor_index];
      cell.live = !cell.live;
      Vue.set(this.grid[ver_index], hor_index, cell);
    },
    play() {
      this.config.play = !this.config.play;
      setTimeout(this.intervalFunction(), 1000);
    },
    clear() {
      this.config.play = false;
      this.config.speed = 1000;
      this.config.alive_count = this.config.dead_count = this.config.time = 0;
      this.createFirstGrid();
    },
  },
};
