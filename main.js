let newsContent = document.querySelectorAll(".news-card__content");

// newsContent[0].onclick.style.display = 'none';
// newsContent[0].style.display = 'none';
// onclick="hid(this)"

// function hid_show(el) {
//     el.nextElementSibling.style.display = 'none';
// }

function hid_show(el) {

    if (el.nextElementSibling.style.display !== 'block') {
        el.nextElementSibling.style.display = 'block';

    } else {
        el.nextElementSibling.style.display = 'none';

    }

}
