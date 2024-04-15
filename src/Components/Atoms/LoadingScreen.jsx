import getting_ready from "../../img/simple-pokeball.gif"

const LoadingScreen = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img src={getting_ready} alt="Loading..." />
    </div>
  )
}

export default LoadingScreen