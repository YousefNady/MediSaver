// hooks/useSmartDownload.js
import { useState, useEffect, useRef } from 'react'

// 🔧 SET YOUR STORE LINKS HERE
const STORE_LINKS = {
  android:
    "https://play.google.com/store/apps/details?id=com.medisaver.app",
  ios: "https://apps.apple.com/app/medisaver/id0000000000",
};

function detectDevice() {
  const ua = navigator.userAgent || ''
  const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream
  const isAndroid = /Android/.test(ua)
  if (isIOS) return 'ios'
  if (isAndroid) return 'android'
  return 'desktop'
}

export function useSmartDownload() {
  const [device, setDevice] = useState('desktop')

  useEffect(() => {
    setDevice(detectDevice())
  }, [])

  function handleDownload() {
    if (device === 'ios') {
      window.open(STORE_LINKS.ios, '_blank', 'noopener,noreferrer')
    } else if (device === 'android') {
      window.open(STORE_LINKS.android, '_blank', 'noopener,noreferrer')
    }
    // desktop: does nothing — SmartDownloadButton handles the modal
  }

  return { device, handleDownload, storeLinks: STORE_LINKS }
}