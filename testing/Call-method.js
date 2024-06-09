

    const youtubers = {
        name:"Sharique Shaikh",
        channel: "JS dev hindi",
        feature: function (rating, request){
            console.log(`${this.name} here and his channel name is ${this.channel} i want love to give him ${rating} so please ${request} ${this.channel}`);
        }
    }

    youtubers.feature((5 +" " + "star"), "subscribe");

    const youtubers2 = {
        name:"Haris Khan",
        channel: "code with harry"
    }

    const youtubers3 = {
        name: "Vinod Bahador Thapa",
        channel: "Thapa Technical"
    }
    // CALL METHOD OF JAVASCRIPT HERE
    youtubers.feature.call(youtubers2, (`6 star`), "join")

    // APPLY METHOD OF JAVASCRIPT HERE
    youtubers.feature.apply(youtubers3, [(10 + " " + "star"), "join"])

    // BIND METHOD OF JAVASCRIPT HERE
    const youtubers4 = youtubers.feature.bind(youtubers3, 20, "subscribe")
    youtubers4()
