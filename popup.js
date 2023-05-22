document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('selectEpisode').addEventListener('click', function() {
    selectRandomEpisode();
  });
});

function selectRandomEpisode() {
  const episodes = [
    { title: "Pilot", netflixId: "70136120" },
    { title: "Diversity Day", netflixId: "70126228" },
    { title: "Health Care", netflixId: "70126230" },
    { title: "The Alliance", netflixId: "70126229" },
    // Add more episodes here with their Netflix IDs
  ];

  const randomIndex = Math.floor(Math.random() * episodes.length);
  const randomEpisode = episodes[randomIndex];

  const netflixUrl = `https://www.netflix.com/watch/${randomEpisode.netflixId}`;
  chrome.tabs.create({ url: netflixUrl });
}
