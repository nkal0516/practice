<template>
<tr>
    <td-component v-for ="(cellData,index) in rowData" :key="index"  :cell-index="index" :row-index="rowIndex"></td-component>
</tr>
</template>

<script>
import TdComponent from './TdComponent';
export default {
    components:{
        TdComponent,
    },
    data(){
        return{
                parent:'곰돌곰돌',
        };
    },
    computed: {
        rowData() {
            return this.$store.state.tableData[this.rowIndex];
        }
    },
   props: {
        rowData: Array,
        rowIndex: Number,
    },
}
</script>