$( document ).ready(function() {

    $("#form").submit(function (event) {
        event.preventDefault();
        var postcode_api_url = "https://api.postcodes.io/postcodes/";
        var postcode = event.target.postcode.value;
        var date = event.target.date.value;
        var get_location_url = postcode_api_url+postcode;

        $.get( get_location_url, function( response ) {

            var latitude = response.result.latitude;
            var longitude = response.result.longitude;
            var sun_activity_url = "https://api.sunrise-sunset.org/json";
            var get_sun_activity_url = sun_activity_url+"?lat="+latitude+"&lng="+longitude+date;

            $.get( get_sun_activity_url, function( response ) {
                var sunrise = response.results.sunrise;
                var sunset = response.results.sunset;

                $("#rise").html(sunrise)
                $("#set").html(sunset)
            });
        });
    });

});
