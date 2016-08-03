var subTotalAmount=0;
var checking = new Array(74);
var datacontainer = new Array(249);
var i=0;
$(document).ready(function() {
	
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();
	$("#hidemenu").show();
	$("#featuredProductDiv").show();
	 $("#shippingAddressTbl").hide();
	 hideAllInfoTr();	
	 
	 $("#featuredProductsOne").click(function(){
		 hideDivs();
			$("#allProducts").hide();
			$("#sideSelectionWindow").hide();
			$(".productDescriptionDiv").show();
			hideDescription();
			
			$("#sweets1").show();
		});
		

		$("#featuredProductsTwo").click(function(){
			hideDivs();
			$("#allProducts").hide();
			$("#sideSelectionWindow").hide();
			$(".productDescriptionDiv").show();
			hideDescription();
			
			$("#sweets2").show();
		});


		$("#featuredProductsThree").click(function(){
			hideDivs();
			$("#allProducts").hide();
			$("#sideSelectionWindow").hide();
			$(".productDescriptionDiv").show();
			hideDescription();
			
			$("#sweets3").show();
		});


	 $("#btnBookToSavedata").click(function(){
		serverCallToSaveData(); 
	 });
	 
	 $("#chkSameAddress").click(function(){
	 $("#shippingAddressTbl").toggle();
	})
	 $(".cart-remove1").click(function(){
		 $("#hideimage1").hide();
		 var amounta=$("#amountofproduct1").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
		 
	 });
	 $(".cart-remove2").click(function(){
		 $("#hideimage2").hide();
		 var amounta=$("#amountofproduct2").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove3").click(function(){
		 $("#hideimage3").hide();
		 var amounta=$("#amountofproduct3").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove4").click(function(){
		 $("#hideimage4").hide();
		 var amounta=$("#amountofproduct4").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove5").click(function(){
		 $("#hideimage5").hide();
		 
		 var amounta=$("#amountofproduct5").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove6").click(function(){
		 $("#hideimage6").hide();
		 var amounta=$("#amountofproduct6").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove7").click(function(){
		 $("#hideimage7").hide();
		 var amounta=$("#amountofproduct7").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove8").click(function(){
		 $("#hideimage8").hide();
		 var amounta=$("#amountofproduct8").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove9").click(function(){
		 $("#hideimage9").hide();
		 var amounta=$("#amountofproduct9").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove10").click(function(){
		 $("#hideimage10").hide();
		 var amounta=$("#amountofproduct10").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove11").click(function(){
		 $("#hideimage11").hide();
		 var amounta=$("#amountofproduct11").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove12").click(function(){
		 $("#hideimage12").hide();
		 var amounta=$("#amountofproduct12").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove13").click(function(){
		 $("#hideimage13").hide();
		 var amounta=$("#amountofproduct13").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove14").click(function(){
		 $("#hideimage14").hide();
		 var amounta=$("#amountofproduct14").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove15").click(function(){
		 $("#hideimage15").hide();
		 var amounta=$("#amountofproduct15").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove16").click(function(){
		 $("#hideimage16").hide();
		 
		 var amounta=$("#amountofproduct16").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove17").click(function(){
		 $("#hideimage17").hide();
		 var amounta=$("#amountofproduct17").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove18").click(function(){
		 $("#hideimage18").hide();
		 
		 var amounta=$("#amountofproduct18").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove19").click(function(){
		 $("#hideimage19").hide();
		 
		 var amounta=$("#amountofproduct19").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove20").click(function(){
		 $("#hideimage20").hide();
		 
		 var amounta=$("#amountofproduct20").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove21").click(function(){
		 $("#hideimage21").hide();
		 
		 var amounta=$("#amountofproduct21").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove22").click(function(){
		 $("#hideimage22").hide();
		 
		 var amounta=$("#amountofproduct22").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove23").click(function(){
		 $("#hideimage23").hide();
		 
		 var amounta=$("#amountofproduct23").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove24").click(function(){
		 $("#hideimage24").hide();
		 
		 var amounta=$("#amountofproduct24").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove25").click(function(){
		 $("#hideimage25").hide();
		 
		 var amounta=$("#amountofproduct25").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove26").click(function(){
		 $("#hideimage26").hide();
		 
		 var amounta=$("#amountofproduct26").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove27").click(function(){
		 $("#hideimage27").hide();
		 
		 var amounta=$("#amountofproduct27").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove28").click(function(){
		 $("#hideimage28").hide();
		 
		 var amounta=$("#amountofproduct28").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove29").click(function(){
		 $("#hideimage29").hide();
		 
		 var amounta=$("#amountofproduct29").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove30").click(function(){
		 $("#hideimage30").hide();
		 
		 var amounta=$("#amountofproduct30").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove31").click(function(){
		 $("#hideimage31").hide();
		 
		 var amounta=$("#amountofproduct31").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove32").click(function(){
		 $("#hideimage32").hide();
		 
		 var amounta=$("#amountofproduct32").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove33").click(function(){
		 $("#hideimage33").hide();
		 
		 var amounta=$("#amountofproduct33").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove34").click(function(){
		 $("#hideimage34").hide();
		 var amounta=$("#amountofproduct34").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

		 
	 });
	 $(".cart-remove35").click(function(){
		 $("#hideimage35").hide();
		 
		 var amounta=$("#amountofproduct35").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove36").click(function(){
		 $("#hideimage36").hide();
		 
		 var amounta=$("#amountofproduct36").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove37").click(function(){
		 $("#hideimage37").hide();
		 
		 var amounta=$("#amountofproduct37").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove38").click(function(){
		 $("#hideimage38").hide();
		 var amounta=$("#amountofproduct38").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove39").click(function(){
		 $("#hideimage39").hide();		 
		 var amounta=$("#amountofproduct39").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove40").click(function(){
		 $("#hideimage40").hide();
		 
		 var amounta=$("#amountofproduct40").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove41").click(function(){
		 $("#hideimage41").hide();
		 
		 var amounta=$("#amountofproduct41").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove42").click(function(){
		 $("#hideimage42").hide();
		 
		 var amounta=$("#amountofproduct42").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove43").click(function(){
		 $("#hideimage43").hide();
		 
		 var amounta=$("#amountofproduct43").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);
	 });
	 $(".cart-remove44").click(function(){
		 $("#hideimage44").hide();
		 var amounta=$("#amountofproduct44").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

		 	 });
	 $(".cart-remove45").click(function(){
		 $("#hideimage45").hide();
		 var amounta=$("#amountofproduct45").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove46").click(function(){
		 $("#hideimage46").hide();
		 
		 var amounta=$("#amountofproduct46").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove47").click(function(){
		 $("#hideimage47").hide();
		 var amounta=$("#amountofproduct47").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove48").click(function(){
		 $("#hideimage48").hide();
		 
		 var amounta=$("#amountofproduct48").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove49").click(function(){
		 $("#hideimage49").hide();
		 
		 var amounta=$("#amountofproduct49").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove50").click(function(){
		 $("#hideimage50").hide();
		 
		 var amounta=$("#amountofproduct50").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove51").click(function(){
		 $("#hideimage51").hide();
		 
		 var amounta=$("#amountofproduct51").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove52").click(function(){
		 $("#hideimage52").hide();
		 var amounta=$("#amountofproduct52").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove53").click(function(){
		 $("#hideimage53").hide();
		 
		 var amounta=$("#amountofproduct53").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove54").click(function(){
		 $("#hideimage54").hide();
		 
		 var amounta=$("#amountofproduct54").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove55").click(function(){
		 $("#hideimage55").hide();
		 
		 var amounta=$("#amountofproduct55").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove56").click(function(){
		 $("#hideimage56").hide();
		 
		 var amounta=$("#amountofproduct56").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove57").click(function(){
		 $("#hideimage57").hide();
		 
		 var amounta=$("#amountofproduct57").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove58").click(function(){
		 $("#hideimage58").hide();
		 var amounta=$("#amountofproduct58").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove59").click(function(){
		 $("#hideimage59").hide();
		 var amounta=$("#amountofproduct59").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove60").click(function(){
		 $("#hideimage60").hide();
		 var amounta=$("#amountofproduct60").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove61").click(function(){
		 $("#hideimage61").hide();
		 var amounta=$("#amountofproduct61").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove62").click(function(){
		 $("#hideimage62").hide();
		 
		 var amounta=$("#amountofproduct62").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove63").click(function(){
		 $("#hideimage63").hide();
		 
		 var amounta=$("#amountofproduct63").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove64").click(function(){
		 $("#hideimage64").hide();
		 var amounta=$("#amountofproduct64").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove65").click(function(){
		 $("#hideimage65").hide();
		 
		 var amounta=$("#amountofproduct65").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove66").click(function(){
		 $("#hideimage66").hide();
		 
		 var amounta=$("#amountofproduct66").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove67").click(function(){
		 $("#hideimage67").hide();
		 var amounta=$("#amountofproduct67").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove68").click(function(){
		 $("#hideimage68").hide();
		 
		 var amounta=$("#amountofproduct68").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove69").click(function(){
		 $("#hideimage69").hide();
		 
		 var amounta=$("#amountofproduct69").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove70").click(function(){
		 $("#hideimage70").hide();
		 
		 var amounta=$("#amountofproduct70").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 
	 $(".cart-remove71").click(function(){
		 $("#hideimage71").hide();
		 var amounta=$("#amountofproduct71").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove72").click(function(){
		 $("#hideimage72").hide();
		 
		 var amounta=$("#amountofproduct72").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove73").click(function(){
		 $("#hideimage73").hide();
		 
		 var amounta=$("#amountofproduct73").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove74").click(function(){
		 $("#hideimage74").hide();
		 
		 var amounta=$("#amountofproduct74").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	 $(".cart-remove75").click(function(){
		 $("#hideimage75").hide();
		 
		 var amounta=$("#amountofproduct75").val().trim();
		 subTotalAmount = subTotalAmount -amounta;
		 $("#cart-subtotal-money").text(subTotalAmount);

	 });
	
	 
	 
	 $("#keepShopping").click(function(){
			hideDivs();
			showAllSubProducts();
			$("#viewAllProducts").show();
			$("#sideSelectionWindow").show();
			$("#allProducts").show();
		});
$("#returnToStore").click(function(){
	hideDivs();
	showAllSubProducts();
	$("#viewAllProducts").show();
	$("#sideSelectionWindow").show();
	$("#allProducts").show();
});
	 
	 $(".checkouta").click(function(){
		/*serverCallTosaveData();*/
		hideDivs();
		$("#hidemenu").hide();
		$("#bookingAddress").show();
	 });
	 
	 $("#btnCheckOutCLicked1").click(function(){
		   hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
	 
		$(".btnContinueShopClicked").click(function(){
			$("#hidemenu").show();
			$("#billingInfoDetais").hide();
			$("#imageSelectionDiv").hide();
			$("#allProducts").show();
			$("#viewAllProducts").show();
			
			
		});
		
		 $("#btnCheckOutCLicked2").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked3").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked4").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked5").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked6").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked7").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked8").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked9").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked10").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked11").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked12").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked13").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked14").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked15").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked16").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked17").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked18").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked19").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked20").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked21").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked22").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked23").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked24").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked25").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked26").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked27").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked28").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked29").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked30").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked31").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked32").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked33").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked34").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked35").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked36").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked37").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked38").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked39").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked40").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked41").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked42").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked43").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked44").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked45").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked46").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked47").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked48").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked49").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked50").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked51").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked52").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked53").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked54").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked55").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked56").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckoutClicked57").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked58").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked59").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked60").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked61").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked62").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked63").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked64").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked65").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked66").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked67").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked68").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked69").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked70").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked71").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked72").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked73").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked74").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked75").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked81").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked82").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked83").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked84").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked85").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked86").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked87").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
		 $("#btnCheckOutCLicked88").click(function(){
			 hideDivs();
			$("#billingInfoDetais").show();
			$("#imageSelectionDiv").hide();	
			$("#hidemenu").hide();
		});
});
function onclickmenubtn(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();		
}
function onclickmenubtna(){
	$("#hidemenu").hide();
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();		
}
function onclickmenubtnb(){
	if(confirm("If you open main page, all your shoping items will be cleared. Do you want to open?")==true){
	window.open("main.jsp");}
}
function onclickmenubtnc(){
	if(confirm("If you open OurStory page, all your shoping items will be cleared. Do you want to open?")==true){
	window.open("ourStory.jsp");}
}
function onclickmenubtnd(){
	if(confirm("If you open Contact Us page, all your shoping items will be cleared. Do you want to open?")==true){
	window.open("contactUs.jsp");}
}
function onclickmenubtne(){
	if(confirm("If you open Sale page, all your shoping items will be cleared. Do you want to open?")==true){
	window.open("sale.jsp");}
}

