// script purpose: establish an array of images to select from. generate a random number variable that changes with each click. use the random number to select the new image displayed within the grid of images upon click.
// script adapted from: https://www.tutorialrepublic.com/faq/how-to-change-the-image-source-using-jquery.php and https://www.peachpit.com/articles/article.aspx?p=2239154&seqNum=10

var myPix = new Array("https://i.ibb.co/wKmy5Y2/row-1-column-1.jpg", "https://i.ibb.co/PcKrdb5/row-1-column-2.jpg", "https://i.ibb.co/qW9f6xB/row-1-column-3.jpg", "https://i.ibb.co/vXmsdrX/row-2-column-1.jpg", "https://i.ibb.co/WfKPf2s/row-2-column-2.jpg", "https://i.ibb.co/cNp48hd/row-2-column-3.jpg", "https://i.ibb.co/9VpSNH8/row-3-column-1.jpg", "https://i.ibb.co/6DmNMF9/row-3-column-2.jpg", "https://i.ibb.co/23ynDh0/row-3-column-3.jpg");
var randomNum = Math.floor(Math.random() * myPix.length);

$(document).ready(function() {
  $("img").click(function changeImg() {
    $(this).attr("src", myPix[randomNum]);
    randomNum = Math.floor(Math.random() * myPix.length);
  });
});