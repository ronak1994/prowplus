"use client"
import React, { useEffect } from 'react'

const Seo = ({ title }:any) => {
  useEffect(() => {
    document.title = `Odin Ai - ${title}`
  }, [])
  
  return (
    <>
    </>
  )
}

export default Seo;