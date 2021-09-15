import { useEffect, useState } from 'react'
import { SideBarMenuCard, SideBarMenuItem } from '../types/types'
import { classNames } from '../utils/classes'
import { VscMenu } from 'react-icons/vsc'
import SideBarMenuCardView from './SideBarMenuCardView'
import SideBarMenuItemView from './SideBarMenuItemView'

import styles from '../../styles/Home.module.scss'

interface SideBarMenuProps {
  items: SideBarMenuItem[];
  card: SideBarMenuCard;
}

const SideBarMenu = ({ items, card }: SideBarMenuProps) => {
  
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => { 
    console.log(isOpen)
  }, [isOpen])

  return (
    <div
      className={classNames(styles.SideBarMenu , isOpen ? styles.expanded : styles.collapsed)}
    >
      <div className={styles.menuButton}>
        <button 
          type="button"
          className={styles.hamburguerIcon} 
          onClick={() => {
            setIsOpen(!isOpen)
          }}>
          <VscMenu />
        </button>
      </div>
      <SideBarMenuCardView card={card} isOpen={isOpen} />
      {items.map(item =>(
          <SideBarMenuItemView key={item.id} item={item} isOpen={isOpen} />
        ))
      }
    </div>
  )
}

export default SideBarMenu
