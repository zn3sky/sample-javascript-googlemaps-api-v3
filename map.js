function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 35.690921, lng: 139.700258},
		scrollwheel: false,
		zoom: 13
	});
	
	// マーカー画像を作成 
	var markerImg = new google.maps.MarkerImage( 
		"http://zn3sky.sakura.ne.jp/image/trainicon.png", 
		new google.maps.Size(24, 24), 
		new google.maps.Point(0, 0)
	); 
         	
	var stations = [ 
		['東京',35.681382,139.766084], 
		['神田',35.69169,139.770883], 
		['御茶ノ水',35.699855,139.763786], 
		['四ツ谷',35.686014,139.730667], 
		['新宿',35.690921,139.700258], 
		['中野',35.706032,139.665652], 
		['高円寺',35.705385,139.649867], 
		['阿佐ヶ谷',35.704773,139.635263], 
		['荻窪',35.704632,139.619981], 
		['西荻窪',35.703842,139.599361], 
		['吉祥寺',35.702811,139.579804], 
		['三鷹',35.702708,139.560831], 
		['武蔵境',35.70228,139.54489], 
		['東小金井',35.701743,139.524831], 
		['武蔵小金井',35.701351,139.50645], 
		['国分寺',35.700256,139.480257], 
		['西国分寺',35.699769,139.465714], 
		['国立',35.699002,139.446385], 
		['立川',35.697899,139.413957], 
		['日野',35.679245,139.393998], 
		['豊田',35.659502,139.381495], 
		['八王子',35.655641,139.338968], 
		['西八王子',35.656777,139.312517], 
		['高尾',35.642228,139.281787]
	]; 
	
	jQuery.each(stations, function() { 
		// マーカーを作成
		var latlng = new google.maps.LatLng(this[1], this[2]); 
		var marker = new google.maps.Marker({ 
			position: latlng, 
			map: map, 
			icon: markerImg,
			title: this[0]
		}); 
		// 吹き出し
		var infowindow = new google.maps.InfoWindow({
				content: this[0] + "駅"
		});
		// 吹き出しを開いた状態にする
		infowindow.open(map, marker);
	
	});
}