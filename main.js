let app = new Vue ({
    el: '#app',
    data: {
        inputValue: '',
        elementsList: [], //creo array vuoto in cui pushare elementi
        
    },
    methods: {
        addAndClean: function(){
            this.elementsList.push(this.inputValue);
            this.inputValue = "";
        },
        removeItem: function(element){
            this.elementsList.splice(element, 1)
        }
    }
})

