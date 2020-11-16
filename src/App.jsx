import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import TodoItem from "./Components/TodoItem";
import { default as useStyles } from "./styles";

export default function App() {
  const classes = useStyles();

  const [itemValue, setValue] = useState("");
  const [itemArr, setItems] = useState([]);

  const handleItemValue = (event) => {
    setValue(event.target.value);
  };

  const handleEnterClick = (event) => {
    if (event.key === "Enter" && itemValue.trim()) {
      const newItem = {
        id: Date.now(),
        title: itemValue,
      };
      setItems((oldItems) => {
        return [...oldItems, newItem];
      });
      setValue("");
    }
  };

  const handleItemDelete = (event) => {
    const newArr = itemArr.filter((item) => item.id !== event);
    setItems(newArr);
  };

  const itemsList = itemArr.map((val, index) => (
    <TodoItem
      val={val}
      index={index + 1}
      onRemove={handleItemDelete}
      key={val.id}
    />
  ));

  return (
    <Card className={classes.root}>
      <CardHeader title="React TodDo app"></CardHeader>
      <CardContent className={classes.cardContent}>
        <div className={classes.emptyList}>{itemArr.length ? itemsList : "Список пуст"}</div>
      </CardContent>
      <CardActions className={classes.CardActions}>
        <TextField
          className={classes.customInput}
          id="outlined-basic"
          label="Добавьте себе задание"
          variant="outlined"
          value={itemValue}
          onChange={handleItemValue}
          onKeyDown={handleEnterClick}
        />
      </CardActions>
    </Card>
  );
}
