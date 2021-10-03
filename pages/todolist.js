import styles from "../styles/Todolist.module.css";
import { useEffect, useState } from "react";
import EditableTable from "../components/todolist/EditableTable";
import { Button } from "antd";

import { useContext } from "react";
import AuthContext from '../contexts/AuthContext'
const TodoList = () => {
  const {userInfo} = useContext(AuthContext)
  if(!userInfo){
    return (<h1>please login first</h1>)
  }
  return (
    <>
      <div className={styles.Todo}>
        <div className={styles.TodoTable}>
          <EditableTable/>
        </div>
      </div>
    </>
  );
};

export default TodoList;
