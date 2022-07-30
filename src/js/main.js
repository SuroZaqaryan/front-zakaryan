$(function () {
    var baseUrl = "/src"

    $(".navbar-wrapper").load(`${baseUrl}/components/navbar.html`);
    $(".posts-wrapper").load(`${baseUrl}/pages/posts.html`);
});