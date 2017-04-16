<template>
     <div>
        <p>querybbbTab</p>
        <h3>{{tab.name}}</h3>
        <h3>{{tab.id}}</h3>
     </div>
</template>

<script>
    import QueryBrowserContainer from './QueryBrowserContainer.vue';
    export default {
        data: function () {
            return {
                databaseOptions: [],
            };
        },
        props: ['tab'],

        methods: {},
        components: {
            'app-querybrowsercontainer': QueryBrowserContainer
        }
    }
</script>