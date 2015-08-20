$(function(){


    function pjaxPageLoad(){
        $('.widget').widgster();



    L.mapbox.accessToken = 'pk.eyJ1Ijoiam9lbHp5bGEiLCJhIjoiZDU4YTUxMDQ4NDM3OTZkZDA5OThiMzYzNjA0ODRmN2EifQ.CWKDLwKY-bUz_6XYT5bGpg';

    var map = L.mapbox.map('map', 
        'mapbox.satellite', 
        {
          center: [35.2269, -80.8433],
          zoom: 2,
          featureLayer: true,
          tileLayer: true,
          gridLayer: true
        });
    
        // add some markers
        L.marker([37.9, -77], {
            icon: L.mapbox.marker.icon({
                'marker-size': 'large',
                'marker-symbol': 'bus',
                'marker-color': '#fa0'
            })
        }).addTo(map);

        // with popup
        L.marker([10.9, -50], {
            icon: L.mapbox.marker.icon({
                'marker-size': 'large',
                'marker-symbol': 'bus',
                'marker-color': '#fa0'
            })
        // this should be a handlebars template
        }).addTo(map).bindPopup('<p>Hello world!<br />This is a nice popup.</p>');
        //.openPopup();




        // make a point via geojson
        var geoJSONExample = { "type": "FeatureCollection",
          "features": [
            { "type": "Feature",
              "geometry": {"type": "Point", "coordinates": [102.0, 0.5]},
              "properties": {"prop0": "value0"}
            }
          ]};

        var geoJSONExample1 = { "type": "FeatureCollection",
          "features": [
            { "type": "Feature",
              "geometry": {"type": "Point", "coordinates": [95.0, 10]},
              "properties": {"prop0": "value0"}
            }
          ]};

        L.geoJson(geoJSONExample, {
        pointToLayer: L.mapbox.marker.style,
        }).addTo(map);

        L.geoJson(geoJSONExample1, {
        pointToLayer: L.mapbox.marker.style,
        }).addTo(map);




    }

    pjaxPageLoad();
    SingApp.onPageLoad(pjaxPageLoad);

});