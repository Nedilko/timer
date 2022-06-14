import Button from './Button'

const SettingsButton = () => {
  const handleClick = () => {
    console.log('Click click...')
  }

  return (
    <Button onClick={handleClick}/>
  )
}

export default SettingsButton