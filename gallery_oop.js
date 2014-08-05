/**
 * @fileoverview Simple OOP Gallery.
 * @author fab.tames@gmail.com (Fabiola Mayorga)
 */

(function(){
/**
 * Creates a Gallery
 * class represents a gallery
 * @param {string} pBtnNext Next Button Reference.
 * @param {string} pBtnPrev Previous Button Reference,
 * @param {string} pImages List element with all images,
 * @param {number} pimagePosition Left position of the list element,
 * @param {number} pTotalWidth Total width of the list element,
 * @param {number} pFrameWidth Width of the frame holding the list element.
 */

 	/**
	 * @constructor
	 */
	Gallery = function(pBtnNext, pBtnPrev, pImages, pimagePosition, pTotalWidth,pFrameWidth){

		this.btnNext = pBtnNext;
		this.btnPrev = pBtnPrev; 
		this.galleryImages = pImages;
		this.imagePosition = pimagePosition;
		this.frameWidth = pFrameWidth;
		this.totalWidth = pTotalWidth;
	};

	//redefining the prototype object 
	Gallery.prototype = {

		//redefining the prototype object 
		constructor : Gallery,

		addEventHandlers : function(){
			this.btnNext.ref = this;
			this.btnPrev.ref = this;
			this.imagePosition.ref = this;
			this.btnNext.addEventListener("click", this.onNextHandler, false);
			this.btnPrev.addEventListener("click" , this.onPrevHandler, false);
		},

		onNextHandler : function(e){
			this.ref.goToNextImage();
		},


		onPrevHandler : function(e){
			this.ref.goToPrevImage();
		},

		goToNextImage : function(){
				this.imagePosition += this.frameWidth;
				this.galleryImages.style.left = -(this.imagePosition) + 'px'; 	
				this.btnPrev.style.visibility = "visible";
				if(this.imagePosition === this.totalWidth){
					this.btnNext.style.visibility = "hidden";
				}
		},


		goToPrevImage : function(){
			this.btnNext.style.visibility = "visible";
			this.imagePosition -= this.frameWidth;
			this.galleryImages.style.left = -(this.imagePosition) + 'px';	
			if(this.imagePosition === 0){
				this.btnPrev.style.visibility = "hidden";
			}	
		}



	}

})();


	function init(){
		var images = document.getElementById('gallery');
		var btnPrev = document.getElementById('prev');
		var btnNext = document.getElementById('next');
		var frameWidth = document.getElementById("frame").offsetWidth;
		var totalWidth = (document.getElementsByTagName("li").length-1)*frameWidth;
		var gallery = new Gallery(btnNext,btnPrev,images,0,totalWidth,frameWidth);
		gallery.addEventHandlers();
		$('#controls a').on("click", function(e){
			e.preventDefault();
		})
	}

	window.onload = init;

	