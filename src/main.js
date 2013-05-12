$(document).ready(function(){
     $.vegas('slideshow', {
     	delay:10000,
  backgrounds:[
    { src:'./images/background.jpg', fade:1000 },
    { src:'./images/background2.jpg', fade:1000 },
    { src:'./images/background3.jpg', fade:1000 },
    { src:'./images/background3.jpg', fade:1000 }
  ]
})('overlay', {
  src:'./vegas/overlays/11.png'
	});

$('#news').click(function(){
  $('.headerinfo').empty();
  $('.information').empty();
  $('.headerinfo').append('News Header!');
  $('.information').append('Pakistan’s Interior Ministry has ordered the expulsion of the Islamabad bureau chief for The New York Times on the eve of national elections, the newspaper said Friday. The Times has strongly protested the move and is seeking his reinstatement. <strong>Real info could be loaded through XML or something.</strong>');
  })

$('#company').click(function(){
  $('.headerinfo').empty();
  $('.information').empty();
  $('.headerinfo').append('Company header!');
  $('.information').append('A basic description of the company could go here, maybe a link to more about us. Or it could all go here, the header and footer are fixed, so you can scroll down as long as you like. <br><img src="http://placekitten.com/200/200"><br>Dear Leader');
})

$('#projects').click(function(){
  $('.headerinfo').empty();
  $('.information').empty();
  $('.headerinfo').append('Project header!');
  $('.information').append('Project Info, this could eventually link to a project page/site as well. And the formatting would be fixed through an HTML import instead of me placing all this text through jQuery<br><img src="http://24.media.tumblr.com/tumblr_m6a1528SnW1rw6ae7o1_400.jpg"><br>Like check out this badass game');
  })

$('#careers').click(function(){
  $('.headerinfo').empty();
  $('.information').empty();
  $('.headerinfo').append('Career header!');
  $('.information').append('List open positions here, and then links to longer descriptions.<ul><li><strong>Technical Director</li><li>C# Programmer</li><li>UI Artist</li></ul></strong>');
  })

$('#pr').click(function(){
  $('.headerinfo').empty();
  $('.information').empty();
  $('.headerinfo').append('Public Relations header!');
  $('.information').append('Public relations info!');
  })

$('#gallery').click(function(){
  $('.headerinfo').empty();
  $('.information').empty();
  $('.headerinfo').append('Gallery header!');
  $('.information').append('This could probably go on its on page, or we could plop a carousel in here.');
  })

$('#LiveStreams').click(function(){
  $('.headerinfo').empty();
  $('.information').empty();
  $('.headerinfo').append('Livestreams!');
  $('.information').append('Livestream info! Maybe links to videos, or to a separate video page altogether. <ol><li><img src="http://placekitten.com/50/50"> Video 1</li><li><img src="http://placekitten.com/50/50">video 2, and so on</li></ol>');
  })

});