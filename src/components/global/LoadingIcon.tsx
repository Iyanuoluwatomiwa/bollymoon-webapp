import logo from '../../assets/images/logo2.webp'

function LoadingIcon() {
  return (
    <div className="w-full h-full flex items-center justify-center text-xs">
      <img
        src={logo}
        alt="loading"
        className="animate-pulse"
        width={100}
        height={100}
      />
    </div>
  )
}
export default LoadingIcon
