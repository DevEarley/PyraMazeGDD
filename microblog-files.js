

(function () {
    let files = [
        'introduction.md',
        'characters.md',
        'story.md',
        'gameplay.md',
        'location-camp.md',
        'location-intro-maze.md',
        'location-moonlight-maze.md',
        'location-birds-eye-maze.md',
        'location-fireball-maze.md',
        'location-hookshot-maze.md',
        'location-hub.md',
        'location-endgame.md',
        'location-warp-graveyard.md',
    ];
    let version="v1";
    let converter = new showdown.Converter();
    let entries = [];
    
    init(entries, files, converter, version);
})();