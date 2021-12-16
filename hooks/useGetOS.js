import { useState, useEffect } from "react"

const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"]
const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"]
const iosPlatforms = ["iPhone", "iPad", "iPod"]

const useGetOS = () => {
  const [os, setOs] = useState(null)

  useEffect(() => {
    const userAgent = window.navigator.userAgent
    const platform = window.navigator.platform

    if (macosPlatforms.indexOf(platform) !== -1) {
      setOs("Mac OS")
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      setOs("iOS")
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      setOs("Windows")
    } else if (/Android/.test(userAgent)) {
      setOs("Android")
    } else if (!os && /Linux/.test(platform)) {
      setOs("Linux")
    }
  }, [setOs])

  return os
}

export default useGetOS
