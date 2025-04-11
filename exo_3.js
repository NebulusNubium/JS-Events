const thumbnails = document.getElementsByClassName('thumbnail')
const mainImage = document.getElementById('mainImage')


for (const thumbnail of thumbnails) {
    thumbnail.addEventListener('mouseover', function() {
        mainImage.src = thumbnail.src
    })
}