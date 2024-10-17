document.addEventListener("DOMContentLoaded", ()=>{
    const eList = document.createElement("ul");
    document.querySelector("main").appendChild(eList);

    function getEmails(){
        for(let i=0;i<10;i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response)=>{
                    const email = response.data.response;
                    const listEl = document.createElement("li");
                    listEl.textContent = email;
                    eList.appendChild(listEl);
                })
                .catch((error)=>{console.log(error);});
        }
    }
    getEmails();
})