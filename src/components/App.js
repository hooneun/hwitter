import React, { useEffect, useState } from "react"
import AppRouter from "components/Router"
import { authService } from "fbase"

function App() {
  const [init, setInit] = useState(false)
  const [isLoggedIn, setIsLoggeIn] = useState(false)
  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        setIsLoggeIn(true)
      } else {
        setIsLoggeIn(false)
      }
      setInit(true)
    })
  }, [])
  return (
    <>
    {init ? <AppRouter isLoggedIn={ isLoggedIn }/> : "initializing..."}
    <footer>&copy; {new Date().getFullYear()} Hwitter</footer>
    </>
  );
}

export default App;
