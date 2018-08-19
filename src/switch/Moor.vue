<template>
    <div class="moor-switch">
        <button @click="handleOne">打印第一变量</button>
        <button @click="handleTwo">打印第二变量</button>
        <button @click="handleThree">打印第三变量</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'moor'
})
export default class Moor extends Vue {
    @Prop({ type: String, required: false, default: '' })
    onevalue;
    @Prop({ type: String,  required: false, default: '' })
    twovalue;
    @Prop({ type: String,  required: false, default: '' })
    threevalue;

    handleOne(value){
        console.log(this.onevalue);
    }
    handleTwo(value){
        console.log(this.twovalue);
    }
    handleThree(value){
        console.log(this.threevalue);
    }
}
</script>



<style lang="scss" scoped>
.moor-switch {
    display: inline-block;

    > span,
    > div {
        float: left;
    }

    input {
        display: none;
    }
}

.switch-box {
    width: 40px;
    height: 20px;
    background-color: rgb(19, 206, 102);
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 0 2px;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
    margin-left: 6px;

    &.closed {
        background-color: rgb(255, 73, 73);
    }

    span {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        display: inline-block;
        background-color: #fff;
        position: absolute;
        left: 22px;
        transition: 200ms;

        &.closed {
            left: 2px;
        }
    }
}
</style>
