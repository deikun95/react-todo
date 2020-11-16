import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { default as useStyles } from "../styles";

export default function App({ val, index, onRemove }) {
  const classes = useStyles();

  const [itemValue, setValue] = useState(val.title);
  const [editMode, setEditMode] = useState(false);

  const btnLabel = () => {
    if (editMode) {
      return "Сохранить";
    }
    return "Удалить";
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSetValue = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    if (editMode) {
      setEditMode(false);
    } else {
      onRemove(val.id);
    }
  };

  const handleEnterClick = (event) => {
    if (event.key === "Enter" && itemValue.trim()) {
      setEditMode(false);
    }
  };
  return (
    <div className={classes.item}>
      <div className={classes.itemText} onClick={handleEdit}>
        {index})&nbsp;
        {editMode ? (
          <input
            style={{ fontSize: 18 }}
            onChange={handleSetValue}
            value={itemValue}
            onKeyDown={handleEnterClick}
          ></input>
        ) : (
          <div className={classes.itemTitle}>{itemValue}</div>
        )}
      </div>
      <Button color={!editMode ? "secondary" : "primary"} onClick={handleClick}>
        {btnLabel()}
      </Button>
    </div>
  );
}
