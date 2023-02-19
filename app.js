let whether = {
    apikey:"40c0db65c7b1f122e199e3ad2dfdcf57",
    fetchWhether:function(city){
        fetch( "https://api.openweathermap.org/data/2.5/weather?q="
        + city
        + "&units=metric&appid="
        + this.apikey
        )
        .then((response)=>{
            return response.json();
        })
        .then((data)=>this.showWheter(data));
    },
    showWheter:function(data){
        const {temp} = data.main;
        document.querySelector("#temp").innerHTML = temp + " &#8451;"
    }
}

let city = document.querySelector("#city");
city.addEventListener("change", function(){
    whether.fetchWhether(city.value)
})

