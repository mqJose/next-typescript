import { useState } from 'react'
import { SideBarMenuCard, SideBarMenuItem } from '../types/types'
import { classNames } from '../utils/classes'
import { VscMenu } from 'react-icons/vsc'

interface SideBarMenuProps {
  items: SideBarMenuItem[];
  card: SideBarMenuCard;
}

const SideBarMenu = ({ items, card }: SideBarMenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div
      className={classNames('SideBarMenu', isOpen ? 'expanded' : 'collapsed')}
    >
      <div className="menuButton">
        <button>
          <VscMenu />
        </button>
      </div>
    </div>
  )
}

export default SideBarMenu
