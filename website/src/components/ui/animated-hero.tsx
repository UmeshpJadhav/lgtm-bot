"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Github, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";


function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Better", "Faster", "Smarter", "Cleaner", "Safer"],
    []
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full bg-white dark:bg-black min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="mb-4">
            <Button
              variant="secondary"
              size="sm"
              className="gap-2 bg-gray-100 dark:bg-gray-900 text-black dark:text-white border-gray-200 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              <Zap className="w-4 h-4" />
              AI-Powered Code Review
            </Button>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
              <div className="text-black dark:text-white">Ship</div>
              <div className="relative h-16 md:h-20 lg:h-24 flex items-center justify-center overflow-visible">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold text-black dark:text-white"
                    initial={{ opacity: 0, y: "-100%" }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : {
                            y: titleNumber > index ? "-100%" : "100%",
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Code</div>
            </h1>
          </div>

          {/* Subheadline */}
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl leading-relaxed text-gray-600 dark:text-gray-400">
              Connect Jira tickets to GitHub PRs for intelligent, automated code
              reviews.{" "}
              <span className="font-semibold text-black dark:text-white">
                Save 80% of review time
              </span>{" "}
              while improving code quality.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="gap-2 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              variant="default"
            >
              Get Started Free <MoveRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              className="gap-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 px-8 py-4 text-lg font-semibold"
              variant="outline"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
