<template>
    <tr>
        <td> {{index}} </td>
        <td> {{bug.title}} </td>
        <td> {{bug.priority}} </td>
        <td> <router-link :to="{ name: 'BugDetail', params: { id: bug._id }}">More details</router-link> </td>
    </tr>
</template>

<script>
export default {
    name:"Bug",
    props: {
        bug:{
            type: Object,
            required: true
        },
        index:{
            type: Number,
            required:true
        }
    }
}
</script>