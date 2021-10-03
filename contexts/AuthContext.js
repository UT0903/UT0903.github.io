import { useEffect, useState } from "react";
import { createContext } from "react";

const AuthContext = createContext({
  userInfo: null,
  setUserInfo:()=>{},
  modalShow: false,
  setModalShow: () => {},
});
export const AuthContextProvider = ({ children }) => {
  const [modalShow, setModalShow] = useState(false);
  const [userInfo, setUserInfo] = useState(null)
  useEffect(()=>{
    const s = sessionStorage.getItem("UserInfoJWT")
    console.log('s', s)
    if(!s){
      setUserInfo(s)
    }
  }, [])
  useEffect(()=>{
    sessionStorage.setItem("UserInfoJWT", userInfo)
  }, [userInfo])
  const context = { userInfo, setUserInfo, modalShow, setModalShow };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;