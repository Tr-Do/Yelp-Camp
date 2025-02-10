console.log("📍 Campground data:", campground);

if (!campground.geometry || !campground.geometry.coordinates) {
    console.error("❌ Campground geometry is missing! Defaulting to a backup location.");
    campground.geometry = { coordinates: [-122.4194, 37.7749] };
}

console.log("✅ Map will be initialized at:", campground.geometry.coordinates);

mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: campground.geometry.coordinates,
    zoom: 9
});
