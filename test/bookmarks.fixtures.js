function makeBookmarksArray() {
    return [
        {
            id: 1,
            title: "Google",
            url: "www.google.com",
            description: "Search for stuff",
            rating: 5
        },
        {
            id: 2,
            title: "IGN",
            url: "www.ign.com",
            description: "Video game stuff",
            rating: 2
        },
        {
            id: 3,
            title: "Github",
            url: "www.github.com",
            description: "Code stuff",
            rating: 5
        },
        {
            id: 4,
            title: "Twitch",
            url: "www.twitch.tv",
            description: "Watch stuff",
            rating: 3
        },
    ]
}

module.exports = { makeBookmarksArray }