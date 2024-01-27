import { useModal } from "../../../hooks";
import PropType from 'prop-types';
import React, { Fragment } from 'react';
import Filter from './index';
import Modal from '../Modal'
import { Box, Button } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";


const FiltersToggle = ({ children }) => {
    const { isOpenModal, onOpenModal, onCloseModal  } = useModal;

    return(
        <Fragment>
            <Box onClick={onOpenModal}>
                {children}
            </Box>

            <Modal
                isOpen={isOpenModal}
                onRequestClose={onCloseModal}
            >
                <Box>
                    <Filter closeModal={onCloseModal}/>
                </Box>
                <Button onClick={onCloseModal}>
                    <CloseRounded/>
                </Button>
            </Modal>
        </Fragment>
    )
}


FiltersToggle.propTypes = {
    children: PropType.oneOfType([
      PropType.arrayOf(PropType.node),
      PropType.node
    ]).isRequired
  };
  
export default FiltersToggle;