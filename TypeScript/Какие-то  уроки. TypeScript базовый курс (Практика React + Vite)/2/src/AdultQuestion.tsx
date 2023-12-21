import { MouseEvent, ChangeEvent, FC } from 'react'

type AdultOrNotProps = {
  setIsAdult: (value: boolean) => void
}

const AdultOrNot: FC<AdultOrNotProps> = ({ setIsAdult }) => {
  const yesHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setIsAdult(true)
  }

  const noHandler = () => {
    setIsAdult(false)
  }

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  return (
    <div>
      Вам Есть 18?
      <button onClick={yesHandler}>Да</button>
      <button onClick={noHandler}>Нет</button>
      <input onChange={inputHandler} type='text' />
    </div>
  )
}

export default AdultOrNot
