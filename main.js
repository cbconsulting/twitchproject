$(function () {
    var streaming = ["Bacon_Donut", "BeyondTheSummit", "Slootbag", "Staiy", "RelaxBeats", "Nick28T", "trueplayer8989", "FreeCodeCamp"];
    var url = "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";
    $.getJSON(url, function (d1) {
        if (d1.stream === null) {
            $("#freeCodeCamp").html('<span class="Orange">Offline</span>');
        } else {
            $("#freeCodeCamp").html('<span class="green">On-line</span>');
        }
    });
    for (var i = 0; i < streaming.length; i++) {
        var channelUrl = "https://wind-bow.glitch.me/twitch-api/channels/" + streaming[i];
        $.getJSON(channelUrl, function (d2) {
            var logo;
            var name;
            var status;
            if (!d2.error) {
                if (d2.logo) {
                    logo = d2.logo;
                } else {
                    logo = "https://www.moviebytes.com/images/icons/comments.png";
                }
                name = d2.name;
                status = d2.status;
                var streamsUrl = "https://wind-bow.glitch.me/twitch-api/streams/" + name;
                $.getJSON(streamsUrl, function (d3) {
                    if (d3.stream !== null) {
                        $("#channelIsOn").prepend(
                            '<div class="row online"><div class="col-4"><img src="' + logo + '"><hr/></div><div class="col-4"><a href="https://www.twitch.tv/' +
                            name + '" target="_blank">' + name + '</a></div><div class="col-4 green">Online<hr/><br/><br/><span class="small text-muted">' +
                            status + '</span></div></div>');
                    } else {
                        $("#channelIsOff").append(
                            '<div class="row offline"><div class="col-4"><img src="' + logo + '"></div><div class="col-4"><a href="https://www.twitch.tv/' +
                            name + '" target="_blank">' + name + '</a></div><div class="col-4 red">Offline<hr/></div></div>');
                    }
                });
            }
        });
    }
});