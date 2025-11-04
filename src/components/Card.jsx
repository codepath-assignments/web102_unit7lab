import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'
import { supabase } from '../client'  // Import Supabase client

const Card = (props) => {
  const [count, setCount] = useState(props.betCount || 0) // initialize from prop

  const updateCount = async (event) => {
    event.preventDefault()
    
    // Increment in database
    await supabase
      .from('Posts')
      .update({ betCount: count + 1 })
      .eq('id', props.id)
    
    // Update local state
    setCount(count + 1)
  }

  return (
    <div className="Card">
      <Link to={'edit/' + props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
      <h2 className="title">{props.title}</h2>
      <h3 className="author">{"by " + props.author}</h3>
      <p className="description">{props.description}</p>
      <button className="betButton" onClick={updateCount}>👍 Bet Count: {count}</button>
    </div>
  );
};

export default Card
