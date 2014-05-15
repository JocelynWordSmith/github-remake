'use strict';
//grabs the profile info
$.getJSON('https://api.github.com/users/joshuawordsmith?client_id=567f27a0a07d1b816db5&client_secret=2076ba9086dc6126360d7ae90e0c062bb951542d').done(function(data){
	console.log(data);
});


var showRepos = _.template($('.repo-patriarch').text()); 


function renderRepos (array){
	array.forEach(function(module){
		var rendered = showRepos(module);
		$('.repo-list').prepend(rendered);
	});
}

//grabs the repo info
$.getJSON('https://api.github.com/users/JoshuaWordSmith/repos?client_id=567f27a0a07d1b816db5&client_secret=2076ba9086dc6126360d7ae90e0c062bb951542d').done(function(data){
	renderRepos(data);
});

