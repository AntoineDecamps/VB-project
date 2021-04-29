import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import swal from 'sweetalert';

import './styles.scss';

const DeleteModal = ({ open, openDelete, closeDelete, id, apiURL, redirect, getMeubles, getLuminaires, getDecorations }) => {
  const handleDelete = () => {
    // const token = localStorage.getItem('token');
    axios.delete(`https://vb-creation-api.herokuapp.com/api/${apiURL}/${id}`, {
      headers: {
        // 'X-Auth-Token': token,
        'content-type': 'application/json',
      },
    })
      .then((response) => {
        // console.log(response);
      })
      .then(() => {
        if (apiURL === 'meuble') {
          getMeubles();
        }
        else if (apiURL === 'luminaire') {
          getLuminaires();
        }
        else if (apiURL === 'decoration') {
          getDecorations();
        }
      })
      .then(() => {
        swal('Suppression enregistrée !', '', 'success');
      })
      .catch((error) => {
        console.log(error);
        swal('Action non autorisée !', 'Vous n\'avez pas les droits pour faire ceci !', 'error');
      });
  };
  return (
    <div className="deleteModal">
      <Modal
        closeIcon
        open={open}
        trigger={<Button color="red">Supprimer</Button>}
        onClose={() => closeDelete()}
        onOpen={() => openDelete()}
      >
        <Header icon="archive" content="Suppression de la base de donnée" />
        <Modal.Content>
          <p>
            Etes-vous sûr de vouloir supprimer le produit ?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={() => closeDelete()}>
            <Icon name="remove" /> No
          </Button>
          <Link to={`/admin/${redirect}`}>
            <Button
              color="green"
              onClick={() => {
                handleDelete();
                closeDelete();
              }}
            >
              <Icon name="checkmark" /> Yes
            </Button>
          </Link>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

DeleteModal.propTypes = {};

export default DeleteModal;
