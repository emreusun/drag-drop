// wrap everything in an IIFE / module
// a module is a JavaScript "pattern" - a programming convention
// this keeps your code private - kinda like a "black box" - which is a best practice

(() => {
    //identify the nodes of interest in the DOM
	const puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
				dropContainer = document.querySelector(".puzzle-board"),
				dragImages = document.querySelectorAll(".puzzle-image"),
				dropZones = document.querySelectorAll(".drop-zone");

		// functions go in the middle
		function swapImages() {
			// swap out the draggable thumbnail images
			// update the backgound image of the drop zone dropContainer
			// 1. get the imageref attribute from the element we're clicking on

			// let imageIndex = this.dataset.imageref,
			// 		// newImagePath = "images/dd/backGround" + imageIndex,
			// 		newImagePath = `url(images/dd/backGround${imageIndex}.jpg)`;

			// 2. set the backround image of the dropcontainer
			dropContainer.style.backgroundImage = `url(images/dd/backGround${this.dataset.imageref}.jpg)`;
			// debugger;
		}

		function startDrag(event) {
			console.log('dragging ' + this.id);


			// sava a refence to the element user is dragging
			// so that we can retrieve the element later and put it in a drop zone
			event.dataTransfer.setData("dragTarget", this.id); // MDN drag and drop reference
			// debugger;
		}

		function draggedOver(event) {
			event.preventDefault();
			console.log('dragging over drop zone elements');
		}

		function dropped(event) {
			event.preventDefault();

			//if we'have already droppend appendend into a drop zone, then it shouldn't happen again
			// the return statement is a code-killer -nothing will execute past this line/statement
			if (this.children.length > 0 ) { return; }

      // get the reference to the dragged image - saved in the drag function using setData
			let targetImage = document.querySelector(`#${event.dataTransfer.getData("dragTarget")}`);


			// console.log('dropped on the element');
			// console.log(event.target.id);

			this.appendChild(targetImage);

			//debugger;
		}


		// event handling at the bottom
	dragImages.forEach (piece => piece.addEventListener('dragstart', startDrag, false));


	dropZones.forEach(zone => {
		zone.addEventListener('drop',dropped);
		zone.addEventListener('dragover',draggedOver);
	});

	puzzleSelectors.forEach(button => button.addEventListener("click", swapImages));
})();
