import { useEffect, useState, useContext } from "react";

// import axios from "axios";
import "antd/dist/antd.css";
import SearchTable from "../components/search/NewSearchTable";
//import SelectedTable from "../components/search/SelectedTable";
import SearchForm from "../components/search/SearchForm";
import { Modal, message, Button } from "antd";
//import { CONCAT_SERVER_URL } from "../utils";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import Header from "../components/Header";
import AuthContext from "../contexts/AuthContext";
import axio from "../contexts/axios";
const MAX_TABLE_NUM = 10;
const BASEROWNUM = 50;
const SearchCourse = () => {
  const { userInfo } = useContext(AuthContext);
  const [searchKey, setSearchKey] = useState(null);
  // const { data = { courses: [] }, refetch } = useQuery(
  //   "getCourses",
  //   async () => {
  //     return await axio.post("/api/getCourseNum", {
  //       searchKey,
  //       startIdx,
  //       endIdx,
  //     });
  //   }
  //   // {
  //   //   onSuccess: (data) => {
  //   //     setTotal(data.total);
  //   //   },
  //   // }
  // );
  const onSearch = async(sk)=>{
    setSearchKey(sk)
    const {res, err} = await axio.post("/api/getCourseNum", {
      searchKey:sk,
      startIdx:0,
      rowNum:BASEROWNUM
    });
  }
  const [rowItems, setRowItems] = useState([
    {
      _id: "60ccc97a70861ee41d99e799",
      id: "97008",
      class_name: "土風舞",
      class_id: "00250260",
      class_num: "H9",
      semester: "109-2",
      reg_student_num: "199",
      study_student_num: "52",
      credit: "1.0",
      teacher_name: "魏豐閔",
      reg_method: "2",
      limit_student_num: "44",
    },
    {
      _id: "60ccc97a70861ee41d99e79a",
      id: "97009",
      class_name: "標準舞",
      class_id: "00250310",
      class_num: "J3",
      semester: "109-2",
      reg_student_num: "269",
      study_student_num: "57",
      credit: "1.0",
      teacher_name: "王學富",
      reg_method: "2",
      limit_student_num: "48",
    },
  ]);
  
  const loadMore = () => {
    // simulate a request
    return fetch("/api/getCourse")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log("fetch", result);
        setRowItems(rowItems.concat(result.courses));
      });
  };
  const onRowClick = (e) => {
    console.log(e);
  }
  const onRowRightClick = (e) => {
    console.log(e);
  }
  // const displayStatus = (payload) => {
  //   if (payload.msg) {
  //     const { type, msg } = payload;
  //     const content = { content: msg, duration: 1.5 };
  //     switch (type) {
  //       case "success":
  //         message.success(content);
  //         break;
  //       case "error":
  //       default:
  //         message.error(content);
  //         break;
  //     }
  //   }
  // };
  if (!userInfo) return <h1>Please Login First</h1>;
  return (
    <>
      <SearchForm onSearch={onSearch}/>
      <SearchTable rowCount={100000} rowItems={rowItems} setRowItems={setRowItems} loadMore={loadMore} onRowClick={onRowClick} onRowRightClick={onRowRightClick}/>
    </>
  );
};

export default SearchCourse;
