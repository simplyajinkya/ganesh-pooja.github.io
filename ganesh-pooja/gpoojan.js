	var can, ctx, audio, image, slide = [], voice = [], index = 0; maxSlides = 54, waitperiod = 5000, actDuration = 90;
	var serverurl='http://lic.atclix.com/jp_backend/winlp_check.php', Phpaction = "jpinsertrecord", Producerid = "1", Appname="JPG";

		$(document).ready(function() {

				$(document).bind("contextmenu",function(e){

				        return false;
				 });

				init();


				$("#prevbutton").live('click', function() {
					prevSlide();
				});

				$("#nextbutton").live('click', function() {
					nextSlide();
				});

				$("#home").live('pageshow', function(event, ui) {
					index = index;
					//alert("index to home:" + index);
					audio = document.getElementById("audio");
					//alert ("audio "+ audio);
					$("#audio").live("playing", audio.pause(), false);

				});

				$("#page2").live('pageshow', function(event, ui) {
					index = index;
					//alert("index on page 2:" + index);
					page2init();

				});

				 $("a.gotomain").click(function(){
					//index = $('[name=index]').val();
					index = 1;
					//alert("index from link :" + index);
					$.mobile.changePage('#page2');
					checknextbutton();
					checkprevbutton();

					return false;
				});

				$("a.gotomain2").click(function(){
					//index = $('[name=index]').val();
					index = 4;
					//alert("index from link :" + index);
					$.mobile.changePage('#page2');
					checknextbutton();
					checkprevbutton();
					return false;
				});

				$("a.gotomain3").click(function(){
					index = 8;
					$.mobile.changePage('#page2');
					checknextbutton();
					checkprevbutton();
					return false;
				});

				$("a.gotomain4").click(function(){
					index = 37;
					$.mobile.changePage('#page2');
					checknextbutton();
					checkprevbutton();
					return false;
				});

				$("a.gotomain5").click(function(){
					index = 38;
					$.mobile.changePage('#page2');
					checknextbutton();
					checkprevbutton();
					return false;
				});

				$("a.gotomain6").click(function(){
					index = 41;
					$.mobile.changePage('#page2');
					checknextbutton();
					checkprevbutton();
					return false;
				});

				$("a.gotomain7").click(function(){
					index = 44;
					$.mobile.changePage('#page2');
					checknextbutton();
					checkprevbutton();
					return false;
				});

				$("a.gotomain8").click(function(){
					index = 47;
					$.mobile.changePage('#page2');
					checknextbutton();
					checkprevbutton();
					return false;
				});

				 $("a.goback").click(function(){
					index = 0;
					$.mobile.changePage('#home');
					return false;
				});


				$("#regform").validate
				({
						rules: {
								 frmlocation: {
									 required : true,
									 maxlength : 50
								 	},
								 frmphone : {
									 digits : true,
									 maxlength : 15
									 },
								 frmuserid: {
								   required: true,
								   maxlength : 50,
								   email: true
								 }
							   },
						messages: {
								 frmlocation: {required : "Please enter your location"},
								 frmphone: {digits: "Please enter valid contact number"},
								 frmuserid: {
								   required: "Please enter your email address",
								   email: "Format Example: name@domain.com"
								 }
							   }
							,
							submitHandler: function(form)
							{
								xhr = new XMLHttpRequest();

								 $.ajax({
								   url: serverurl,
								   type: 'POST',
								   dataType: 'json',
								   crossDomain : true,
								   error: function() { window.location.replace("#register"); alert("Activation Failed! Please ensure that you are connected to Internet."); },
								   success: completeReg() ,
								   beforeSend: setHeader,
								});
							}
				});



				 function setHeader(xhr) {
				  xhr.setRequestHeader("Action", Phpaction);
				  xhr.setRequestHeader("Userid", document.getElementById("frmuserid").value );
				  xhr.setRequestHeader("Custphone", document.getElementById("frmphone").value );
				  xhr.setRequestHeader("Custlocation", document.getElementById("frmlocation").value );
				  xhr.setRequestHeader("Producerid", Producerid);
				  xhr.setRequestHeader("Appname", Appname);
				}


				function completeReg()
				{


					if(typeof(Storage)!=="undefined")
					  {
					  localStorage.activationFlag="1";
					  	var myDate=new Date();
					  	localStorage.lastvisitedDate=myDate.setDate(myDate.getDate()+ 0);
					  	//alert(myDate);
 						var expDate = myDate.setDate(myDate.getDate()+ actDuration);
 						localStorage.expiryDate=expDate;


 						//alert(myDate);

					 		window.location.replace("#home");
					 		alert("Activation will be done for a period of 90 days!");
					  }
					else
					  {
					  document.getElementById("result").innerHTML="Sorry, your browser does not support web storage.../n Please ensure that you are using latest chrome browser";
					  }

				}




				//////////////////////////////

				function init() {

					//alert("In init");
					audio = document.getElementById("audio");

					image = document.getElementById("image");

					//can = document.getElementById("can");

					//ctx = can.getContext("2d");


					//  PxLoader

					loader = new PxLoader();
					var pxImage;

					//////////////

					for ( i = 0; i < maxSlides; i++) {

						// get filenames into JavaScript

						slide[i]= document.createElement("img");

						slide[i] = "slides" + i + ".png";

						voice[i] = "slide" + i + ".ogg";

						// preload images
						image.src = "images/"+ slide[i];
						//alert (image.src);


						//  Load images using PxLoader
						pxImage = new PxLoaderImage(image.src, 'menu');
						loader.add(pxImage);

						///////////////////////
					}


					//  start loading images
					loader.start();
					///////////////////////

				}


				$("#welimage").load(function(){

						setTimeout(function() {
						redirect()}, waitperiod);
					});







				function redirect() {
					window.location.replace("#home");
					// if(typeof(Storage)!=="undefined")
					// 	  {
					// 		  	//alert ("inside redirect");

					// 	var today = new Date();
					// 	localStorage.latestDate=today.setDate(today.getDate()+ 0);

					// 		//localStorage.activationFlag=0;
					// 		//alert ("activationFlag in init= "+ localStorage.activationFlag);

					// 		if((typeof localStorage.expiryDate === 'undefined' || localStorage.expiryDate === '' || localStorage.expiryDate === null )
					// 		|| (typeof localStorage.lastvisitedDate === 'undefined' || localStorage.lastvisitedDate === '' || localStorage.lastvisitedDate === null ))
					// 		 	{
					// 				//alert("go to Register ");
					// 			window.location.replace("#register");


					// 			}
					// 		else{


					// 			//alert ("latest date: " + localStorage.latestDate + "/nlast visted date: " + localStorage.lastvisitedDate + "/nexpiry date: " + localStorage.expiryDate);

					// 				if (localStorage.latestDate > localStorage.lastvisitedDate)
					// 				{
					// 					//alert ("today is > last visited");
					// 					localStorage.lastvisitedDate=localStorage.latestDate;

					// 					 if (localStorage.latestDate < localStorage.expiryDate)
					// 							{window.location.replace("#home");}
					// 					  else
					// 						{
					// 							//localStorage.activationFlag=0;
					// 							alert ("Your license has expired");
					// 							window.close();
					// 						}
					// 				}
					// 				else
					// 				{
					// 					alert ("Current date-time is less than last visited date-time.");
					// 				}
					// 			}

					// 	 }
					// else{
					// 	document.getElementById("result").innerHTML="Sorry, your browser does not support web storage.../n Please ensure that you are using latest chrome browser";
					// 	}
				 }




				function page2init() {

					//alert('Inside Page2 init');

					image.src = "images/"+ slide[index];

					//alert("image source in page2init() : "+ image.src);
					//ctx.clearRect(0,0,can.width,can.height);
					//ctx.drawImage(image, 0, 0, can.width, can.height);
					document.getElementById("pageno").innerHTML="Page :" +index +" / "+ (maxSlides-1);
					audio.src = "audio/" + voice[index];
					// play new audio src
					audio.play();

					//audio.addEventListener("playing", start, false);

					audio.addEventListener("ended", next, false);

				}

				function start() {

					// respond to playing event only if index = 0
					//alert("inside start");

					//checknextbutton();
					//checkprevbutton();

					if (index == 0) {

						// set index to 1 and show next slide

						index = 1;
						if (index == 1) {
							document.getElementById('prevbutton').disabled = true;
						}

						image.src = slide[1];


						//ctx.drawImage(image, 0, 0, can.width, can.height);

						//alert("image.src =" + image.src);
					}

				}


				function nextSlide() {
					audio.pause();
					next();
				}

				function prevSlide() {
					audio.pause();
					previous();
				}

				function next() {

					// if audio for this slide ended, advance index

					index++;
					//alert("index =" + index);
					checknextbutton();

					if (index < maxSlides) {
						// increment slide image src
						image.src = "images/" + slide[index];
						//alert("image source in next() : "+ image.src);

						// increment audio src
						audio.src = "audio/" + voice[index];

						// play new audio src
						audio.play();

						// show new slide
						//ctx.clearRect(0,0,can.width,can.height);
						//ctx.drawImage(image, 0, 0, can.width, can.height);
						document.getElementById("pageno").innerHTML="Page :" +index +" / "+ (maxSlides-1);
					}



				}

				function checknextbutton(){

				//alert("Inside check next btn");
				// if last slide shown, reset index and audio src to start over
									//alert("In check next : " + (maxSlides - 1));
									//alert ("Index :" + index);
									if (index >= (maxSlides - 1)) {
										//$('#nextbutton').attr("disabled", "disabled");
										//$('#nextbutton').attr('disabled', 'disabled' ).addClass( 'ui-state-disabled' );
										document.getElementById('nextbutton').disabled = true;
										//alert(document.getElementById('nextbutton').disabled);

										//document.getElementById('nextbutton').style.display = 'none';
										//alert(document.getElementById('nextbutton').style.display);
										//$("#nextbutton").hide();
										//alert(index);
										//index = 0;
										//audio.src = voice[1];

									} else {
										document.getElementById('nextbutton').disabled = false;
										document.getElementById('prevbutton').disabled = false;
									}
						}


				function checkprevbutton()
				{
							//alert("Inside check prev btn");
							if (index <= 1) {
								//$('#prevbutton').attr("disabled", true);
								document.getElementById('prevbutton').disabled = true;
								//index = 0;
								audio.src = voice[1];
								//alert("disabled");
							} else {
								document.getElementById('prevbutton').disabled = false;
								document.getElementById('nextbutton').disabled = false;
							}
				}

				function previous() {

					// reduce index
					index--;
					//alert("Index : " + index);
					checkprevbutton();
					if (index > 0) {

						// decrement slide image src
						image.src = "images/"+ slide[index];
						//alert("image source in prev() : " +image.src);
						audio.src = "audio/"+ voice[index];

						// play new audio src
						audio.play();

						// show new slide
						//ctx.clearRect(0,0,can.width,can.height);
						//ctx.drawImage(image, 0, 0, can.width, can.height);
						document.getElementById("pageno").innerHTML="Page :" +index +" / "+ (maxSlides-1);

					}

				}


				///////////////////////////////////////

		});