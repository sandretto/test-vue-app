import axios from "axios";

export default {
  name: "ItemsList",
  data() {
    return {
      title: "",
      completed: false,
      itemsList: [],
    };
  },
  async mounted() {
    let result = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log(result.data);
    this.itemsList = result.data;
  },
  methods: {
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
