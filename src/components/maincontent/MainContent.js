import React, {useState} from 'react'
import Item from './Item'
import './MainContent.css'

const initialItems = [
  {
    id: 1,
    title: 'Market Overview',
    imageUrl:
      'https://www.soctboma.org/wp-content/uploads/2017/12/stateofthemarket_intro-3527fd7861b78206.jpg',
  },
  {
    id: 2,
    title: 'Economic Times',
    imageUrl:
      'https://m.economictimes.com/thumb/msid-108687301,width-640,height-480,resizemode-7/states-usurping-branding-of-central-schemes-may-lose-cheaper-capex-loans.jpg',
  },
  {
    id: 3,
    title: 'Direct Tax',
    imageUrl:
      'https://media.geeksforgeeks.org/wp-content/uploads/20221125153840/directtax.png',
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
            'https://www.bonrix.co.in/img/product/MonitorPayment&BankingNotification/MonitorPayment&BankingNotification.jpg',
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
