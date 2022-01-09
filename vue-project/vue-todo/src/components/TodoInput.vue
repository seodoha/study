<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>

        <Modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">경고!<i class="fas fa-times" @click="showModal = false"></i></h3>
            <p slot="body">무언가를 입력하세요.</p>
        </Modal>
    </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
    data: function() {
        return {
            newTodoItem: "",
            showModal: false,
        }
    },
    methods: {
        addTodo() {
            if (this.newTodoItem !== '') {
                this.$emit('addTodoItem', this.newTodoItem);
                this.clearInput();
            } else {
                this.showModal = !this.showModal;
            }
        },
        clearInput() {
            this.newTodoItem = '';
        },
    },
    components: {
        Modal
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
    cursor: pointer;
}
.addBtn {
    color: #fff;
    vertical-align: middle;
}
.closeModalBtn {
    color: #42b983;
}
</style>