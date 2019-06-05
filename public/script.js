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
        bookInput: '',
        current: {
            //if no info- don't display
            title: '',
            author: '',
            date: '',
            img: '',
        },
        favorites: {},
    },
    created() {
        this.quickbook();
    },
    methods: {
        async quickbook() {
            try {
                this.loading = true;

                const response = await axios.get('https://openlibrary.org/search.json?q=' + this.value);
                console.log(response.data);
                this.current = response.data;
                this.loading = false;
                //this.value = response.data.docs;

            } catch(error) {
                console.log(error);
            }
        },
        addFavorite() {
            //this.books.push();
            if(this.bookInput === ''){
                return;
            }
            this.favorites.push(this.bookInput);
        },
    },
    computed: {
        bookResults() {
            //return this.books.docs[i];
        },
    },
});

//window.onload = function() {
//     document.getElementById("bookSubmit").addEventListener("click", async function(event) {
//         event.preventDefault();
        
//         if (value === "")
//             return;
//         console.log(value);
//     });
// const url1="https://openlibrary.org/search.json?q=" + value;

// const response1 = await fetch(url1);
// console.log("response",response1);
// const json = await response1.json();

//const value = document.getElementById("bookInput").value;
//value = $("bookInput").val();
//var usrInput = document.getElementById("bookInput").value;
//const value = document.getElementById("bookInput").value;

// let results ="";
// results += current.docs[0].title;

//document.getElementById("bookResults").innerHTML = results;