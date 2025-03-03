"use client"

import { useState, useEffect } from "react"

const VisitorCounter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Get the current count from localStorage or initialize to 0
    const storedCount = localStorage.getItem("visitorCount")
    let newCount = 1

    if (storedCount) {
      newCount = Number.parseInt(storedCount) + 1
    }

    // Store the updated count
    localStorage.setItem("visitorCount", newCount.toString())
    setCount(newCount)
  }, [])

  return <div className="text-sm text-gray-400">Visitor Count: {count}</div>
}

export default VisitorCounter

