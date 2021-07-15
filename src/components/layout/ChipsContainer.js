import Chip from "@material-ui/core/Chip";
// import { useTheme } from "@material-ui/core/styles";

const ChipsContainer = ({label}) => {
  // const { palette } = useTheme();
  // const chipColor = palette.secondary.main;
  // const [chipData, setChipData] = useState([
  //   { key: 0, label: 'All' },
  //   { key: 1, label: 'Jethalal Champaklal Gada' },
  //   { key: 2, label: 'Comedies' },
  //   { key: 3, label: 'Tamil Cinema' },
  //   { key: 4, label: 'T-Series' },
  //   { key: 5, label: 'Bollywood Music' },
  //   { key: 6, label: 'Thrillers' },
  //   { key: 7, label: 'Sushant Singh Rajput' },
  //   { key: 8, label: 'Music' },
  // ]);
  // const viewChips=(chipData)=>{
  //   chipData.map((data)=>{
  //     return (chipData.label,chipData.key)
  //   });
  // }

  return (

    <div style={styles.container}>
      <Chip
        color="secondary"
        // variant="outlined"
        label={label}
        onClick={() => { }}
      />
    </div>
  );

};

const styles = {
  container: {
    height: 50,
    border: "1px solid #ccc",
    padding: "8px",
    display: "flex",
  },
};

export default ChipsContainer;
