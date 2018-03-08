var search = "Alice+Paul";
var sort = "oldest";
var begin_date = "1852";
var end_date = "2018";
var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&page=2&sort=" + sort + "&api-key=db818c9b360e44c88cf3829a661f2074&begin-date=" + begin_date + "&end-date=" + end_date + "";

$.ajax({
	url: queryURL,
	method: 'GET'
}).done(function (response) {
	console.log(response);
	///////Click Event///////
	$("#run-search").on("click", function () {
		event.preventDefault();
		console.log("run-search is working")
		search = $("#search-term").val().trim();
		console.log(search + "search");


		//handle missing fields w/ .trim();
	});
	$("#clear-all").on("click", function () {
		console.log("clear-all is working")
	});
	////////////////////////
})
