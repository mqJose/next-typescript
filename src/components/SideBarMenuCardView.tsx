import Image from 'next/image'
import { SideBarMenuCard } from "../types/types"
import { classNames } from "../utils/classes"

interface SideBarMenuCardViewProps {
  card: SideBarMenuCard;
  isOpen: boolean;
}

const SideBarMenuCardView = ({ card, isOpen }: SideBarMenuCardViewProps) => {
  return (
    <div className="SideBarMenuCardView">
      <Image className="profile" alt="Picture of the author" src={card.photoUrl} layout='fill' objectFit='contain'/>
      <div className={classNames('profileInfo', isOpen ? '' : 'collapsed')}>
        <div className="name">{card.displayName}</div>
        <div className="title">{card.displayName}</div>
        <div className="url">
          <a href={card.url}>Ir al perfil</a>
        </div>
      </div>
    </div>
  )
}

export default SideBarMenuCardView
