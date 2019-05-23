// window.onload = function() {
//     document.getElementById("bookSubmit").addEventListener("click", async function(event) {
//         event.preventDefault();
//         const value = document.getElementById("bookInput").value;
//         if (value === "")
//             return;
//         console.log(value);
//     });
// }

let app= new Vue({
    el: '#app',
    data: {
        loading: false,
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
            //window.onload = function() {
            //     document.getElementById("bookSubmit").addEventListener("click", async function(event) {
            //         event.preventDefault();
                    
            //         if (value === "")
            //             return;
            //         console.log(value);
            //     });
            // const url1="https://openlibrary.org/search.json?q=" + value;
            try {
                // const response1 = await fetch(url1);
                // console.log("response",response1);
                // const json = await response1.json();
                this.loading = true;
                const value = document.getElementById("bookInput").value;
                const response = await axios.get('https://openlibrary.org/search.json?q=' + this.value);
                this.current = response.data;
                this.loading = false;
                //this.value = response.data.docs;
                let results ="";
                results += current.docs[0].title;
                
                document.getElementById("bookResults").innerHTML = results;
            } catch(error) {
                console.log(error);
            }
        },
        favorite() {
            this.books.push();
        },
    },
    computed: {
        bookResults() {
            //return this.books.docs[i];
        }
    }
});