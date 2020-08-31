$( function() {
  $( "#search-room__filter-price-slider-range" ).slider({
    range: true,
    min: 0,
    max: 15000,
    values: [ 5000, 10000 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( ui.values[ 0 ] + "₽" + " - " + ui.values[ 1 ] + "₽" );
    }
  });
  $( "#amount" ).val( $( "#search-room__filter-price-slider-range" ).slider( "values", 0 ) + "₽" + " - " +
    $( "#search-room__filter-price-slider-range" ).slider( "values", 1 ) + "₽" );
} );