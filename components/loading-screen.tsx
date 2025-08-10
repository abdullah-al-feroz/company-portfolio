"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Code2 } from "lucide-react"
import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate a network request or content loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Adjust this duration as needed

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-white via-emerald-50 to-blue-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div
            className="flex flex-col items-center space-y-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Code2 className="h-20 w-20 text-emerald-600" />
            </motion.div>
            <motion.h1
              className="text-4xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              ZenByte
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Crafting Digital Excellence...
            </motion.p>
            <motion.div
              className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden mt-4"
              initial={{ width: 0 }}
              animate={{ width: 192 }} // 48 * 4 = 192px
              transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-500 to-blue-500"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
