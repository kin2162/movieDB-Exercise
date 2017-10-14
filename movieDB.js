var movies = [

		{
			title: "Forrest Gump",
			rating: "5",
			hasWatched: true
		},

		{
			title: "Titanic",
			rating: "5",
			hasWatched: true
		},
		{
			title: "Gladiator",
			rating: "4",
			hasWatched: false
		},

		{
			title: "Three Idiots",
			rating: "5",
			hasWatched: true
		},
		{
			title: "Human Centipede",
			rating: "3",
			hasWatched: false
		}

];


for (i=0; i< movies.length; i++)
{

	if (movies[i].hasWatched === true){
		console.log("You have watched " + movies[i].title + " - " + movies[i].rating + " stars");
	}

	else if(movies[i].hasWatched === false) {
		console.log("You have not seen " + movies[i].title + " - " + movies[i].rating + " stars");
	}

	else{
		console.log("No valid movies found");
	}
};
