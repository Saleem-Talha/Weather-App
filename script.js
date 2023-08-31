
        const apiKey = "b18ba9a4ac66d2141f896c5ee1736a80";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");
        const weatherStatus = document.querySelector(".weather-status");
        const cardColor = document.querySelector(".card");

        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

            if (response.status == 404) {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            } else {
                var data = await response.json();

                console.log(data);

                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
                document.querySelector(".weather-status").innerHTML = data.weather[0].main;

                if (data.weather[0].main == "Clouds") {
                    weatherIcon.src = "./assests/clouds.png";
                    cardColor.style.background = "linear-gradient(135deg, #78909c, #546e7a)";
                } else if (data.weather[0].main == "Clear") {
                    weatherIcon.src = "./assests/clear.png";
                    cardColor.style.background = "linear-gradient(135deg, #2196F3, #03A9F4)";
                } else if (data.weather[0].main == "Rain") {
                    weatherIcon.src = "./assests/rain.png";
                    cardColor.style.background = "linear-gradient(135deg, #607D8B, #455A64)";

                } else if (data.weather[0].main == "Drizzle") {
                    weatherIcon.src = "./assests/drizzle.png";
                    cardColor.style.background = "linear-gradient(135deg, #90A4AE, #607D8B)";
                } else if (data.weather[0].main == "Mist") {
                    weatherIcon.src = "./assests/mist.png";
                    cardColor.style.background = "linear-gradient(135deg, #E0E0E0, #B0B0B0)";
                }
                else if (data.weather[0].main == "Snow") {
                    weatherIcon.src = "./assests/snow.png";
                    cardColor.style.background = "linear-gradient(135deg, #E0E0E0, #FFFFFF)";
                }

                document.querySelector(".weather").style.display = "block";
                document.querySelector(".error").style.display = "none";
            }
        }

        searchBtn.addEventListener("click", () => {
            checkWeather(searchBox.value);
        });
   