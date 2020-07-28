var data = {
        items: 
        [
            {text: 'Pray', checked: true},
            {text: 'Clean House', checked: false}
        ],
    title: 'My Vue ToDo App',
    newItem: ''
    };

new Vue({
    el: '#app',
    data: data,
    methods: {
        addItem: function (){
            var text;

            text = this.newItem.trim();
            if (text){
                this.items.push({
                    text: text,
                    checked: false
                });
                this.newItem = '';
            }
        }
    }
});