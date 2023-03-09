import React, {useState} from "react";
import { Card, Icon, Image, Modal } from 'semantic-ui-react'

function BoardGameCard ({eBO, handleFavoriteUpdate}) {

    const [toggleFavorited, setToggleFavorited] = useState(eBO.favorited)
    const [openCardModal, setOpenCardModal] = useState(false);
    
    const handleFavoriteClick = (eventObj) => {
        const isFavorited = !toggleFavorited;
        setToggleFavorited(isFavorited)
        handleFavoriteUpdate(eBO.id, isFavorited)
    }
    
    const handleBoardGameCardClick = () => {
        setOpenCardModal(true)
    }

    return (
        <div>
            <div>
                <Modal
                    onClose={() => setOpenCardModal(false)}
                    open={openCardModal}
                >
                    <Modal.Header>Add a Board Game!</Modal.Header>
                    <Modal.Content>
                        Testing
                    </Modal.Content>
                    <Modal.Actions>
                        Hello
                    </Modal.Actions> 
                </Modal>
            </div>
            <div>
                <Card className="four wide column" onClick={handleBoardGameCardClick}>
                    <Image 
                        label={{ as: 'a', corner: 'right', icon: toggleFavorited ? ("heart") : ("heart outline") }}
                        src={eBO.image} 
                        alt = {eBO.name} 
                        wrapped ui={false}
                        onClick = {handleFavoriteClick} 
                    />
                    <Card.Content>
                        <Card.Header>{eBO.name}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>
                            {eBO.shortdescription}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <p>
                            <Icon name='users' />
                            {eBO.playerCount}
                        </p>
                        <p>
                            <Icon name='clock'/>
                            {eBO.playTime}
                        </p>
                    </Card.Content>
                </Card>
            </div>
        </div>



        // <div className = "boardGameCard">
        //     <img src={eBO.image} alt = {eBO.name} className = "cardImage"/>
        //     <h3>{eBO.name}</h3>
        //     <p>
        //         {isLiked ? (<AiFillHeart onClick = {toggleLikeClick}/>) : (<AiOutlineHeart onClick = {toggleLikeClick}/>)}
        //         {eBO.likes}
        //         {(eBO.likes === 1) ? " like" : " likes" }
        //     </p>
        //     <p><GrGroup /> {eBO.playerCount}</p>
        //     <p><FaRegClock /> {eBO.playTime}</p>
        // </div>
    )
}

export default BoardGameCard;

// Possibly Look towards replacing the icon in the ternary with a more thematic representation 
