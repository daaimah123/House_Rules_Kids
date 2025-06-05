"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Home, Calendar, Trophy, Gamepad2 } from "lucide-react"

export default function HouseRulesPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    // Slide 1: Title & Welcome
    {
      id: "welcome",
      title: "🏠 EPIC HOUSE RULES 🏠",
      content: (
        <div className="text-center space-y-6">
          <div className="text-6xl mb-4">🎮🌟🏡</div>
          <h2 className="text-3xl font-bold text-purple-700">Welcome Jahdai & Malaika!</h2>
          <p className="text-xl text-gray-700">
            Y'all are about to have the most LEGENDARY summer and school year EVER!
          </p>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl shadow-lg">
            <p className="text-lg font-semibold">This presentation is going to be LIT! 🔥</p>
          </div>
        </div>
      ),
    },

    // Slide 2: Agenda
    {
      id: "agenda",
      title: "📋 What We're Covering Today",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-amber-200 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-800">
                  <Trophy className="h-5 w-5" />
                  Celebration Time!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700 font-medium">Celebrating your amazing school year! 🎉</p>
              </CardContent>
            </Card>

            <Card className="bg-teal-200 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-teal-800">
                  <Calendar className="h-5 w-5" />
                  Summer Rules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-teal-700 font-medium">Fun summer guidelines for 69 days of freedom! ☀️</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-200 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Gamepad2 className="h-5 w-5" />
                  School Year Rules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 font-medium">Staying organized during the school year! 📚</p>
              </CardContent>
            </Card>

            <Card className="bg-purple-200 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-800">
                  <Home className="h-5 w-5" />
                  All Year Rules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700 font-medium">Chores and responsibilities that never stop! 💪</p>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },

    // Slide 3: Celebration
    {
      id: "celebration",
      title: "🎉 LEVEL UP ACHIEVED! 🎉",
      content: (
        <div className="text-center space-y-6">
          <div className="bg-gradient-to-r from-pink-400 to-yellow-400 text-white p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4">CONGRATULATIONS!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="text-3xl font-bold">Jahdai 🦸🏾‍♂️</h3>
                <p className="text-lg">Completed 1st Grade!</p>
                <p className="text-2xl">➡️ 2nd Grade Hero!</p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="text-3xl font-bold">Malaika 👸🏾</h3>
                <p className="text-lg">Completed 6th Grade!</p>
                <p className="text-2xl">➡️ 7th Grade Queen!</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-teal-400 to-cyan-400 text-white p-4 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Summer Break Stats:</h3>
            <div className="flex justify-center gap-8">
              <Badge className="bg-white/20 text-white border-0 text-lg p-2 backdrop-blur-sm">69 Days of Fun!</Badge>
              <Badge className="bg-white/20 text-white border-0 text-lg p-2 backdrop-blur-sm">
                ~10 Weeks of Adventure!
              </Badge>
            </div>
            <p className="mt-2 text-white/90">From June 5th to August 13th, 2025</p>
          </div>
        </div>
      ),
    },

    // Slide 4: Privileges
    {
      id: "privileges",
      title: "🌟 PRIVILEGE UNLOCKS: Your XP Rewards! 🌟",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl text-center shadow-lg">
            <h2 className="text-xl font-bold">These are the awesome perks you earn for being House Rules MVPs!</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-purple-200 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-purple-800 text-center">ALL YEAR ROUND 🎯</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 text-sm text-purple-700">
                <p>🎮 Gaming & Screen Time Access</p>
                <p>🤝 Friend Hangouts (at home or theirs)</p>
                <p>🌳 Daily Outdoor Time</p>
                <p>🏡 Guest Visits (clean room required!)</p>
                <p>📚🎨 Evening Activity Choice</p>
                <p>🎉 Family Fun Time (Fri-Sun)</p>
                <p>🎬🎲 Family Movie/Game Night Pick</p>
                <p>🍦 Weekly Special Dessert Choice</p>
                <p>✨ Room Decorating Input</p>
                <p>💰 Allowance/Pocket Money</p>
                <p>🌙 Occasional "Stay Up Late" Pass</p>
                <p>🐾 Dedicated Pet Playtime</p>
                <p>🛍️ Special Outing Pick</p>
              </CardContent>
            </Card>

            <Card className="bg-amber-200 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-amber-800 text-center">☀️ SUMMER VIBES</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 text-sm text-amber-700">
                <p>😴 Later Wake-Up & Bedtime</p>
                <p>☀️ Extended Summer Electronics Hours</p>
                <p>🤗 "Hang Out with Mommy" Requests</p>
                <p>🚴‍♂️ More Outdoor Exploration</p>
                <p>🏊‍♀️ Pool/Beach Day Approval</p>
                <p>🍦 Ice Cream Truck/Treat Runs</p>
                <p>🎨 Bonus Creative Project Time</p>
                <p>🌳 Longer Bike Rides/Nature Walks</p>
              </CardContent>
            </Card>

            <Card className="bg-teal-200 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-teal-800 text-center">📚 SCHOOL YEAR</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 text-sm text-teal-700">
                <p>🎮 Weekday After-School Electronics</p>
                <p>⏰ Weekend Electronics Hours</p>
                <p>🛌 Weekend Bedtime Flex</p>
                <p>🍎 Unlimited Fruit & Approved Snacks</p>
                <p>🍽️ Help with Meal Prep</p>
                <p>🎁 Weekend Treat Pick</p>
                <p>📖 Extra Reading/Story Time</p>
                <p>📝 "Free Choice" Homework Spot</p>
                <p>🚀 Early Release Gaming (Mini-Boost)</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-pink-400 to-purple-400 text-white p-3 rounded-xl text-center shadow-lg">
            <p className="font-bold">
              Remember: These privileges are like special abilities in a game – you unlock and maintain them by
              consistently following the rules! 🎮✨
            </p>
          </div>
        </div>
      ),
    },

    // Slide 5: Summer Rules Overview
    {
      id: "summer-overview",
      title: "☀️ SUMMER VIBES ACTIVATED! ☀️",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white p-4 rounded-xl text-center shadow-lg">
            <h2 className="text-2xl font-bold">Summer = More Freedom + More Responsibility!</h2>
            <p className="text-lg">We're keeping this house looking absolutely FIRE! 🏡🔥</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-amber-200 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-amber-800">🌅 Sleep Schedule</CardTitle>
              </CardHeader>
              <CardContent className="text-amber-700">
                <p>
                  <strong>Wake up:</strong> No later than 9:45am
                </p>
                <p>
                  <strong>Bedtime:</strong> 10pm every day
                </p>
                <p className="text-sm text-amber-600 mt-2">No cap, this keeps you energized! ⚡</p>
              </CardContent>
            </Card>

            <Card className="bg-teal-200 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-teal-800">📱 Electronics Time</CardTitle>
              </CardHeader>
              <CardContent className="text-teal-700">
                <p>
                  <strong>Gaming Hours:</strong> 9:45am - 5pm
                </p>
                <p>
                  <strong>Evening Vibes:</strong> Reading, learning, creativity
                </p>
                <p className="text-sm text-teal-600 mt-2">It's giving balance vibes! 🎮📚</p>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },

    // Slide 6: Summer Morning Routine
    {
      id: "summer-morning",
      title: "🌅 Summer Morning Glow-Up Routine",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl text-center shadow-lg">
            <h2 className="text-xl font-bold">BEFORE Electronics, Outside Time, Food, or Hanging with Mom!</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { task: "Make your bed", emoji: "🛏️", bgColor: "bg-blue-200", textColor: "text-blue-800" },
              { task: "Clean your room completely", emoji: "🧹", bgColor: "bg-teal-200", textColor: "text-teal-800" },
              { task: "Put away clean laundry", emoji: "👕", bgColor: "bg-amber-200", textColor: "text-amber-800" },
              { task: "Take a shower", emoji: "🚿", bgColor: "bg-purple-200", textColor: "text-purple-800" },
              { task: "Wash your face", emoji: "🧴", bgColor: "bg-pink-200", textColor: "text-pink-800" },
              { task: "Clean ears (behind too!)", emoji: "👂", bgColor: "bg-orange-200", textColor: "text-orange-800" },
              { task: "Brush your teeth", emoji: "🦷", bgColor: "bg-cyan-200", textColor: "text-cyan-800" },
              { task: "Lotion your body", emoji: "🧴", bgColor: "bg-indigo-200", textColor: "text-indigo-800" },
            ].map((item, index) => (
              <Card key={index} className={`${item.bgColor} border-0 shadow-lg`}>
                <CardContent className="p-3 text-center">
                  <div className="text-2xl mb-1">{item.emoji}</div>
                  <p className={`text-sm font-medium ${item.textColor}`}>{item.task}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-3 rounded-xl text-center shadow-lg">
            <p className="font-bold">This routine is gonna have you feeling like THAT person every single day! ✨</p>
          </div>
        </div>
      ),
    },

    // Slide 7: School Year Overview
    {
      id: "school-overview",
      title: "📚 BACK TO SCHOOL BOSS MODE 📚",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 rounded-xl text-center shadow-lg">
            <h2 className="text-2xl font-bold">School Year = Getting that bag + Living your best life! 💯</h2>
            <p className="text-lg">Starting Wednesday, August 13th, 2025 🎒</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-indigo-200 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-indigo-800">⏰ Sleep Schedule</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-indigo-700">
                <p>
                  <strong>Wake up:</strong> No later than 6:45am
                </p>
                <div className="bg-indigo-100 p-2 rounded">
                  <p>
                    <strong>Malaika bedtime:</strong> 9pm (school nights)
                  </p>
                  <p>
                    <strong>Jahdai bedtime:</strong> 8pm (school nights)
                  </p>
                  <p>
                    <strong>Weekend bedtime:</strong> 10pm (both)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-teal-200 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-teal-800">🎮 Electronics Schedule</CardTitle>
              </CardHeader>
              <CardContent className="text-teal-700">
                <p>
                  <strong>Weekdays:</strong> After school - 5pm
                </p>
                <p>
                  <strong>Weekends:</strong> 9:45am - 5pm
                </p>
                <p className="text-sm text-teal-600 mt-2">Homework first, then game time! 📝🎮</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-4">
            <Card className="bg-red-200 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800 justify-center">
                  📚 Homework & Schoolwork Rule 📝
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-bold text-red-700">
                  All homework and school assignments MUST be completed and checked before any electronics, gaming, or
                  other privileges are unlocked for the day. No exceptions, fam! This is how we level up! 🚀
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },

    // Slide 8: Food Rules
    {
      id: "food-rules",
      title: "🍎 Food & Snack Guidelines",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-teal-400 to-cyan-400 text-white p-4 rounded-xl text-center shadow-lg">
            <h2 className="text-xl font-bold">Fuel Your Body Right! 💪</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-green-200 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center gap-2">✅ Always Allowed</CardTitle>
              </CardHeader>
              <CardContent className="text-green-700">
                <ul className="space-y-1">
                  <li>🍎 Unlimited fruit</li>
                  <li>🥕 Two snacks per day (when available)</li>
                  <li>🍽️ Help prepare meals together</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-red-200 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center gap-2">⚠️ Ask First</CardTitle>
              </CardHeader>
              <CardContent className="text-red-700">
                <ul className="space-y-1">
                  <li>🍭 Candy (with approval)</li>
                  <li>🧊 Popsicles (with approval)</li>
                  <li>🚫 No asking to eat out</li>
                  <li>🚫 No sneaking unapproved food</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-3 rounded-xl text-center shadow-lg">
            <p className="font-bold">Breaking food rules = losing privileges! Stay honest! 🤝</p>
          </div>
        </div>
      ),
    },

    // Slide 9: All Year Chores
    {
      id: "chores",
      title: "💪 CHORE CHAMPIONS ALL YEAR!",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl text-center shadow-lg">
            <h2 className="text-xl font-bold">Teamwork Makes the Dream Work! 🏠✨</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-purple-200 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-purple-800">👑 Malaika's Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-purple-700">
                <p>
                  <strong className="text-purple-800">Monday:</strong> Pick up dog poop 🐕
                </p>
                <p>
                  <strong className="text-purple-800">Daily:</strong> Dishes OR trash/dog feeding (alternating)
                </p>
                <p>
                  <strong className="text-purple-800">Daily:</strong> Washing laundry 👕
                </p>
                <p>
                  <strong className="text-purple-800">Tue/Fri:</strong> Clean toilet & tub 🛁
                </p>
                <p>
                  <strong className="text-purple-800">Wednesday:</strong> Clean kitchen 🍽️
                </p>
                <p>
                  <strong className="text-purple-800">Thursday:</strong> Sweep all hard floors 🧹
                </p>
                <p>
                  <strong className="text-purple-800">Friday:</strong> Vacuum sibling bedrooms 🛏️
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-200 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-800">🦸‍♂️ Jahdai's Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-blue-700">
                <p>
                  <strong className="text-blue-800">Monday:</strong> Pick up yard trash 🗑️
                </p>
                <p>
                  <strong className="text-blue-800">Daily:</strong> Dishes OR trash/dog feeding (alternating)
                </p>
                <p>
                  <strong className="text-blue-800">Daily:</strong> Sort clean laundry into baskets 🧺
                </p>
                <p>
                  <strong className="text-blue-800">Tue/Fri:</strong> Clean bathroom floors & counters 🚿
                </p>
                <p>
                  <strong className="text-blue-800">Wednesday:</strong> Sweep all hard floors 🧹
                </p>
                <p>
                  <strong className="text-blue-800">Thursday:</strong> Organize shoes & dining area 👟
                </p>
                <p>
                  <strong className="text-blue-800">Friday:</strong> Vacuum living room 🏠
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-teal-400 to-cyan-400 text-white p-3 rounded-xl text-center shadow-lg">
            <p className="font-bold">Y'all are gonna absolutely DEMOLISH these chores! No cap! 💪🔥</p>
          </div>
        </div>
      ),
    },

    // Slide 10: Respect & Expectations
    {
      id: "respect",
      title: "🤝 RESPECT & EXPECTATIONS",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-red-400 to-orange-500 text-white p-4 rounded-xl text-center shadow-lg">
            <h2 className="text-2xl font-bold">Respect = Trust = More Freedom! 🔑</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-red-200 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-red-800">🚨 SUPER IMPORTANT</CardTitle>
              </CardHeader>
              <CardContent className="text-red-700">
                <p className="font-bold">Respect Mom's Work Signs!</p>
                <p className="text-sm mt-2 text-red-600">When you see the work sign, that means:</p>
                <ul className="text-sm mt-2 space-y-1 text-red-600">
                  <li>• No interruptions unless emergency</li>
                  <li>• Keep noise levels down</li>
                  <li>• Handle your own needs quietly</li>
                </ul>
                <p className="text-red-800 font-bold mt-2">Breaking this rule = Lost privileges!</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-200 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-800">🌟 Daily Expectations</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2 text-blue-700">
                <p>
                  <strong className="text-blue-800">Outside time:</strong> Minimum 1 hour daily (weather permitting)
                </p>
                <p>
                  <strong className="text-blue-800">Guests:</strong> Only in clean bedrooms or living room
                </p>
                <p>
                  <strong className="text-blue-800">Evening time:</strong> Reading, learning, or creativity
                  (5pm-bedtime)
                </p>
                <p>
                  <strong className="text-blue-800">Family time:</strong> Friday-Sunday activities together
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },

    // Slide 11: Conclusion
    {
      id: "conclusion",
      title: "🎯 YOU'VE GOT THIS! 🎯",
      content: (
        <div className="text-center space-y-6">
          <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4">LET'S GOOO! 🔥</h2>
            <p className="text-xl">Jahdai & Malaika are about to absolutely SLAY this summer and school year!</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-amber-200 text-amber-800 p-4 rounded-xl shadow-lg">
              <h3 className="font-bold text-lg">Remember:</h3>
              <ul className="text-sm text-amber-700 mt-2 space-y-1">
                <li>• Follow the routines</li>
                <li>• Respect the rules</li>
                <li>• Help each other</li>
                <li>• Have FUN!</li>
              </ul>
            </div>

            <div className="bg-purple-200 text-purple-800 p-4 rounded-xl shadow-lg">
              <h3 className="font-bold text-lg">The Result:</h3>
              <ul className="text-sm text-purple-700 mt-2 space-y-1">
                <li>• Happy family</li>
                <li>• Clean home</li>
                <li>• More privileges</li>
                <li>• Epic memories!</li>
              </ul>
            </div>
          </div>

          <div className="text-4xl">🏆🎮🌟🏡💫</div>
          <p className="text-2xl font-bold text-gray-700">We're about to make this year absolutely ICONIC! ✨</p>
        </div>
      ),
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">House Rules Presentation</h1>
            <div className="flex items-center gap-2">
              <Badge className="bg-purple-500 text-white border-0">
                Slide {currentSlide + 1} of {slides.length}
              </Badge>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Card className="bg-white shadow-xl min-h-[600px] border-0">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
            <CardTitle className="text-2xl text-center">{slides[currentSlide].title}</CardTitle>
          </CardHeader>
          <CardContent className="p-8">{slides[currentSlide].content}</CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white border-0"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          {/* Slide indicators */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-purple-500" : "bg-gray-300 hover:bg-purple-300"
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white border-0"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Quick Navigation */}
        <div className="mt-4 bg-white rounded-lg p-4 shadow-lg border-0">
          <h3 className="font-bold text-gray-800 mb-2">Quick Navigation:</h3>
          <div className="flex flex-wrap gap-2">
            {slides.map((slide, index) => (
              <Button
                key={index}
                variant={currentSlide === index ? "default" : "outline"}
                size="sm"
                onClick={() => goToSlide(index)}
                className={`text-xs ${
                  currentSlide === index
                    ? "bg-purple-500 hover:bg-purple-600 text-white border-0"
                    : "border-purple-300 text-purple-600 hover:bg-purple-50"
                }`}
              >
                {slide.title
                  .replace(/[🏠📋🎉☀️📚💪🤝🎯]/gu, "")
                  .trim()
                  .substring(0, 15)}
                ...
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
