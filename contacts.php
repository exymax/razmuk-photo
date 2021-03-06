<!DOCTYPE html>
<html>
<head>
    <title>Andrey Razmuk: Contacts</title>
    <link rel="stylesheet" href="css/flexboxgrid.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>
    <link rel="stylesheet" href="css/common.css">
    <link rel="stylesheet" href="css/contacts.css">
</head>
<body>
<div class="container">
    <div class="header-row row center-xs middle-xs">
        <div class="header-col col-xs-12">
            <a href="index.php"><img src="images/logo.png"></a>
        </div>
    </div>
    <div class="nav-links-row row center-xs middle-xs">
        <div class="nav-links-col col-xs-12 child-transition">
            <a href="index.php">Home</a>
            <a href="wedding.php">Wedding Photo</a>
            <a href="lovestory.php">Love Story</a>
            <a href="portraits.php">Portraits</a>
            <a href="about.php">About</a>
            <a class="active" href="contacts.php">Contacts</a>
        </div>
    </div>

    <div class="row-contacts-container row center-xs">
        <div class="col-xs-3">
            <img class="image-wrapper" src="images/contacts.png">
        </div>
        <div class="col-xs-3">
            <div class="row center-xs middle-xs contacts-info">
                <div class="col-xs-10">
                    <h4 class="title">Contact</h4>
                    <div class="row info start-xs middle-xs">
                        <div class="col-xs-12 info-piece">E-MAIL: A.RAZMUK@GMAIL.COM</div>
                        <div class="col-xs-12 info-piece">PHONE: +375 29 618-28-20</div>
                        <div class="col-xs-12 info-piece">PHONE: +375 29 288-28-20</div>
                        <form class="col-xs-12 form-send-email">
                            <div class="row center-xs">
                                <div class="input-container col-xs-12">
                                    <input required type="text" name="name" placeholder="Name">
                                </div>
                                <div class="input-container col-xs-12">
                                    <input required type="email" name="email" placeholder="Email">
                                </div>
                                <div class="input-container col-xs-12">
                                    <textarea required title="message" name="message" placeholder="Message"></textarea>
                                </div>
                                <button class="transition send-form" type="submit">SEND FORM</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row-map row center-xs middle-xs">
        <div class="col-xs-6">
            <iframe
                    width="100%"
                    height="250"
                    frameborder="0" style="border:0"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCwjjyggS12pl0WmAOwKIJ3pSJAI9xnTTE
    &q=Минск+Арена" allowfullscreen>
            </iframe>
        </div>
    </div>

    <div class="footer-row row center-xs middle-xs footer">
        <div class="col-xs-8">
            <div class="row between-xs center-xs middle-xs">
                <div class="col-xs-3">Andrei Razmuk&copy;2017</div>
                <div class="footer-col col-xs-3 child-transition">
                    <div class="social-link-container social-link-vk">
                        <a class="" href="https://vk.com" target="_blank"></a>
                    </div>
                    <div class="social-link-container social-link-facebook">
                        <a class="" href="https://facebook.com" target="_blank"></a>
                    </div>
                    <div class="social-link-container social-link-instagram">
                        <a class="" href="https://instagram.com" target="_blank"></a>
                    </div>
                </div>
                <div class="col-xs-3">crafted with <span style="color: #f44336;">&hearts;</span> by <a href="http://nestwed.com" style="color: #009688;">NESTWED</a></div>
            </div>
        </div>
    </div>

</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/masonry/4.2.0/masonry.pkgd.js"></script>
<script src="js/wedding.js"></script>
</body>
</html>