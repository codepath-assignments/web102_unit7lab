import { useState, useEffect } from 'react'
import { supabase } from '../client'  // Import your Supabase client
import Card from '../components/Card'

const ReadPosts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase
        .from('Posts')
        .select()
        .order('created_at', { ascending: true })
      if (data) {
        setPosts(data)
      }
    }
    fetchPosts()
  }, [])

  return (
    <div className="ReadPosts">
      {
        posts && posts.length > 0 ?
        [...posts]
        .sort((a, b) => a.id - b.id)
        .map((post) => 
          <Card 
            key={post.id}
            id={post.id}
            title={post.title}
            author={post.author}
            description={post.description}
            betCount={post.betCount}  // pass betCount to Card
          />
        ) : <h2>{'No Challenges Yet 😞'}</h2>
      }
    </div>
  )
}

export default ReadPosts
