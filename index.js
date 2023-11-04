import express from "express";
import bodyParser from "body-parser";

// Setup express-server
const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);

})

// Init of data-storage (temporary)
const allMeditationPosts = [{
    "title": "How I found the right the way to breathe",
    "description": "Lorem ipsum dolor sit amet, consectetur",
    "category": "Meditation",
    "post": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "creationDate": "2012-02-03",
    "author": "Peter, Alfred",
},
{
    "title": "Morning meditation changed my life",
    "description": "Lorem ipsum dolor sit amet, consectetur",
    "category": "Meditation",
    "post": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "creationDate": "2012-02-03",
    "author": "Peter, Alfred",
},
{
    "title": "My yoga-experience",
    "description": "Lorem ipsum dolor sit amet, consectetur",
    "category": "Meditation",
    "post": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "creationDate": "2012-02-03",
    "author": "Peter, Alfred",
}]
const allWorkoutPosts = [{
    "title": "Morningtime means workout-time",
    "description": "Lorem ipsum dolor sit amet, consectetur",
    "category": "Workout",
    "post": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "creationDate": "2012-02-03",
    "author": "Peter, Alfred",
},
{
    "title": "5 AM at the gym",
    "description": "Lorem ipsum dolor sit amet, consectetur",
    "category": "Workout",
    "post": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "creationDate": "2012-02-03",
    "author": "Peter, Alfred",
},
{
    "title": "How 150 push-ups change my day",
    "description": "Lorem ipsum dolor sit amet, consectetur",
    "category": "Workout",
    "post": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "creationDate": "2012-02-03",
    "author": "Peter, Alfred",
}]
const allIntrospectivePosts = [{
    "title": "Morningtime means workout-time",
    "description": "Lorem ipsum dolor sit amet, consectetur",
    "category": "IntrospectivePlanning",
    "post": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "creationDate": "2012-02-03",
    "author": "Peter, Alfred",
},
{
    "title": "5 AM at the gym",
    "description": "Lorem ipsum dolor sit amet, consectetur",
    "category": "IntrospectivePlanning",
    "post": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "creationDate": "2012-02-03",
    "author": "Peter, Alfred",
},
{
    "title": "How 150 push-ups change my day",
    "description": "Lorem ipsum dolor sit amet, consectetur",
    "category": "IntrospectivePlanning",
    "post": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "creationDate": "2012-02-03",
    "author": "Peter, Alfred",
}]
const allPlanningPosts = [{
    "title": "How I determine the purpose of my day",
    "description": "Lorem ipsum dolor sit amet, consectetur",
    "category": "Planning",
    "post": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "creationDate": "2012-02-03",
    "author": "Peter, Alfred",
},
{
    "title": "5 AM at the gym",
    "description": "Lorem ipsum dolor sit amet, consectetur",
    "category": "Planning",
    "post": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "creationDate": "2012-02-03",
    "author": "Peter, Alfred",
},
{
    "title": "My 4 empires",
    "description": "Lorem ipsum dolor sit amet, consectetur",
    "category": "Planning",
    "post": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "creationDate": "2012-02-03",
    "author": "Peter, Alfred",
}]
// Defining routes
app.get("/", (req, res) => {

    res.render("index.ejs", {
        topPost: allIntrospectivePosts[0],
        positionTwoPost: allMeditationPosts[0],
        positionThreePost: allWorkoutPosts[0],

    });
});

app.get('/blog/:itemNumber', (req, res) => {
    const itemNumber = req.params.itemNumber; // Holen Sie sich die Listenelementnummer aus der URL
    const viewPost = allIntrospectivePosts[itemNumber];    
    // Verarbeiten Sie die Listenelementnummer hier
    // Zum Beispiel, Sie können die Nummer an Ihre EJS-View übergeben
    res.render('blog.ejs', {
        itemNumber,
        post: viewPost,
    });
});

app.get('/blog-details/:itemNumber', (req, res) => {
    const itemNumber = req.params.itemNumber; // Holen Sie sich die Listenelementnummer aus der URL
    const viewPost = allIntrospectivePosts[itemNumber];  

    // Verarbeiten Sie die Listenelementnummer hier
    // Zum Beispiel, Sie können die Nummer an Ihre EJS-View übergeben
    res.render('blog-details.ejs', {
        itemNumber,
        post: viewPost,
    });
});

app.get("/introspectives", (req, res) => {
    res.render("introspectives.ejs", {
        introspectives: allIntrospectivePosts,
    });
});


app.get("/meditations", (req, res) => {
    res.render("meditations.ejs", {
        meditations: allMeditationPosts,
    });
});

app.get("/plannings", (req, res) => {
    res.render("plannings.ejs", {
        plannings: allPlanningPosts,
    });
});

app.get("/workouts", (req, res) => {

    res.render("workouts.ejs", {
        workouts: allWorkoutPosts,
    });
});

app.post("/", (req, res) => {
    const itemNumber = req.body["name"]; // Holen Sie sich die Listenelementnummer aus der URL
    
    console.log(itemNumber);
    res.render("index.ejs", {
        topPost: allIntrospectivePosts[0],
        positionTwoPost: allMeditationPosts[0],
        positionThreePost: allWorkoutPosts[0],

    });
})