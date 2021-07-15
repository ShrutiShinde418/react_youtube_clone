import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ChipsContainer from "./ChipsContainer";
import ImgMediaCard from "../UI/ImgMediaCard";
import { DateTime, Duration } from "luxon";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const HomeContent = (props) => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState([{
    channel: "LankyBox",
    duration: { seconds: 30 },
    id: "XTTW7Y_60AE",
    image: "https://i.ytimg.com/vi/XTTW7Y_60AE/mqdefault.jpg",
    timestamp: "9 days ago",
    title: "Who Is SMARTER? :joy: #shorts",
    views: "131108206"
  },
  {
    channel: "Tsuriki Show",
    duration: { seconds: 13 },
    id: "nB6r1oF2Dv0",
    image: "https://i.ytimg.com/vi/nB6r1oF2Dv0/mqdefault.jpg",
    timestamp: "6 days ago",
    title: "Love to prank my husband:joy: #shorts",
    views: "51699157"
  },
  {
    channel: "Ducky Bhai",
    duration: { minutes: 14, seconds: 52 },
    id: "04_Znifwy98",
    image: "https://i.ytimg.com/vi/04_Znifwy98/mqdefault.jpg",
    timestamp: "4 days ago",
    title: "Hania Aamir VS Asim Azhar | THE END !!!",
    views: "2167507"
  },
  {
    channel: "Tsuriki Show",
    duration: { seconds: 14 },
    id: "T3bITs9BvJA",
    image: "https://i.ytimg.com/vi/T3bITs9BvJA/mqdefault.jpg",
    timestamp: "10 days ago",
    title: "Best prank on my dad:joy: #shorts",
    views: "63551592"
  }]);

  const classes = useStyles();
  const [chipData, setChipData] = useState([
    { key: 0, label: "All" },
    { key: 1, label: "Jethalal Champaklal Gada" },
    { key: 2, label: "Comedies" },
    { key: 3, label: "Tamil Cinema" },
    { key: 4, label: "T-Series" },
    { key: 5, label: "Bollywood Music" },
    { key: 6, label: "Thrillers" },
    { key: 7, label: "Sushant Singh Rajput" },
    { key: 8, label: "Music" },
    { key: 9, label: "Livw" },
    { key: 10, label: "Bhajan Music" },
    { key: 11, label: "A. R. Rahman" },
    { key: 12, label: "Auditions" },
    { key: 13, label: "Rapping" },
    { key: 14, label: "Pop Music" },
  ]);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=9&regionCode=PK&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.items);
        const videos = [];

        for (const item of data.items) {
          const video = {
            id: item.id,
            title: item.snippet.title,
            image: item.snippet.thumbnails.medium.url,
            views: item.statistics.viewCount,
            timestamp: DateTime.fromISO(item.snippet.publishedAt).toRelative(),
            channel: item.snippet.channelTitle,
            duration: Duration.fromISO(item.contentDetails.duration).toObject(),
          };

          videos.push(video);
        }

        console.log(videos);
        setIsLoading(false);
        setLoadedVideos(videos);
        setChipData();
      });
  }, []);
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div style={{ backgroundColor: "#fafafa", minHeight: "100%" }}>
      {chipData.map((data) => (
        <ChipsContainer label={data.label} />
      ))}

      <div className={classes.root}>
        <GridList
          cellHeight={props.sideBarOpen ? 272 : 296}
          // cellWidth={200}
          className={classes.gridList}
          cols={4}
        >
          {loadedVideos.map((video) => (
            <GridListTile key={video.id}>
              <ImgMediaCard video={video} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
};

export default HomeContent;
