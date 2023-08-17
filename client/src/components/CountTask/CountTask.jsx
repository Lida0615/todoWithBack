import React from 'react'
import './countTask.css'

const CountTask = () => {
  return (
    <div className='CountTask'>
        <div className="createdTasks">
            Созданные задачи
            <div className='isComplitedTasks_items'> <span>5</span></div>
        </div>
        <div className="isComplitedTasks">
        Завершенные <div className='isComplitedTasks_items'> <span>2</span> из <span>5</span></div>
        </div>
    </div>
  )
}

export default CountTask