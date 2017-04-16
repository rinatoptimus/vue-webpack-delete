<template>
     <div id="queryBrowserContainer">
        <p>queryBrowserContainer text</p>
        <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" v-for="tab in tabs" :class="{active:tab.isActive}">
                <a href="#" role="tab" data-toggle="tab" @click.stop.prevent="setActive(tab)">{{ tab.name }}</a>
            </li>
            <li>
                <button type="button" class="btn btn-primary" @click="openNewTab">New tab</button>
            </li>
        </ul>
        <div class="tab-content">
            <div v-for="tab in tabs" role="tabpanel" class="tab-pane" :class="{active:tab.isActive}">
                <app-querybrowsertab :tab="tab"></app-querybrowsertab>
            </div>
        </div>
        <pre>{{ $data | json }}</pre>
    </div>
</template>

<script>
    import QueryBrowserTab from './QueryBrowserTab.vue';
    export default {
        data: function(){
            return {
                tabs: [{
                    name: "tab1",
                    id : 0,
                    isActive: true
                }],
                activeTab: {}
                
            }    
        },


        ready: function () {
            this.setActive(this.tabs[0]);
        },

        methods: {
            setActive: function (tab) {
                var self = this;
                tab.isActive = true;
                this.activeTab = tab;
                /*this.activeTab.isActive = true;
                console.log("activeTab name=" + this.activeTab.name);*/
                this.tabs.forEach(function (tab) {
                    if (tab.id !== self.activeTab.id) { tab.isActive = false;}
                });
            },
            openNewTab: function () {
                newTab = {
                    name: "tab" + (this.tabs.length + 1),
                    id: this.tabs.length,
                    isActive: true
                };
                this.tabs.push(newTab);
                this.setActive(newTab);
                /*this.activeTab = newTab;
                console.log("### newtab name=" + newTab.name);*/

            },
            test: function() {
                alert('676767');
            },
            closeTab: function () {
                console.log("### CLOSE!");
            }
        }
    }
</script>