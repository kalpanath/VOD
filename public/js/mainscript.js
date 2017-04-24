
$(document).ready(function()
{

	//Display autoComplete on focus
	document.onkeydown = function (e)
	{	
		switch (e.keyCode)
		{
			case 37:
				moveUp();
				break;
			case 39:
				moveDown();
				break;
			  case 13:
				OpenLarge();
				break;
		}
	};
	
});

	function moveUp() {
		if($(".selected").length == 0)
		{
			$("#divSearchResults article:last-child").addClass("selected").focus();
		}
		else if ($(".selected").prev("article").length > 0)
		{
			$(".selected").removeClass("selected").prev("article.video").addClass("selected").focus();
		}
		else
		{
			$(".selected").removeClass("selected");
			$("#divSearchResults article:last-child").addClass("selected").focus();
		}
	}

	function OpenLarge()
	{

		if($(".selected").length >  0)
		{
			$("article.selected figure a")[0].click();
		}
	}
	function moveDown()
	{
		if($(".selected").length == 0)
		{
			$("#divSearchResults article:first-child").addClass("selected").focus();
		}
		else if ($(".selected").next("article").length > 0)
		{
			$(".selected").removeClass("selected").next("article").addClass("selected").focus();
		}
		else
		{
			$(".selected").removeClass("selected");
			$("#divSearchResults article:first-child").addClass("selected").focus();
		}
	}