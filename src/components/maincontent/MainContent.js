import React, {useState} from 'react'
import Item from './Item'
import './MainContent.css'

const initialItems = [
  {
    id: 1,
    title: 'Market Overview',
    imageUrl:
      'https://cdn4.vectorstock.com/i/1000x1000/78/03/market-analysis-vector-4667803.jpg',
  },
  {
    id: 2,
    title: 'Economic Times',
    imageUrl: 'https://economictimes.indiatimes.com/photo/68289255.cms',
  },
  {
    id: 3,
    title: 'Direct Tax',
    imageUrl:
      'https://3.imimg.com/data3/CE/TS/MY-2751960/direct-taxes-services-500x500.jpg',
  },
]

const MainContent = () => {
  const [items, setItems] = useState(initialItems)
  const [error, setError] = useState(null)

  const loadMoreItems = async () => {
    try {
      const newItems = [
        {
          id: 4,
          title: 'Monitor Payment & Banking Notification',
          imageUrl:
            'https://c8.alamy.com/comp/K6T10K/secure-payment-notification-in-a-mobile-phone-screen-woman-using-a-K6T10K.jpg',
        },
      ]
      setItems(currentItems => [...currentItems, ...newItems])
    } catch (error) {
      setError('Failed to load more items')
    }
  }

  return (
    <div>
      <div
        style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}
      >
        {items.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </div>
      {error && <div style={{color: 'red'}}>{error}</div>}
      <button onClick={loadMoreItems}>Load More</button>
    </div>
  )
}

export default MainContent
