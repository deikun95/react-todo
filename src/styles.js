import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  root: {
    width: 500,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    color: "black",
  },
  pos: {
    marginBottom: 12,
  },
  cardContent: {
    height: '210px',
    overflowY: 'auto',
  },
  CardActions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  customInput: {
    width: "70%",
    marginBottom: '30px'
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    '&:hover': {
      backgroundColor:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    }
  },
  itemText: {
    display: "flex",
    fontSize: 18,
    alignItems: "center",
    cursor: "pointer",
  },
  emptyList: {
    textAlign: "center",
  },
});
