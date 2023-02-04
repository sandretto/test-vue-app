import axios from "axios";
import DataLoader from "../DataLoader/DataLoader.vue";

export default {
  name: "ItemsList",
  components: {
    DataLoader
  },
  data() {
    return {
      title: "",
      completed: false,
      itemsList: [],
      loaderActive: false,
    };
  },
  async mounted() {
    this.showLoader();
      setTimeout(async () => {
        await this.loadData();
        this.hideLoader();
      }, 5000);
  },
  methods: {
    async loadData() {
      let result = await axios.get("https://jsonplaceholder.typicode.com/todos");
      console.log(result.data);
      this.itemsList = result.data;
    },
    async refreshData () {
      this.itemsList = [];
      await this.loadData();
    },
    showLoader () {
      this.loaderActive = true;
    },
    hideLoader () {
      this.loaderActive = false;
    },
    toggleCheckbox() {
      console.log(this.checkbox);
      this.checkbox = !this.checkbox;
    },
    add() {
      const obj = {
        completed: this.completed,
        id: this.itemsList[this.itemsList.length - 1].id + 1,
        title: this.title,
        userId: 1,
      };
      this.itemsList.push(obj);
      this.title = "";
      this.completed = false;
      console.log(obj);
    },
    remove(id) {
      console.log(id);
      this.itemsList.splice(id, 1);
    },
  },
};
