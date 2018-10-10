

Picker.route("/api/add_points/:player", function(params, req, res, next){
        res.writeHead(200, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        });

        var player =  params["player"];
        if (player !== ""){
            var points = parseInt(params.query.points);
            var reason = params.query.reason;
            var leaderboard = params.query.leaderboard;
            var time_added =  new Date();

            console.log("Adding points to " + player + ": " + points + " because" + reason);
            //Try to get the player
            Players.upsert({name: player}, {
                $inc: {score: points},
                $push: { scores: {
                    points: points,
                    reason: reason,
                    leaderboard: leaderboard,
                    time: time_added,
                }}
            });

            plrs = Players.find({name: player}).fetch();
            res.end("Success");
        }
        res.end("Failure");
});


Picker.route("/api/remove/:player", function(params, req, res, next){
        var player = params["player"];
        if (player !== ""){
            console.log("Removing player!")
            //Try to get the player
            Players.remove({name: player});
            res.end("Success");
        }
        res.end("Failure");
});

Picker.route("/api/reset", function(params, req, res, next){
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    //Try to get the player
    Players.remove({});
    
    res.end("Reset the leaderboard");
});



