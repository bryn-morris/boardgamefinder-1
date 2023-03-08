import React from "react";
import BoardGameCard from "./BoardGameCard"
import BoardGameForm from "./BoardGameForm"
import { Button, Modal } from 'semantic-ui-react'
import {MdPostAdd} from "react-icons/md"


function BoardGameContainer ({boardGameArray, handleFormSubmission, handleLikeUpdate }) {

    const [open, setOpen] = React.useState(false)

    return(
        <div className="ui grid container">          
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button className = "big ui button modalbutton"><MdPostAdd/></Button>}
                size= 'small'
            >
            <Modal.Header>Add a Board Game!</Modal.Header>
                <Modal.Content>
                    <BoardGameForm setOpen = {setOpen}handleFormSubmission={handleFormSubmission} />
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        form="newBoardGameSubmit" 
                        type="submit" 
                    >
                        Submit
                    </Button>
                </Modal.Actions> 
            </Modal>
            {boardGameArray.map((eBO) => {
                return (
                    <BoardGameCard 
                        key = {eBO.id} 
                        eBO = {eBO}
                        handleLikeUpdate = {handleLikeUpdate}
                    />
                )
            }
            )}
        </div>
    );
}


export default BoardGameContainer;