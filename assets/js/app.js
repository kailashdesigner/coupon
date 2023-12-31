$('.bottomContent').hide();
const myButton = $(".showContent");

$(myButton).click(function () {
  $(this).parent().find('.bottomContent').toggle();
  $(this).toggleClass('show');
  if ($(this).text() == 'Show More') {
    $(this).text('Show Less');
  } else {
    $(this).text('Show More');
  }

});


// coupon code
$(document).ready(function () {
  var modalBox = $("#exampleModal");
  var modalTitle = modalBox.find(".titleNew");
  var modalParaGrapf = modalBox.find(".content");
  var modalOfferCode = modalBox.find(".Code");
  var modalAnchor = modalBox.find(".anchor");
  var buttons = $(".showButtonNew");
  var pageTitle = $(".pageTitle h1").text();
  buttons.click(function (value) {
    var thisButton = $(this);
    var title = $(this).parent().find("h2").text();
    var content = $(this).parent().find(".para").text();
    var couponCode = $(this).find(".couponCode").text();
    var weblocation = $(this).next("a").attr("href");


    modalTitle.text(title);
    modalParaGrapf.text(content);
    modalOfferCode.text(couponCode);
    modalAnchor.attr("href", weblocation);
    $(".Code").hide();
    $(".spinner").show();
    // window.open(weblocation, "_blank");
    setTimeout(function () {
      $(thisButton).addClass("showCouponCode");
      $(".Code").show();
      $(".spinner").hide();
    }, 4000);
  });
});


$(document).ready(function () {

  function storeCardData(redirectItemContent, weblocation) {
    var pageName = $(".innerTitleSection h1").text();
    var pageLogo = $(".innerTitleSection img").attr("src");

    // Create an array with the card data
    var cardArray = [pageName, pageLogo, redirectItemContent, weblocation];

    // Convert the array to a JSON string
    var cardArrayJSON = JSON.stringify(cardArray);

    // Store the JSON string in sessionStorage
    sessionStorage.setItem("cardData", cardArrayJSON);
  }

  $(".btnPassData").on("click", function () {
    var redirectItemContent = $(this).parent().find(".para").text();
    var weblocation = $(this).next("a").attr("href");
    // console.log(redirectItemContent, weblocation);
    // Store card data in sessionStorage
    storeCardData(redirectItemContent, weblocation);

    // Navigate to another page and pass data as query parameters
    var targetPage = "../../redeem.html";
    var urlWithQueryParams = targetPage + "?data=" + encodeURIComponent(sessionStorage.getItem("cardData"));
    window.open(urlWithQueryParams, '_blank');
  });
});

// banner slider
var swiper = new Swiper(".myBannerSwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".topCategoriesSwiper", {
  slidesPerView: 5,
  spaceBetween: 10,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
  },
});

// delas
var swiper = new Swiper(".delas", {
  slidesPerView: 3,
  spaceBetween: 10,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  },
});

function copyContent() {
  var sourceDiv = document.querySelector(".Code");
  var range = document.createRange();
  range.selectNode(sourceDiv);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  var copyButton = document.getElementById("copyButton");
            copyButton.innerText = "Copied!";
            setTimeout(function() {
                copyButton.innerText = "Copy Content";
            }, 2000); // Change back to default text after 2 second
}

var copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", copyContent);

        