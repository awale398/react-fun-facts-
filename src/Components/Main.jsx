import React from 'react'

function Main() {
  return (
    <header className='header-main'>
      <h1 className='h1-main'>Fun Facts About React</h1>
      <ul className='ul-main'>
        <li>React was almost named FaxJS because it efficiently "sends" UI updates. Imagine debugging with useFaxEffect()!</li>
        <li>Every React app is basically a soup of div's inside div's. Some call it "Div-ception," others call it HTML spaghetti. 🍝</li>
        <li>React developers love useless comments. You’ll always find "// This is where the magic happens ✨" somewhere in the code.</li>
        <li>The React Dev Cycle: Start a project → Install 100 npm packages → Get confused by useEffect() → Google "Why isn't React re-rendering?" → Reinstall node_modules → Switch to Next.js.</li>
        <li>React is just JavaScript in disguise. It's not magic, just a fancy way to write JavaScript with more curly braces {} and way too much useState().</li>
        <li> React Hooks feel like JavaScript gymnastics. One wrong move, and BOOM—infinite re-renders! 🤸‍♂️</li>
        <li>Every React app has a "console.log Debugger". "Why is this not working?" → "Seriously, why?" → "Maybe I should learn Vue instead?"</li>
        <li>"Fast Refresh" is a lie. React promises instant updates, but we all end up restarting the server… again. 😭</li>
        <li> Redux is where confidence goes to die. You think you understand React, then Redux shows up with reducers, actions, and dispatch.</li>
        <li>React devs have one solution for everything: Need a state? useState(). Fetching data? useEffect(). Need therapy? useTherapist(). (Sadly, not a real hook.)</li>
      </ul>
    </header>
  )
}

export default Main
