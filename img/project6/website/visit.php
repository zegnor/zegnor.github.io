<?php include ("partials/header.php"); ?>
	<div class="main-content">
		<div class="row">
			<div class="column full"> <img class="confete" src="assets/img/confete.png" alt="confete" height="122" width="100"></img>
				<h1>We are open from Tuesday to Sunday: 10 am – 4 pm.</h1>
				
			
				
				<h1>Prices: </h1>
				<h1>Adults - DKK 88 with special discount of 20%.</h1>
				<h1>Kids - DKK 40 with special discount of 20%.</h1>
				<div id="map"></div>
				<script>
					function initMap() {
						var myLatLng = {
							lat: 55.450245
							, lng: 10.661063
						};
						var map = new google.maps.Map(document.getElementById('map'), {
							zoom: 15
							, center: myLatLng
						});
						var marker = new google.maps.Marker({
							position: myLatLng
							, map: map
							, title: 'Fjord & Baelt'
						});
					}
				</script> <a href="http://www.fjordbaelt.dk/" target="_blank" title="Fjord&Bælt">Check our website for more info.</a> </div>
				
				<iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showCalendars=0&amp;height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;src=ugd3efucquailqlgtf8qkq7ojg%40group.calendar.google.com&amp;color=%177f8b&amp;ctz=Europe%2FCopenhagen" style="border-width:0" width="900" height="600" frameborder="0" scrolling="no"></iframe>
		</div>
	</div>
	<?php include ("partials/footer.php"); ?>