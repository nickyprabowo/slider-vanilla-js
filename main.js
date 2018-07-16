let slideshow = document.querySelector('.slideshow img')
let leftArrow = document.querySelector('#arrow-left')
let rightArrow = document.querySelector('#arrow-right')
let images = document.querySelectorAll('.img-preview')
let opacity = 0.6
let imgIndex = 0

window.onload = function() {
  slideshow.src = images[imgIndex].src
  images[0].style.opacity = opacity
};

function resetOpacity(){
	images.forEach(function(img){
		img.style.opacity = 1
	})
}

function animate(){
	slideshow.classList.add('fade-in')
	setTimeout(function(){
		slideshow.classList.remove('fade-in')
	},500)
}

images.forEach(function(img, index){
	img.addEventListener("click", function(e){
		// reset opacity
		resetOpacity()
		// animate slideshow
		animate()
		// set slideshow
		slideshow.src = e.target.src
		// set opacity for selected image
		e.target.style.opacity = opacity
		// set image index
		imgIndex = index
	})
})

leftArrow.addEventListener("click", function(){
	if(imgIndex > 0){
		imgIndex--
	}else{
		imgIndex = 0
	}
	// animate slideshow
	animate()
	slideshow.src = images[imgIndex].src
	// reset opacity
	resetOpacity()
	// set opacity for selected image
	images[imgIndex].style.opacity = opacity
})

rightArrow.addEventListener("click", function(){
	if(imgIndex < images.length){
		imgIndex++
	}else{
		imgIndex = images.length-1
	}
	// animate slideshow
	animate()
	slideshow.src = images[imgIndex].src
	// reset opacity
	resetOpacity()
	// set opacity for selected image
	images[imgIndex].style.opacity = opacity
})