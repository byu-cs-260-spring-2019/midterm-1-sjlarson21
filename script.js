window.onload = function() {
    document.getElementById("bookSubmit").addEventListener("click", async function(event) {
        event.preventDefault();
        const value = document.getElementById("bookInput").value;
        if (value === "")
            return;
        console.log(value);
    });
}

let app= new Vue({
    el: '#app',
    data: {
        loading: true,
        current: {
            //if no info- don't display
            title: '',
            author: '',
            date: '',
            img: '',
        }
    },
    created() {
        this.quickbook();
    },
    methods: {
        async quickbook() {
            try {
                this.loading = true;
                const value = document.getElementById("bookInput").value;
                if (value === "")
                    return;
                console.log(value);
                const response = await axios.get('https://openlibrary.org/search.json?q=' + value);
                this.current = response.data;
                this.loading = false;
            } catch(error) {
                console.log(error);
            }
        },
    },
    computed: {

    }
});