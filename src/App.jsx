import React from "react";
import { observer } from 'mobx-react-lite';
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import TodoItem from "./Components/TodoItem";
import { default as useStyles } from "./styles";

import { useStore } from './store'

const App = () => {
  const { todosModule } = useStore();
  const { todos, onEnter, nameInput, setNameInput, serverData } = todosModule;
  const classes = useStyles();

  const itemsList = todos.map((val, index) => (
    <TodoItem
      val={val}
      index={index + 1}
      key={val.id}
    />
  ));


  return (
    <Card className={classes.root}>
      <CardHeader title="React TodDo app"></CardHeader>
      <CardContent className={classes.cardContent}>
        <div className={classes.emptyList}>{todos.length ? itemsList : "Список пуст"}</div>
      </CardContent>
      <CardActions className={classes.CardActions}>
        <TextField
          className={classes.customInput}
          id="outlined-basic"
          label="Добавьте себе задание"
          variant="outlined"
          value={nameInput}
          onChange={(event) => setNameInput(event.target.value)}
          onKeyDown={onEnter}
        />
      </CardActions>
      <div>{serverData.title}</div>
    </Card>
  );
}


export default observer(App);