function addToCart1(){		
	var strQuantity = $("#imgQty1").val().trim();
	var addTocartText=$("#imgQuantity1").val().trim();
	var stronet;
	var inSelctionOne = document.getElementById("specifications1").selectedIndex;
   	if(inSelctionOne ==1){
		stronet="Egg";
		$("#specificationcheckout1").val("Egg");
	}else{
		stronet="EggLess";
		$("#specificationcheckout1").val("Eggless");}
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage1").show();
	$(".cart-quantity1").val(strQuantity);
	$("#amountofproduct1").val(totalamount);
	checking[0] = "1";
	datacontainer[0] = "BANANA WALNUT MUFFINS";
	datacontainer[1] = strQuantity;
	datacontainer[2] = stronet;
	datacontainer[3] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	 i=document.getElementById('addTocarttest1').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}

function addToCart2(){		
	var strQuantity = $("#imgQty2").val().trim();
	var addTocartText=$("#imgQuantity2").val().trim();
	var stronet;
	var inSelctionOne = document.getElementById("specifications2").selectedIndex;
   	if(inSelctionOne ==1){
		stronet="Egg";
		$("#specificationcheckout2").val("Egg");
	}else{
		stronet="EggLess";
		$("#specificationcheckout2").val("Eggless");}
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage2").show();
	$(".cart-quantity2").val(strQuantity);
	$("#amountofproduct2").val(totalamount);
	checking[1] = "1";
	datacontainer[4] = "Blueberry Muffins";
	datacontainer[5] = strQuantity;
	datacontainer[6] = stronet;
	datacontainer[7] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest2').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}

function addToCart3(){		
	var strQuantity = $("#imgQty3").val().trim();
	var addTocartText=$("#imgQuantity3").val().trim();
	var stronet;
	var inSelctionOne = document.getElementById("specifications3").selectedIndex;
   	if(inSelctionOne ==1){
		stronet="Egg";
		$("#specificationcheckout3").val("Egg");
	}else{
		stronet="EggLess";
		$("#specificationcheckout3").val("Eggless");}
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage3").show();
	$(".cart-quantity3").val(strQuantity);
	$("#amountofproduct3").val(totalamount);
	checking[2] = "1";
	datacontainer[8] = "Brownie Muffins";
	datacontainer[9] = strQuantity;
	datacontainer[10] = stronet;
	datacontainer[11] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest3').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart4(){		
	var strQuantity = $("#imgQty4").val().trim();
	var addTocartText=$("#imgQuantity4").val().trim();
	var stronet;
	var inSelctionOne = document.getElementById("specifications4").selectedIndex;
   	if(inSelctionOne ==1){
		stronet="Egg";
		$("#specificationcheckout4").val("Egg");
	}else{
		stronet="EggLess";
		$("#specificationcheckout4").val("Eggless");}
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage4").show();
	$(".cart-quantity4").val(strQuantity);
	$("#amountofproduct4").val(totalamount);
	checking[3] = "1";
	datacontainer[12] = "Chocolate Cupcake";
	datacontainer[13] = strQuantity;
	datacontainer[14] = stronet;
	datacontainer[15] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest4').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}

function addToCart5(){		
	var strQuantity = $("#imgQty5").val().trim();
	var addTocartText=$("#imgQuantity5").val().trim();
	var stronet;
	var inSelctionOne = document.getElementById("specifications5").selectedIndex;
   	if(inSelctionOne ==1){
		stronet="Egg";
		$("#specificationcheckout6").val("Egg");
	}else{
		stronet="EggLess";
		$("#specificationcheckout6").val("Eggless");}
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage6").show();
	$(".cart-quantity6").val(strQuantity);
	$("#amountofproduct6").val(totalamount);
	checking[4] = "1";
	datacontainer[16] = "Lemon Cupcake";
	datacontainer[17] = strQuantity;
	datacontainer[18] = stronet;
	datacontainer[19] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest5').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart6(){		
	var strQuantity = $("#imgQty6").val().trim();
	var addTocartText=$("#imgQuantity6").val().trim();
	var stronet;
	var inSelctionOne = document.getElementById("specifications6").selectedIndex;
   	if(inSelctionOne ==1){
		stronet="Egg";
		$("#specificationcheckout7").val("Egg");
	}else{
		stronet="EggLess";
		$("#specificationcheckout7").val("Eggless");}
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage7").show();
	$(".cart-quantity7").val(strQuantity);
	$("#amountofproduct7").val(totalamount);
	checking[5] = "1";
	datacontainer[20] = "Orange Muffins";
	datacontainer[21] = strQuantity;
	datacontainer[22] = stronet;
	datacontainer[23] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest6').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart7(){		
	var strQuantity = $("#imgQty7").val().trim();
	var addTocartText=$("#imgQuantity7").val().trim();
	var stronet;
	var inSelctionOne = document.getElementById("specifications7").selectedIndex;
   	if(inSelctionOne ==1){
		stronet="Egg";
		$("#specificationcheckout9").val("Egg");
	}else{
		stronet="EggLess";
		$("#specificationcheckout9").val("Eggless");}
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage9").show();
	$(".cart-quantity9").val(strQuantity);
	$("#amountofproduct9").val(totalamount);
	checking[6] = "1";
	datacontainer[24] = "Pinapple cupcakes";
	datacontainer[25] = strQuantity;
	datacontainer[26] = stronet;
	datacontainer[27] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest7').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}

function addToCart8(){		
	var strQuantity = $("#imgQty8").val().trim();
	var addTocartText=$("#imgQuantity8").val().trim();
	var stronet;
	var inSelctionOne = document.getElementById("specifications8").selectedIndex;
   	if(inSelctionOne ==1){
		stronet="Egg";
		$("#specificationcheckout10").val("Egg");
	}else{
		stronet="EggLess";
		$("#specificationcheckout10").val("Eggless");}
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage10").show();
	$(".cart-quantity10").val(strQuantity);
	$("#amountofproduct10").val(totalamount);
	checking[7] = "1";
	datacontainer[28] = "Plain Venilla  cupcakes Muffins";
	datacontainer[29] = strQuantity;
	datacontainer[30] = stronet;
	datacontainer[31] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest8').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}

function addToCart9(){		
	var strQuantity = $("#imgQty9").val().trim();
	var addTocartText=$("#imgQuantity9").val().trim();
	var stronet;
	var inSelctionOne = document.getElementById("specifications9").selectedIndex;
   	if(inSelctionOne ==1){
		stronet="Egg";
		$("#specificationcheckout11").val("Egg");
	}else{
		stronet="EggLess";
		$("#specificationcheckout11").val("Eggless");}
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage11").show();
	$(".cart-quantity11").val(strQuantity);
	$("#amountofproduct11").val(totalamount);
	checking[8] = "1";
	datacontainer[32] = "Red Velvet cupcakes";
	datacontainer[33] = strQuantity;
	datacontainer[34] = stronet;
	datacontainer[35] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest9').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart10(){		
	var strQuantity = $("#imgQty10").val().trim();
	var addTocartText=$("#imgQuantity10").val().trim();
	var stronet;
	var inSelctionOne = document.getElementById("specifications10").selectedIndex;
   	if(inSelctionOne ==1){
		stronet="Egg";
		$("#specificationcheckout12").val("Egg");
	}else{
		stronet="EggLess";
		$("#specificationcheckout12").val("Eggless");}
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage12").show();
	$(".cart-quantity12").val(strQuantity);
	$("#amountofproduct12").val(totalamount);
	checking[9] = "1";
	datacontainer[36] = "Strawberry  cupcakes";
	datacontainer[37] = strQuantity;
	datacontainer[38] = stronet;
	datacontainer[39] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest10').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart11(){		
	var strQuantity = $("#imgQty11").val().trim();
	var addTocartText=$("#imgQuantity11").val().trim();
	var stronet;
	var inSelctionOne = document.getElementById("specifications11").selectedIndex;
   	if(inSelctionOne ==1){
		stronet="Egg";
		$("#specificationcheckout13").val("Egg");
	}else{
		stronet="EggLess";
		$("#specificationcheckout13").val("Eggless");}
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage13").show();
	$(".cart-quantity13").val(strQuantity);
	$("#amountofproduct13").val(totalamount);
	checking[10] = "1";
	datacontainer[40] = "Venilla Tuttifruits  cupcakes";
	datacontainer[41] = strQuantity;
	datacontainer[42] = stronet;
	datacontainer[43] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest11').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart12(){		
	var strQuantity = $("#imgQty12").val().trim();
	var addTocartText=$("#imgQuantity12").val().trim();
	var stronet;
	var inSelctionOne = document.getElementById("specifications12").selectedIndex;
   	if(inSelctionOne ==1){
		stronet="Egg";
		$("#specificationcheckout14").val("Egg");
	}else{
		stronet="EggLess";
		$("#specificationcheckout14").val("Eggless");}
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage14").show();
	$(".cart-quantity14").val(strQuantity);
	$("#amountofproduct14").val(totalamount);
	checking[11] = "1";
	datacontainer[44] = "Choco Chip cupcakes with cream";
	datacontainer[45] = strQuantity;
	datacontainer[46] = stronet;
	datacontainer[47] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest12').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart13(){		
	var strQuantity = $("#imgQty13").val().trim();
	var addTocartText=$("#imgQuantity13").val().trim();
	var stronet;
	var inSelctionOne = document.getElementById("specifications13").selectedIndex;
   	if(inSelctionOne ==1){
		stronet="Egg";
		$("#specificationcheckout15").val("Egg");
	}else{
		stronet="EggLess";
		$("#specificationcheckout15").val("Eggless");}
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage15").show();
	$(".cart-quantity15").val(strQuantity);
	$("#amountofproduct15").val(totalamount);
	checking[12] = "1";
	datacontainer[48] = "Choco cream cupcakes";
	datacontainer[49] = strQuantity;
	datacontainer[50] = stronet;
	datacontainer[51] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest13').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart14(){		
	var strQuantity = $("#imgQty14").val().trim();
	var addTocartText=$("#imgQuantity14").val().trim();
	var stronet;
	var inSelctionOne = document.getElementById("specifications14").selectedIndex;
   	if(inSelctionOne ==1){
		stronet="Egg";
		$("#specificationcheckout16").val("Egg");
	}else{
		stronet="EggLess";
		$("#specificationcheckout16").val("Eggless");}
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage16").show();
	$(".cart-quantity16").val(strQuantity);
	$("#amountofproduct16").val(totalamount);
	checking[13] = "1";
	datacontainer[52] = "Coconut cupcakes";
	datacontainer[53] = strQuantity;
	datacontainer[54] = stronet;
	datacontainer[55] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest14').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}


function addToCart15(){		
	var strQuantity = $("#imgQty15").val().trim();
	var addTocartText=$("#imgQuantity15").val().trim();
	var stronet;
	var inSelctionOne = document.getElementById("specifications15").selectedIndex;
   	if(inSelctionOne ==1){
		stronet="Egg";
		$("#specificationcheckout17").val("Egg");
	}else{
		stronet="EggLess";
		$("#specificationcheckout17").val("Eggless");}
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage17").show();
	$(".cart-quantity17").val(strQuantity);
	$("#amountofproduct17").val(totalamount);
	checking[14] = "1";
	datacontainer[56] = "Lemon cream cupcakes";
	datacontainer[57] = strQuantity;
	datacontainer[58] = stronet;
	datacontainer[59] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest15').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}

/*
function addToCart15(){		
	var strQuantity = $("#imgQty15").val().trim();
	var addTocartText=$("#imgQuantity15").val().trim();
	var stronet;
	var inSelctionOne = document.getElementById("specifications15").selectedIndex;
   	if(inSelctionOne ==1){
		stronet="Egg";
		$("#specificationcheckout17").val("Egg");
	}else{
		stronet="EggLess";
		$("#specificationcheckout17").val("Eggless");}
	var totalamount =strQuantity*addTocartText;
addTocartText
	$("#hideimage17").show();
	$(".cart-quantity17").val(strQuantity);
	$("#amountofproduct17").val(totalamount);
	checking[14] = "1";
	datacontainer[56] = "Lemon cream cupcakes";
	datacontainer[57] = strQuantity;
	datacontainer[58] = stronet;
	datacontainer[59] = totalamount;
		
		document.getElementById('cart-subtotal-money').value;
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest15').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
*/function addToCart16(){		
	var strQuantity = $("#imgQty16").val().trim();
	var addTocartText=$("#imgQuantity16").val().trim();
	var stronet;
	var inSelctionOne = document.getElementById("specifications16").selectedIndex;
   	if(inSelctionOne ==1){
		stronet="Egg";
		$("#specificationcheckout18").val("Egg");
	}else{
		stronet="EggLess";
		$("#specificationcheckout18").val("Eggless");}
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage18").show();
	$(".cart-quantity18").val(strQuantity);
	$("#amountofproduct18").val(totalamount);
	checking[15] = "1";
	datacontainer[60] = "Mocha Cream Chocolate Cupcake";
	datacontainer[61] = strQuantity;
	datacontainer[62] = stronet;
	datacontainer[63] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest16').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}

function addToCart17(){		
	var strQuantity = $("#imgQty17").val().trim();
	var addTocartText=$("#imgQuantity17").val().trim();
	var stronet;
	var inSelctionOne = document.getElementById("specifications17").selectedIndex;
   	if(inSelctionOne ==1){
		stronet="Egg";
		$("#specificationcheckout19").val("Egg");
	}else{
		stronet="EggLess";
		$("#specificationcheckout19").val("Eggless");}
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage19").show();
	$(".cart-quantity19").val(strQuantity);
	$("#amountofproduct19").val(totalamount);
	checking[16] = "1";
	datacontainer[64] = "Orange With Cream CUpcake";
	datacontainer[65] = strQuantity;
	datacontainer[66] = stronet;
	datacontainer[67] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest17').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}

function addToCart18(){		
	var strQuantity = $("#imgQty18").val().trim();
	var addTocartText=$("#imgQuantity18").val().trim();
	var stronet;
	var inSelctionOne = document.getElementById("specifications18").selectedIndex;
   	if(inSelctionOne ==1){
		stronet="Egg";
		$("#specificationcheckout20").val("Egg");
	}else{
		stronet="EggLess";
		$("#specificationcheckout20").val("Eggless");}
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage20").show();
	$(".cart-quantity20").val(strQuantity);
	$("#amountofproduct20").val(totalamount);
	checking[17] = "1";
	datacontainer[68] = "Pinapple cream Cupcakes";
	datacontainer[69] = strQuantity;
	datacontainer[70] = stronet;
	datacontainer[71] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest18').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}

function addToCart19(){		
	var strQuantity = $("#imgQty19").val().trim();
	var addTocartText=$("#imgQuantity19").val().trim();
	var stronet;
	var inSelctionOne = document.getElementById("specifications19").selectedIndex;
   	if(inSelctionOne ==1){
		stronet="Egg";
		$("#specificationcheckout21").val("Egg");
	}else{
		stronet="EggLess";
		$("#specificationcheckout21").val("Eggless");}
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage21").show();
	$(".cart-quantity21").val(strQuantity);
	$("#amountofproduct21").val(totalamount);
	checking[18] = "1";
	datacontainer[72] = "Raspberry Cream Muffins";
	datacontainer[73] = strQuantity;
	datacontainer[74] = stronet;
	datacontainer[75] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest19').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}

function addToCart20(){		
	var strQuantity = $("#imgQty20").val().trim();
	var addTocartText=$("#imgQuantity20").val().trim();
	var stronet;
	var inSelctionOne = document.getElementById("specifications20").selectedIndex;
   	if(inSelctionOne ==1){
		stronet="Egg";
		$("#specificationcheckout22").val("Egg");
	}else{
		stronet="EggLess";
		$("#specificationcheckout22").val("Eggless");}
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage22").show();
	$(".cart-quantity22").val(strQuantity);
	$("#amountofproduct22").val(totalamount);
	checking[19] = "1";
	datacontainer[76] = "Red valvet cream cupcake";
	datacontainer[77] = strQuantity;
	datacontainer[78] = stronet;
	datacontainer[79] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest20').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart21(){		
	var strQuantity = $("#imgQty21").val().trim();
	var addTocartText=$("#imgQuantity21").val().trim();
	var stronet;
	var inSelctionOne = document.getElementById("specifications21").selectedIndex;
   	if(inSelctionOne ==1){
		stronet="Egg";
		$("#specificationcheckout23").val("Egg");
	}else{
		stronet="EggLess";
		$("#specificationcheckout23").val("Eggless");}
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage23").show();
	$(".cart-quantity23").val(strQuantity);
	$("#amountofproduct23").val(totalamount);
	checking[20] = "1";
	datacontainer[80] = "Strawberry cream cupcake";
	datacontainer[81] = strQuantity;
	datacontainer[82] = stronet;
	datacontainer[83] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest21').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart22(){		
	var strQuantity = $("#imgQty22").val().trim();
	var addTocartText=$("#imgQuantity22").val().trim();
	var stronet;
	var inSelctionOne = document.getElementById("specifications22").selectedIndex;
   	if(inSelctionOne ==1){
		stronet="Egg";
		$("#specificationcheckout24").val("Egg");
	}else{
		stronet="EggLess";
		$("#specificationcheckout24").val("Eggless");}
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage24").show();
	$(".cart-quantity24").val(strQuantity);
	$("#amountofproduct24").val(totalamount);
	checking[21] = "1";
	datacontainer[84] = "Vanilla  cupcake with butter cream";
	datacontainer[85] = strQuantity;
	datacontainer[86] = stronet;
	datacontainer[87] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest22').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart23(){		
	var strQuantity = $("#imgQty23").val().trim();
	var addTocartText=$("#imgQuantity23").val().trim();
	var stronet;
	var inSelctionOne = document.getElementById("specifications23").selectedIndex;
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage25").show();
	$(".cart-quantity25").val(strQuantity);
	$("#amountofproduct25").val(totalamount);
	checking[22] = "1";
	datacontainer[88] = "Organa Rich Mango";
	datacontainer[89] = strQuantity;
	
	datacontainer[90] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest23').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart24(){		
	var strQuantity = $("#imgQty24").val().trim();
	var addTocartText=$("#imgQuantity24").val().trim();
	var stronet;
	var inSelctionOne = document.getElementById("specifications24").selectedIndex;
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage26").show();
	$(".cart-quantity26").val(strQuantity);
	$("#amountofproduct26").val(totalamount);
	checking[23] = "1";
	datacontainer[92] = "Aval|Poha|Atukkulu mixture";
	datacontainer[93] = strQuantity;
	
	datacontainer[94] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest24').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart25(){		
	var strQuantity = $("#imgQty25").val().trim();
	var addTocartText=$("#imgQuantity25").val().trim();
	var stronet;
	
   
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage27").show();
	$(".cart-quantity27").val(strQuantity);
	$("#amountofproduct27").val(totalamount);
	checking[24] = "1";
	datacontainer[96] = "Chekodile|Kodubale";
	datacontainer[97] = strQuantity;
	
	datacontainer[99] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest25').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart76(){		
	var strQuantity = $("#imgQty76").val().trim();
	var addTocartText=$("#imgQuantity26").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage28").show();
	$(".cart-quantity28").val(strQuantity);
	$("#amountofproduct28").val(totalamount);
	checking[25] = "1";
	datacontainer[100] = "Chekkule|Nippat|Thattai";
	datacontainer[101] = strQuantity;
	
	datacontainer[102] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest76').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}


function addToCart27(){		
	var strQuantity = $("#imgQty27").val().trim();
	var addTocartText=$("#imgQuantity27").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage30").show();
	$(".cart-quantity30").val(strQuantity);
	$("#amountofproduct30").val(totalamount);
	checking[26] = "1";
	datacontainer[103] = "Diamond Savoury cuts";
	datacontainer[104] = strQuantity;
	
	datacontainer[105] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest27').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}


function addToCart28(){		
	var strQuantity = $("#imgQty28").val().trim();
	var addTocartText=$("#imgQuantity28").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage31").show();
	$(".cart-quantity31").val(strQuantity);
	$("#amountofproduct31").val(totalamount);
	checking[27] = "1";
	datacontainer[106] = "Kara Boondi";
	datacontainer[107] = strQuantity;
	
	datacontainer[108] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest28').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart29(){		
	var strQuantity = $("#imgQty29").val().trim();
	var addTocartText=$("#imgQuantity29").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage32").show();
	$(".cart-quantity32").val(strQuantity);
	$("#amountofproduct32").val(totalamount);
	checking[28] = "1";
	datacontainer[109] = "Murukku|Chekralu|chakli";
	datacontainer[110] = strQuantity;
	
	datacontainer[111] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest29').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}

function addToCart30(){		
	var strQuantity = $("#imgQty30").val().trim();
	var addTocartText=$("#imgQuantity30").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage33").show();
	$(".cart-quantity33").val(strQuantity);
	$("#amountofproduct33").val(totalamount);
	checking[29] = "1";
	datacontainer[112] = "Organa Mixed Fruit Juice";
	datacontainer[113] = strQuantity;
	
	datacontainer[114] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest30').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart31(){		
	var strQuantity = $("#imgQty31").val().trim();
	var addTocartText=$("#imgQuantity31").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage34").show();
	$(".cart-quantity34").val(strQuantity);
	$("#amountofproduct34").val(totalamount);
	checking[30] = "1";
	datacontainer[115] = "Organa Refreshing Apple";
	datacontainer[116] = strQuantity;
	
	datacontainer[117] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest31').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart32(){		
	var strQuantity = $("#imgQty32").val().trim();
	var addTocartText=$("#imgQuantity32").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage35").show();
	$(".cart-quantity35").val(strQuantity);
	$("#amountofproduct35").val(totalamount);
	checking[31] = "1";
	datacontainer[118] = "Organa Rich Guava";
	datacontainer[119] = strQuantity;
	
	datacontainer[120] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest32').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart33(){		
	var strQuantity = $("#imgQty33").val().trim();
	var addTocartText=$("#imgQuantity33").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage36").show();
	$(".cart-quantity36").val(strQuantity);
	$("#amountofproduct36").val(totalamount);
	checking[32] = "1";
	datacontainer[121] = "Ribbon Chakli|Murukku";
	datacontainer[122] = strQuantity;
	
	datacontainer[123] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest33').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart35(){		
	var strQuantity = $("#imgQty35").val().trim();
	var addTocartText=$("#imgQuantity34").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage37").show();
	$(".cart-quantity37").val(strQuantity);
	$("#amountofproduct37").val(totalamount);
	checking[33] = "1";
	datacontainer[124] = "Sev";
	datacontainer[135] = strQuantity;
	
	datacontainer[126] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest35').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart77(){		
	var strQuantity = $("#imgQty77").val().trim();
	var addTocartText=$("#imgQuantity35").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage38").show();
	$(".cart-quantity38").val(strQuantity);
	$("#amountofproduct38").val(totalamount);
	checking[34] = "1";
	datacontainer[127] = "Corriander Podi";
	datacontainer[128] = strQuantity;
	
	datacontainer[129] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest77').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart36(){		
	var strQuantity = $("#imgQty36").val().trim();
	var addTocartText=$("#imgQuantity36").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage39").show();
	$(".cart-quantity39").val(strQuantity);
	$("#amountofproduct39").val(totalamount);
	checking[35] = "1";
	datacontainer[131] = "Curry leaf podi";
	datacontainer[132] = strQuantity;
	
	datacontainer[133] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest36').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart37(){		
	var strQuantity = $("#imgQty37").val().trim();
	var addTocartText=$("#imgQuantity37").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage40").show();
	$(".cart-quantity40").val(strQuantity);
	$("#amountofproduct40").val(totalamount);
	checking[36] = "1";
	datacontainer[134] = "Gavvalu|Sweets";
	datacontainer[135] = strQuantity;
	
	datacontainer[136] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest37').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart39(){		
	var strQuantity = $("#imgQty39").val().trim();
	var addTocartText=$("#imgQuantity39").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage41").show();
	$(".cart-quantity41").val(strQuantity);
	$("#amountofproduct41").val(totalamount);
	checking[37] = "1";
	datacontainer[137] = "Pudina Podi";
	datacontainer[138] = strQuantity;
	
	datacontainer[139] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest39').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart40(){		
	var strQuantity = $("#imgQty40").val().trim();
	var addTocartText=$("#imgQuantity40").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage42").show();
	$(".cart-quantity42").val(strQuantity);
	$("#amountofproduct42").val(totalamount);
	checking[38] = "1";
	datacontainer[140] = "Senagappa Podi";
	datacontainer[141] = strQuantity;
	
	datacontainer[142] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest40').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart41(){		
	var strQuantity = $("#imgQty41").val().trim();
	var addTocartText=$("#imgQuantity41").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage43").show();
	$(".cart-quantity43").val(strQuantity);
	$("#amountofproduct43").val(totalamount);
	checking[39] = "1";
	datacontainer[143] = "Sweet Daimond cuts";
	datacontainer[144] = strQuantity;
	
	datacontainer[145] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest41').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart42(){		
	var strQuantity = $("#imgQty42").val().trim();
	var addTocartText=$("#imgQuantity42").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage44").show();
	$(".cart-quantity44").val(strQuantity);
	$("#amountofproduct44").val(totalamount);
	checking[40] = "1";
	datacontainer[146] = "Boondi Laddu";
	datacontainer[147] = strQuantity;
	
	datacontainer[148] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest42').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart43(){		
	var strQuantity = $("#imgQty43").val().trim();
	var addTocartText=$("#imgQuantity43").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage45").show();
	$(".cart-quantity45").val(strQuantity);
	$("#amountofproduct45").val(totalamount);
	checking[41] = "1";
	datacontainer[149] = "Booralu|Adirasam|Appam";
	datacontainer[150] = strQuantity;
	
	datacontainer[151] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest43').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart45(){		
	var strQuantity = $("#imgQty45").val().trim();
	var addTocartText=$("#imgQuantity44").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage47").show();
	$(".cart-quantity47").val(strQuantity);
	$("#amountofproduct47").val(totalamount);
	checking[42] = "1";
	datacontainer[152] = "Groundnut Pakoda";
	datacontainer[153] = strQuantity;
	
	datacontainer[154] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest45').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart46(){		
	var strQuantity = $("#imgQty46").val().trim();
	var addTocartText=$("#imgQuantity45").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage48").show();
	$(".cart-quantity48").val(strQuantity);
	$("#amountofproduct48").val(totalamount);
	checking[43] = "1";
	datacontainer[153] = "Kajji Kayalu|gujiya";
	datacontainer[154] = strQuantity;
	
	datacontainer[155] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest45').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart47(){		
	var strQuantity = $("#imgQty47").val().trim();
	var addTocartText=$("#imgQuantity46").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage49").show();
	$(".cart-quantity49").val(strQuantity);
	$("#amountofproduct49").val(totalamount);
	checking[44] = "1";
	datacontainer[156] = "Potato Chips";
	datacontainer[157] = strQuantity;
	
	datacontainer[158] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest47').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart48(){		
	var strQuantity = $("#imgQty48").val().trim();
	var addTocartText=$("#imgQuantity47").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage50").show();
	$(".cart-quantity50").val(strQuantity);
	$("#amountofproduct50").val(totalamount);
	checking[45] = "1";
	datacontainer[159] = "Ravva|sujji laddu";
	datacontainer[160] = strQuantity;
	
	datacontainer[161] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest48').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart49(){		
	var strQuantity = $("#imgQty49").val().trim();
	var addTocartText=$("#imgQuantity48").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage51").show();
	$(".cart-quantity51").val(strQuantity);
	$("#amountofproduct51").val(totalamount);
	checking[46] = "1";
	datacontainer[162] = "Venna Vendula|butter balls";
	datacontainer[163] = strQuantity;
	
	datacontainer[164] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest49').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart51(){		
	var strQuantity = $("#imgQty51").val().trim();
	var addTocartText=$("#imgQuantity50").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage53").show();
	$(".cart-quantity53").val(strQuantity);
	$("#amountofproduct53").val(totalamount);
	checking[47] = "1";
	datacontainer[165] = "Mini Kajji Kayalu";
	datacontainer[166] = strQuantity;
	
	datacontainer[167] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest51').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart52(){		
	var strQuantity = $("#imgQty52").val().trim();
	var addTocartText=$("#imgQuantity51").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage54").show();
	$(".cart-quantity54").val(strQuantity);
	$("#amountofproduct54").val(totalamount);
	checking[48] = "1";
	datacontainer[168] = "Panasa Thonalu";
	datacontainer[169] = strQuantity;
	
	datacontainer[170] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest52').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart53(){		
	var strQuantity = $("#imgQty53").val().trim();
	var addTocartText=$("#imgQuantity52").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage55").show();
	$(".cart-quantity55").val(strQuantity);
	$("#amountofproduct55").val(totalamount);
	checking[49] = "1";
	datacontainer[171] = "Sunnundalu|Urad Dal Laddu";
	datacontainer[172] = strQuantity;
	
	datacontainer[173] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest53').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart54(){		
	var strQuantity = $("#imgQty54").val().trim();
	var addTocartText=$("#imgQuantity53").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage56").show();
	$(".cart-quantity56").val(strQuantity);
	$("#amountofproduct56").val(totalamount);
	checking[50] = "1";
	datacontainer[174] = "Ulavacharu";
	datacontainer[175] = strQuantity;
	
	datacontainer[176] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest54').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart55(){		
	var strQuantity = $("#imgQty55").val().trim();
	var addTocartText=$("#imgQuantity54").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage57").show();
	$(".cart-quantity57").val(strQuantity);
	$("#amountofproduct57").val(totalamount);
	checking[51] = "1";
	datacontainer[177] = "Amla|Usiri pickle";
	datacontainer[178] = strQuantity;
	
	datacontainer[179] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest55').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart56(){		
	var strQuantity = $("#imgQty56").val().trim();
	var addTocartText=$("#imgQuantity55").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage58").show();
	$(".cart-quantity58").val(strQuantity);
	$("#amountofproduct58").val(totalamount);
	checking[52] = "1";
	datacontainer[180] = "Bitter Gourd Pickle";
	datacontainer[181] = strQuantity;
	
	datacontainer[182] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest56').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart57(){		
	var strQuantity = $("#imgQty57").val().trim();
	var addTocartText=$("#imgQuantity56").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage59").show();
	$(".cart-quantity59").val(strQuantity);
	$("#amountofproduct59").val(totalamount);
	checking[53] = "1";
	datacontainer[100] = "Brinjal Pickle";
	datacontainer[101] = strQuantity;
	
	datacontainer[102] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest57').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart58(){		
	var strQuantity = $("#imgQty58").val().trim();
	var addTocartText=$("#imgQuantity57").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage60").show();
	$(".cart-quantity60").val(strQuantity);
	$("#amountofproduct60").val(totalamount);
	checking[25] = "1";
	datacontainer[100] = "Cauli Flower Pickle";
	datacontainer[101] = strQuantity;
	
	datacontainer[102] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest58').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart59(){		
	var strQuantity = $("#imgQty59").val().trim();
	var addTocartText=$("#imgQuantity58").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage61").show();
	$(".cart-quantity61").val(strQuantity);
	$("#amountofproduct61").val(totalamount);
	checking[25] = "1";
	datacontainer[100] = "Ginger Pickle";
	datacontainer[101] = strQuantity;
	
	datacontainer[102] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest59').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart60(){		
	var strQuantity = $("#imgQty60").val().trim();
	var addTocartText=$("#imgQuantity59").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage62").show();
	$(".cart-quantity62").val(strQuantity);
	$("#amountofproduct62").val(totalamount);
	checking[25] = "1";
	datacontainer[100] = "Gongura Pickle";
	datacontainer[101] = strQuantity;
	
	datacontainer[102] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest60').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart61(){		
	var strQuantity = $("#imgQty61").val().trim();
	var addTocartText=$("#imgQuantity60").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage63").show();
	$(".cart-quantity63").val(strQuantity);
	$("#amountofproduct63").val(totalamount);
	checking[25] = "1";
	datacontainer[100] = "Lemon Pickle";
	datacontainer[101] = strQuantity;
	
	datacontainer[102] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest61').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart62(){		
	var strQuantity = $("#imgQty62").val().trim();
	var addTocartText=$("#imgQuantity61").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage64").show();
	$(".cart-quantity64").val(strQuantity);
	$("#amountofproduct64").val(totalamount);
	checking[25] = "1";
	datacontainer[100] = "Mango Pickle";
	datacontainer[101] = strQuantity;
	
	datacontainer[102] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest62').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart63(){		
	var strQuantity = $("#imgQty63").val().trim();
	var addTocartText=$("#imgQuantity62").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage65").show();
	$(".cart-quantity65").val(strQuantity);
	$("#amountofproduct65").val(totalamount);
	checking[25] = "1";
	datacontainer[100] = "Tindoor|Gherkins|dondakaya pickles";
	datacontainer[101] = strQuantity;
	
	datacontainer[102] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest63').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart64(){		
	var strQuantity = $("#imgQty64").val().trim();
	var addTocartText=$("#imgQuantity63").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage66").show();
	$(".cart-quantity66").val(strQuantity);
	$("#amountofproduct66").val(totalamount);
	checking[25] = "1";
	datacontainer[100] = "Tomato pickle";
	datacontainer[101] = strQuantity;
	
	datacontainer[102] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest64').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart65(){		
	var strQuantity = $("#imgQty65").val().trim();
	var addTocartText=$("#imgQuantity64").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage67").show();
	$(".cart-quantity67").val(strQuantity);
	$("#amountofproduct67").val(totalamount);
	checking[25] = "1";
	datacontainer[100] = "Badhusha";
	datacontainer[101] = strQuantity;
	
	datacontainer[102] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest65').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart66(){		
	var strQuantity = $("#imgQty66").val().trim();
	var addTocartText=$("#imgQuantity65").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage68").show();
	$(".cart-quantity68").val(strQuantity);
	$("#amountofproduct68").val(totalamount);
	checking[25] = "1";
	datacontainer[100] = "Bread Halwa";
	datacontainer[101] = strQuantity;
	
	datacontainer[102] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest66').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart67(){		
	var strQuantity = $("#imgQty67").val().trim();
	var addTocartText=$("#imgQuantity66").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage69").show();
	$(".cart-quantity69").val(strQuantity);
	$("#amountofproduct69").val(totalamount);
	checking[25] = "1";
	datacontainer[100] = "Carrot Halwa";
	datacontainer[101] = strQuantity;
	
	datacontainer[102] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest67').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart68(){		
	var strQuantity = $("#imgQty68").val().trim();
	var addTocartText=$("#imgQuantity67").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage70").show();
	$(".cart-quantity70").val(strQuantity);
	$("#amountofproduct70").val(totalamount);
	checking[25] = "1";
	datacontainer[100] = "Traditional Mysore Pak";
	datacontainer[101] = strQuantity;
	
	datacontainer[102] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest68').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart69(){		
	var strQuantity = $("#imgQty69").val().trim();
	var addTocartText=$("#imgQuantity68").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage7").show();
	$(".cart-quantity7").val(strQuantity);
	$("#amountofproduct7").val(totalamount);
	checking[25] = "1";
	datacontainer[100] = "Milk Khova|Pal khova";
	datacontainer[101] = strQuantity;
	
	datacontainer[102] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest69').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart70(){		
	var strQuantity = $("#imgQty70").val().trim();
	var addTocartText=$("#imgQuantity69").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage72").show();
	$(".cart-quantity72").val(strQuantity);
	$("#amountofproduct72").val(totalamount);
	checking[25] = "1";
	datacontainer[100] = "Bobbattu|Obbattu";
	datacontainer[101] = strQuantity;
	
	datacontainer[102] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest70').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}
function addToCart71(){		
	var strQuantity = $("#imgQty71").val().trim();
	var addTocartText=$("#imgQuantity70").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage").show();
	$(".cart-quantity").val(strQuantity);
	$("#amountofproduct").val(totalamount);
	checking[25] = "1";
	datacontainer[100] = "Dry Fruit Laddu";
	datacontainer[101] = strQuantity;
	
	datacontainer[102] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest71').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	}


function addToCart81(){		
	var strQuantity = $("#imgQty81").val().trim();
	var addTocartText=$("#imgQuantity81").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage").show();
	$(".cart-quantity").val(strQuantity);
	$("#amountofproduct").val(totalamount);
	checking[25] = "1";
	datacontainer[100] = "Rice With Curry";
	datacontainer[101] = strQuantity;
	
	datacontainer[102] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest81').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
}

function addToCart82(){		
	var strQuantity = $("#imgQty82").val().trim();
	var addTocartText=$("#imgQuantity82").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage").show();
	$(".cart-quantity").val(strQuantity);
	$("#amountofproduct").val(totalamount);
	checking[25] = "1";
	datacontainer[100] = "Rice with curry";
	datacontainer[101] = strQuantity;
	
	datacontainer[102] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest82').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	

}


function addToCart83(){		
	var strQuantity = $("#imgQty83").val().trim();
	var addTocartText=$("#imgQuantity83").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage83").show();
	$(".cart-quantity").val(strQuantity);
	$("#amountofproduct").val(totalamount);
	checking[25] = "1";
	datacontainer[100] = "Rice with curry";
	datacontainer[101] = strQuantity;
	
	datacontainer[102] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest83').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	
}


function addToCart84(){		
	var strQuantity = $("#imgQty84").val().trim();
	var addTocartText=$("#imgQuantity84").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage84").show();
	$(".cart-quantity").val(strQuantity);
	$("#amountofproduct").val(totalamount);
	checking[25] = "1";
	datacontainer[100] = "Rice with curry";
	datacontainer[101] = strQuantity;
	
	datacontainer[102] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest84').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
}

function addToCart85(){		
	var strQuantity = $("#imgQty85").val().trim();
	var addTocartText=$("#imgQuantity85").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage85").show();
	$(".cart-quantity").val(strQuantity);
	$("#amountofproduct").val(totalamount);
	checking[25] = "1";
	datacontainer[100] = "Rice with curry";
	datacontainer[101] = strQuantity;
	
	datacontainer[102] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest85').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	
}


function addToCart86(){		
	var strQuantity = $("#imgQty86").val().trim();
	var addTocartText=$("#imgQuantity86").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage86").show();
	$(".cart-quantity").val(strQuantity);
	$("#amountofproduct").val(totalamount);
	checking[25] = "1";
	datacontainer[100] = "Rice with curry";
	datacontainer[101] = strQuantity;
	
	datacontainer[102] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest86').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
}


function addToCart87(){		
	var strQuantity = $("#imgQty87").val().trim();
	var addTocartText=$("#imgQuantity87").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage87").show();
	$(".cart-quantity").val(strQuantity);
	$("#amountofproduct").val(totalamount);
	checking[25] = "1";
	datacontainer[100] = "Rice with curry";
	datacontainer[101] = strQuantity;
	
	datacontainer[102] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest87').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
	
}


function addToCart88(){		
	var strQuantity = $("#imgQty88").val().trim();
	var addTocartText=$("#imgQuantity88").val().trim();
	
	var totalamount =strQuantity*addTocartText;
/*addTocartText*/
	$("#hideimage88").show();
	$(".cart-quantity").val(strQuantity);
	$("#amountofproduct").val(totalamount);
	checking[25] = "1";
	datacontainer[100] = "Rice with curry";
	datacontainer[101] = strQuantity;
	
	datacontainer[102] = totalamount;
		
		/*document.getElementById('cart-subtotal-money').value;*/
	 subTotalAmount=document.getElementById('cart-subtotal-money').value=subTotalAmount+totalamount;
	$("#cart-subtotal-money").text(subTotalAmount);
	i=document.getElementById('addTocarttest88').value=++i;
	$("#addToCartTextPlace").text(i);
	alert("Added To Cart");	
}
	
function btnCheckOutClicked2(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked2(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}

function btnCheckOutClicked3(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked3(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}

function btnCheckOutClicked4(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked4(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}

function btnCheckOutClicked5(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked5(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}

function btnCheckOutClicked6(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked6(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked7(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked7(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked8(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked8(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked9(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked9(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked10(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked10(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}


function btnCheckOutClicked11(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked11(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked12(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked12(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked13(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked13(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked14(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked14(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked15(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked15(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked16(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked16(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked17(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked17(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked18(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked18(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked19(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked19(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked20(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked20(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}

function btnCheckOutClicked21(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked21(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked22(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked22(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked23(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked23(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked24(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked24(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked25(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked25(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked26(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked26(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked27(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked27(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked28(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked28(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked29(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked29(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked30(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked30(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}

function btnCheckOutClicked31(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked31(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked32(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked32(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked33(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked33(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked34(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked34(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked35(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked35(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked36(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked36(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked37(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked37(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked38(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked38(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked39(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked39(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked40(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked40(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}

function btnCheckOutClicked41(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked41(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked42(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked42(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked43(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked43(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked44(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked44(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked45(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked45(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked46(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked46(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked47(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked47(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked48(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked48(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked49(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked49(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked50(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked50(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}

function btnCheckOutClicked51(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked51(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked52(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked52(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked53(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked53(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked54(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked54(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked55(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked55(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked56(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked56(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked57(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked57(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked58(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked58(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked59(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked59(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked60(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked60(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}

function btnCheckOutClicked61(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked61(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked62(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked62(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked63(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked63(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked64(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked64(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked65(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked65(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked66(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked66(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked67(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked67(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked68(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked68(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked69(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked69(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked70(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked70(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked71(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked71(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked72(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked72(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}

function btnCheckOutClicked73(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked73(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked74(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked74(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}

function btnCheckOutClicked81(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked81(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}

function btnCheckOutClicked82(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked82(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}

function btnCheckOutClicked83(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked83(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}

function btnCheckOutClicked84(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked84(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}

function btnCheckOutClicked85(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked85(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}

function btnCheckOutClicked86(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked86(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}

function btnCheckOutClicked87(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked8(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}
function btnCheckOutClicked88(){
	$("#billingInfoDetais").show();
	$("#imageSelectionDiv").hide();	
	
}
function btnContinueShopClicked88(){
	$("#hidemenu").show();
	$("#billingInfoDetais").hide();
	$("#imageSelectionDiv").hide();	
	
}



function hideAllInfoTr(){
	$("#hideimage1").hide();
	$("#hideimage2").hide();
	$("#hideimage3").hide();
	$("#hideimage4").hide();
	$("#hideimage5").hide();
	$("#hideimage6").hide();
	$("#hideimage7").hide();
	$("#hideimage8").hide();
	$("#hideimage9").hide();
	$("#hideimage10").hide();
	$("#hideimage11").hide();
	$("#hideimage12").hide();
	$("#hideimage13").hide();
	$("#hideimage14").hide();
	$("#hideimage15").hide();
	$("#hideimage16").hide();
	$("#hideimage17").hide();
	$("#hideimage18").hide();
	$("#hideimage19").hide();
	$("#hideimage20").hide();
	$("#hideimage21").hide();
	$("#hideimage22").hide();
	$("#hideimage23").hide();
	$("#hideimage24").hide();
	$("#hideimage25").hide();
	$("#hideimage26").hide();
	$("#hideimage27").hide();
	$("#hideimage28").hide();
	$("#hideimage29").hide();
	$("#hideimage30").hide();
	$("#hideimage31").hide();
	$("#hideimage32").hide();
	$("#hideimage33").hide();
	$("#hideimage34").hide();
	$("#hideimage35").hide();
	$("#hideimage36").hide();
	$("#hideimage37").hide();
	$("#hideimage38").hide();
	$("#hideimage39").hide();
	$("#hideimage40").hide();
	$("#hideimage41").hide();
	$("#hideimage42").hide();
	$("#hideimage43").hide();
	$("#hideimage44").hide();
	$("#hideimage45").hide();
	$("#hideimage46").hide();
	$("#hideimage47").hide();
	$("#hideimage48").hide();
	$("#hideimage49").hide();
	$("#hideimage50").hide();
	$("#hideimage51").hide();
	$("#hideimage52").hide();
	$("#hideimage53").hide();
	$("#hideimage54").hide();
	$("#hideimage55").hide();
	$("#hideimage56").hide();
	$("#hideimage57").hide();
	$("#hideimage58").hide();
	$("#hideimage59").hide();
	$("#hideimage60").hide();
	$("#hideimage61").hide();
	$("#hideimage62").hide();
	$("#hideimage63").hide();
	$("#hideimage64").hide();
	$("#hideimage65").hide();
	$("#hideimage66").hide();
	$("#hideimage67").hide();
	$("#hideimage68").hide();
	$("#hideimage69").hide();
	$("#hideimage70").hide();
	$("#hideimage71").hide();
	$("#hideimage72").hide();
	$("#hideimage73").hide();
	$("#hideimage74").hide();
	$("#hideimage75").hide();
	$("#hideimage76").hide();
	$("#hideimage77").hide();
	$("#hideimage78").hide();
	$("#hideimage79").hide();
	$("#hideimage80").hide();
	$("#hideimage81").hide();
	$("#hideimage82").hide();
	$("#hideimage83").hide();
	$("#hideimage84").hide();
	$("#hideimage85").hide();
	$("#hideimage86").hide();
	$("#hideimage87").hide();
	$("#hideimage88").hide();
	
	
	
}
function serverCallToSaveData(){
	 	var fullname = $("#billingSenderFirstName").val().trim();
	var email =  $("#billingSenderEmail").val().trim();
	var phonenumber =  $("#billingSenderPhone").val().trim();
	var buildingNumber =  $("#billingSenderStreet").val().trim();
	var address =  $("#billingSenderCity").val().trim();	
	 datacontainer[248]=subTotalAmount;
	/* var fullname = "Priya Ravi";
		var email = "priyaravi141@gmail.com";
		var phonenumber = "7795488318";
		var buildingNumber = "1st Floor";
	*/	/*
		 * var checkinga = $.serialize(checking);
		 *//*var address = "Kadabisaanahalli-560072";*/

		/*var datacontainersa = JSON.stringify(datacontainer);
		var checkinga = JSON.stringify(checking);
*/
	 
	 
	 
	 var checkinga = JSON.stringify(checking);
	 var datacontainersa = datacontainer.filter(function(v){return v!==''});

	 var newArray = JSON.stringify(datacontainersa);
	 
	 alert(newArray);
		if (fullname != null || email != null || phonenumber != null
				|| buildingNumber != null || checking != null || address != null
				|| datacontainer != null) {
			
			 $("#btnBookToSavedata").text("Loading...");
			$.ajax({
				url : "checkoutdetails",
				type : "POST",
				data : {
					"fullname" : fullname,
					"email" : email,
					"lastName": "c",
                 "optionalAddress":"bangalore",
					"datacontainers" : newArray,
					"phonenumber" : phonenumber,
					"city" : buildingNumber,
					"address" : address,
					"pinCode" : "560072",
					"totalamount" : subTotalAmount
				},
				success : function(responseData, textStatus) {
					 $("#btnBookToSavedata").text("Submit");
					handleContactDetailsData(responseData);
				},
				error : function(responseData) {
					 $("#btnBookToSavedata").text("Submit");
					alert("failed To Save Sign Up email");
				}
			});
		}
	}
	function handleContactDetailsData(responseData) {
		var strContactUs = jQuery.parseJSON(responseData);
		if (strContactUs.status == true) {
			alert("Your Order Is Booked.We will serve you soon");
			hideDivs();
			$("#featuredProductDiv").show();
			$("#myCarousel").show();
			$("#mainPageDiv").show();
			
			
		} else
			alert("failure");
	}

	
	   function changeFunc1($i) {
		   $("#imgQuantity1").val($i);  }

	  


	   function changeFunc2($i) {
		   $("#imgQuantity2").val($i);
	   }

	  




	   function changeFunc3($i) {
		   $("#imgQuantity3").val($i);
	   }



	   function changeFunc4($i) {
		   $("#imgQuantity4").val($i);
	   }

	 

	   function changeFunc5($i) {
		   $("#imgQuantity5").val($i);
	   }

	 

	   function changeFunc6($i) {
		   $("#imgQuantity6").val($i);
	   }

	  

	   function changeFunc7($i) {
		   $("#imgQuantity7").val($i);
	   }

	  


	   function changeFunc8($i) {
		   $("#imgQuantity8").val($i);
	   }

	 


	   function changeFunc9($i) {
		   $("#imgQuantity9").val($i);
	   }

	  


	   function changeFunc10($i) {
		   $("#imgQuantity10").val($i);
	   }

	  


	   function changeFunc1($i) {
		   $("#imgQuantity1").val($i);
	   }

	  


	   function changeFunc11($i) {
		   $("#imgQuantity11").val($i);
	   }

	  


	   function changeFunc12($i) {
		   $("#imgQuantity12").val($i);
	   }

	  

	   function changeFunc13($i) {
		   $("#imgQuantity13").val($i);
	   }

	 


	   function changeFunc14($i) {
		   $("#imgQuantity14").val($i);
	   }

	  


	   function changeFunc15($i) {
		   $("#imgQuantity15").val($i);
	   }

	  


	   function changeFunc16($i) {
		   $("#imgQuantity16").val($i);
	   }

	  


	   function changeFunc17($i) {
		   $("#imgQuantity17").val($i);
	   }




	   function changeFunc18($i) {
		   $("#imgQuantity18").val($i);
	   }

	  


	   function changeFunc19($i) {
		   $("#imgQuantity19").val($i);
	   }

	 

	   function changeFunc20($i) {
		   $("#imgQuantity20").val($i);
	   }

	 


	   function changeFunc21($i) {
		   $("#imgQuantity21").val($i);
	   }



	   function changeFunc22($i) {
		   $("#imgQuantity22").val($i);
	   }

	 

	   function changeFunc23($i) {
		   $("#imgQuantity23").val($i);
	   }

	  

	   function changeFunc24($i) {
		   $("#imgQuantity24").val($i);
	   }

	 

	   function changeFunc25($i) {
		   $("#imgQuantity25").val($i);
	   }

	  


	   function changeFunc26($i) {
		   $("#imgQuantity26").val($i);
	   }

	  


	   function changeFunc27($i) {
		   $("#imgQuantity27").val($i);
	   }

	  


	   function changeFunc28($i) {
		   $("#imgQuantity28").val($i);
	   }

	  


	   function changeFunc29($i) {
		   $("#imgQuantity29").val($i);
	   }

	 


	   function changeFunc30($i) {
		   $("#imgQuantity30").val($i);
	   }

	 

	   function changeFunc31($i) {
		   $("#imgQuantity31").val($i);
	   }

	  

	   function changeFunc32($i) {
		   $("#imgQuantity32").val($i);
	   }

	  

	   function changeFunc33($i) {
		   $("#imgQuantity33").val($i);
	   }

	 


	   function changeFunc34($i) {
		   $("#imgQuantity34").val($i);
	   }

	 

	   function changeFunc35($i) {
		   $("#imgQuantity35").val($i);
	   }


	   function changeFunc36($i) {
		   $("#imgQuantity36").val($i);
	   }



	   function changeFunc37($i) {
		   $("#imgQuantity37").val($i);
	   }



	   function changeFunc38($i) {
		   $("#imgQuantity38").val($i);
	   }


	   function changeFunc39($i) {
		   $("#imgQuantity39").val($i);
	   }



	   function changeFunc40($i) {
		   $("#imgQuantity40").val($i);
	   }



	   function changeFunc41($i) {
		   $("#imgQuantity41").val($i);
	   }

	  


	   function changeFunc42($i) {
		   $("#imgQuantity42").val($i);
	   }

	  


	   function changeFunc43($i) {
		   $("#imgQuantity43").val($i);
	   }



	   function changeFunc44($i) {
		   $("#imgQuantity44").val($i);
	   }



	   function changeFunc45($i) {
		   $("#imgQuantity45").val($i);
	   }



	   function changeFunc46($i) {
		   $("#imgQuantity46").val($i);
	   }


	   function changeFunc47($i) {
		   $("#imgQuantity47").val($i);
	   }



	   function changeFunc48($i) {
		   $("#imgQuantity48").val($i);
	   }

	 


	   function changeFunc49($i) {
		   $("#imgQuantity49").val($i);
	   }

	 


	   function changeFunc50($i) {
		   $("#imgQuantity50").val($i);
	   }

	  


	   function changeFunc51($i) {
		   $("#imgQuantity51").val($i);
	   }

	  


	   function changeFunc52($i) {
		   $("#imgQuantity52").val($i);
	   }


	   function changeFunc53($i) {
		   $("#imgQuantity53").val($i);
	   }

	 


	   function changeFunc54($i) {
		   $("#imgQuantity54").val($i);
	   }

	 


	   function changeFunc55($i) {
		   $("#imgQuantity55").val($i);
	   }

	 


	   function changeFunc56($i) {
		   $("#imgQuantity56").val($i);
	   }

	 

	   function changeFunc57($i) {
		   $("#imgQuantity57").val($i);
	   }

	 


	   function changeFunc58($i) {
		   $("#imgQuantity58").val($i);
	   }


	   function changeFunc59($i) {
		   $("#imgQuantity59").val($i);
	   }


	   function changeFunc60($i) {
		   $("#imgQuantity60").val($i);
	   }



	   function changeFunc61($i) {
		   $("#imgQuantity61").val($i);
	   }

	  

	   function changeFunc62($i) {
		   $("#imgQuantity62").val($i);
	   }


	   function changeFunc63($i) {
		   $("#imgQuantity63").val($i);
	   }


	   function changeFunc64($i) {
		   $("#imgQuantity64").val($i);
	   }

	   function changeFunc65($i) {
		   $("#imgQuantity65").val($i);
	   }



	   function changeFunc66($i) {
		   $("#imgQuantity66").val($i);
	   }


	   function changeFunc67($i) {
		   $("#imgQuantity67").val($i);
	   }


	   function changeFunc68($i) {
		   $("#imgQuantity68").val($i);
	   }

	 


	   function changeFunc69($i) {
		   $("#imgQuantity69").val($i);
	   }

	  


	   function changeFunc70($i) {
		   $("#imgQuantity70").val($i);
	   }

	   
	   function changeFunc81($i) {
		   $("#imgQuantity81").val($i);
	   }

	   function changeFunc82($i) {
		   $("#imgQuantity82").val($i);
	   }

	   function changeFunc83($i) {
		   $("#imgQuantity83").val($i);
	   }

	   function changeFunc84($i) {
		   $("#imgQuantity84").val($i);
	   }

	   function changeFunc85($i) {
		   $("#imgQuantity85").val($i);
	   }

	   function changeFunc86($i) {
		   $("#imgQuantity86").val($i);
	   }

	   function changeFunc87($i) {
		   $("#imgQuantity87").val($i);
	   }

	   function changeFunc88($i) {
		   $("#imgQuantity88").val($i);
	   }


