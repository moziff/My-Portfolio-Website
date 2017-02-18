$(function() {
  var portfolio_item_viewer = $('#portfolio-item');

  var speaktome = $('#speaktome');
  var motley = $('#motley');
  var pacman = $('#pacman');
  var greco = $('#greco');
  var petpal = $('#petpal');
  var job = $('#job');

  var speaktome_item = "images/speaktome.jpg";
  var motley_item= "images/Motley-bedroom.png";
  var pacman_item = "images/Pac-Man-VR.png";
  var greco_item = "images/greco-roman-maze.png";
  var petpal_item = "images/petpal.png";
  var job_item = "images/jobTrcker.png";


  var portfolio_item_array = [speaktome,motley,pacman,greco,petpal,job];
  var portfolio_blob_array = [speaktome_item,motley_item,pacman_item,greco_item,petpal_item,job_item];
  // 
  // function HexClicked(num) {
  //   console.log("boom");
  //   $('#portfolio-item').attr('data',portfolio_blob_array[num]);
  // }
  //
  // for (var i = 0; i < portfolio_item_array.length; i++) {
  //   $(portfolio_item_array[i]).live("click",HexClicked(i));
  // }
  // portfolio_item_array[0].on('click',HexClicked(0));

});
