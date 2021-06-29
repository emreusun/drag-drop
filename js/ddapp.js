	// put variables (connections to the web page / DOM) at the top
	// constant -> something that will never change / can't be redefined
	let puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
				dropZoneContainer = document.querySelector(".puzzle-board"),
				dragImages = document.querySelectorAll(".puzzle-image"),
				dropZones = document.querySelectorAll(".drop-zone");

	// functions go in the middle


	// event handling at the bottom
