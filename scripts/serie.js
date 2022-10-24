var Serie = /** @class */ (function () {
    function Serie(id, fullName, channelName, seasonsNum, description, linkView, linkImg) {
        this.id = id;
        this.name = fullName;
        this.channel = channelName;
        this.seasons = seasonsNum;
        this.description = description;
        this.linkView = linkView;
        this.linkImg = linkImg;
    }
    return Serie;
}());
export { Serie };
