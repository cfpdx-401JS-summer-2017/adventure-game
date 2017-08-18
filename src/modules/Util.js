export function loadingScreen() {
  return (
    <div>Welcome to the game.</div>
  )
}

export function creditScreen() {
  return (
    <div>These awesome people worked on this awesome game.</div>
  )
}

export function resultsScreen(result) {
  return (
    <div>You {result ? won : lost}!</div>
  )
}