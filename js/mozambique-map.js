    var mapInfoClosed = true;


    function toggleMapBox(){
      if(mapInfoClosed){
        $( ".info" ).animate({marginLeft: "10px"}, 500 );
        $( ".buttonMapShowInfo" ).animate({opacity: "0"}, 500 );
        mapInfoClosed=false;
      }else{
        $( ".info" ).animate({
          marginLeft: "-360px"}, 500 );
        $( ".buttonMapShowInfo" ).animate({opacity: "1"}, 500 );
          mapInfoClosed=true;
      }
  }


    function loadMap() {
                    var southWest = new L.LatLng(-67, -55),
                    northEast = new L.LatLng(56, 84),
                    bounds = new L.LatLngBounds(southWest, northEast);

                    var redMarker = L.AwesomeMarkers.icon({
                        icon: 'icon-asterisk',
                        color: 'red'
                    });
                    var darkblueMarker = L.AwesomeMarkers.icon({
                        icon: 'icon-asterisk',
                        color: 'darkblue'
                    });
                    var purpleMarker = L.AwesomeMarkers.icon({
                        icon: 'icon-asterisk',
                        color: 'purple'
                    });
                    var blueMarker = L.AwesomeMarkers.icon({
                        icon: 'icon-asterisk',
                        color: 'blue'
                    });
                    var greenMarker = L.AwesomeMarkers.icon({
                        icon: 'icon-asterisk',
                        color: 'green'
                    });
                    var orangeMarker = L.AwesomeMarkers.icon({
                        icon: 'icon-asterisk',
                        color: 'orange'
                    });


                    var layerPress = new L.LayerGroup();
                    var layerAss = new L.LayerGroup();
                    var layerOther = new L.LayerGroup();
                    var layerGov = new L.LayerGroup();
                    var layerAcademia = new L.LayerGroup();
                    var layerCompanies = new L.LayerGroup();

                    var sql = new cartodb.SQL({
                        user: 'distant',
                        format: 'geojson'
                    });

                    var title = '';
                    var source_type= '';
                    var date= '';
                    var url= '';
                    var source= '';
                    var country= '';
                    var loc= '';
                    var language= '';


                    var map = L.mapbox.map('map', 'distant.map-rusvpsoz', {
                        //maxBounds: bounds,
                        maxZoom: 6,
                        minZoom: 2,
                        scrollWheelZoom: false,
                        layers: [layerPress, layerAcademia, layerAss, layerCompanies, layerGov]
                    }).setView([0, 25], 4); // centro: Congo

                    var oms = new OverlappingMarkerSpiderfier(map);
                    var fullscreenControl = new L.Control.Fullscreen();
                    fullscreenControl.addTo(map);
                    var legend = L.control({position: 'bottomright'});
                    

                    sql.execute("SELECT * FROM crowdsourced_map").done(function (geojson) {
                        L.geoJson(geojson, {
                            pointToLayer: function (feature, latlng) {
                                var ico;
                                // CAMBIA QUA!
                                if (feature.properties.source_type == "Civil Society") {
                                    ico = purpleMarker;
                                } else if (feature.properties.source_type == "Press") {
                                    ico = orangeMarker;
                                } else if (feature.properties.source_type == "Academia") {
                                    ico = redMarker;   
                                } else if (feature.properties.source_type == "Company") {
                                    ico = greenMarker;
                                } else if (feature.properties.source_type == "Institution") {
                                    ico = blueMarker;                                                  
                                } else {
                                    ico = darkblueMarker;
                                }

                                marker = L.marker(latlng, {
                                    icon: ico
                                });

                                marker.title = feature.properties.title;
                                marker.source_type = feature.properties.source_type;
                                marker.date = feature.properties.date;
                                marker.url = feature.properties.url;
                                marker.source = feature.properties.source_name;
                                marker.country = feature.properties.country;
                                marker.loc = feature.properties.location_city_district_or_province;
                                marker.language = feature.properties.language;

                                marker.desc = '<b><h3>' + marker.title + '</h3></b>Pubblication date: ' + marker.date +'<br>Location: <b>'+ marker.loc +', '+marker.country + '</b><br>Source: <a href=\''+marker.url+'\' target=\"_blank\">'+ marker.source + '</a><br> Source type: ' + marker.source_type + '<br> Language: ' + marker.language + '<br>' ;

                                marker.ico = ico;

                                if (marker.source_type == 'Civil Society') { 
                                  marker.addTo(layerAss);
                                } else if (marker.source_type == 'Press') { 
                                  marker.addTo(layerPress);
                                } else if (marker.source_type == 'Academia') { 
                                  marker.addTo(layerAcademia);
                                } else if (marker.source_type == 'Company') { 
                                  marker.addTo(layerCompanies);
                                } else if (marker.source_type == 'Institution') { 
                                  marker.addTo(layerGov);
                                }                              
                                else {
                                  marker.addTo(layerOther);
                                }
                                
                                oms.addMarker(marker); 

                                return marker;
                            }
                        });
                    });

                    oms.addListener('click', function (markers) {
                        var popup = new L.Popup();
                        popup.setContent(markers.desc);
                        popup.setLatLng(markers.getLatLng());
                        map.openPopup(popup);
                    });

                    oms.addListener('spiderfy', function(markers) {
                      for (var i = 0, len = markers.length; i < len; i ++) {
                        markers[i].setIcon(markers[i].ico);
                      }
                      map.closePopup();
                    });

                    
                    var overlayMaps = {
                        "Press": layerPress,
                        "Academia": layerAcademia,
                        "Civil Society": layerAss,
                        "Companies": layerCompanies,
                        "Institutions": layerGov,
                        "Other sources": layerOther
                    };  

                    L.control.layers(null, overlayMaps).addTo(map);

                    var info = L.control( { position: 'bottomleft' } );



                info.onAdd = function (map) {
                        this._div = L.DomUtil.create('div', ''); // create a div with a class 
                        this._div.innerHTML = "<div class=\"info\">" +
                                                                    " <h4>Explore the global debate on the \"land rush\"</h4>" +
                                                                    "        <p>" +
                                                                    "          To know more on large-scale land acquisitions, " +
                                                                    "          here is an interactive map displaying stories " +
                                                                    "          belonging to the global debate on the rush for " +
                                                                    "          land in Africa. The map embeds articles written " +
                                                                    "          by all players participating in the discussion," +
                                                                    "          documents by the academic world, reports by the " +
                                                                    "          international civil society, journalistic " +
                                                                    "          investigations as well as written " +
                                                                    "          contributions by companies and authorities. " +
                                                                    "          Anybody can contribute to the map by submitting " +
                                                                    "          a crowdsourcing form.<br>" +
                                                                    "        </p>" +
                                                                    "        <img src=\"images/map-legend.png\" style=\"padding-top:10px;\" />" +
                                                                    "        <br>" +
                                                                    "        <a class=\"mapfancybox fancybox.iframe\" href=\"form/form.html\" target=\"_blank\">" +
                                                                    "          <div class=\"credito\">" +
                                                                    "            <img src=\"ico/icoContribute.png\"/> " +
                                                                    "            Contribute" +
                                                                    "          </div>" +
                                                                    "        </a>" +
                                                                   "      </div>"+
                                                                    "   <div class=\"buttonMapShow\" onClick=\"javascript:toggleMapBox();\">"+
                                                                    "    </div>"+
                                                                    "   <div class=\"buttonMapShowInfo\" onClick=\"javascript:toggleMapBox();\">"+
                                                                    "           Show Information"+
                                                                    "   </div>"+
                                                                    "</div>";

                        return this._div;
                    };

                     map.addControl(info);

                }