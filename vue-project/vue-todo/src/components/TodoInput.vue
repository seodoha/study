<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem">
        <span class="addContainer" v-on:click="addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            newTodoItem: "",
        }
    },
    methods: {
        addTodo() {
            if (this.newTodoItem !== '') {
                var obj = {
                    completed: false,
                    item: this.newTodoItem
                };
                localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
                this.clearInput();
            }
        },
        clearInput() {
            this.newTodoItem = '';
        },
    },
}
</script>

<style scoped>
input:focus {
    outline: none;
}
.inputBox {
    background-color: #fff;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    text-align: left;
}
.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    text-align: center;
    float: right;
    background: linear-gradient(to right, #6478fb, #8763fb);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: #fff;
    vertical-align: middle;
}
</style>