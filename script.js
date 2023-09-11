
document.addEventListener('click', function(event) {
var ul = document.getElementById('menu');
var checkbox = document.getElementById('check');
var barsIcon = document.querySelector('.fa-bars');

// Check if the click is outside the <ul>, not on the checkbox, and not on the bars icon
if (!ul.contains(event.target) && event.target !== checkbox && event.target !== barsIcon) {
    checkbox.checked = false; // Uncheck the checkbox
}
});
