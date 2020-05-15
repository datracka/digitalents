import React from 'react';
import styled from '@emotion/styled';

import Modal, { useControlledModal } from '../../components/ui/Modal';

const Box = styled.div`
  background: #fff;
  padding: 40px 80px;
`;

const Modals = () => {
  const [modalProps, toggle] = useControlledModal();
  const [modalProps2, toggle2] = useControlledModal();
  const [modalProps3, toggle3] = useControlledModal();
  return (
    <div>
      <button onClick={toggle} type="button">
        Toggle
      </button>
      <button onClick={toggle2} type="button">
        Toggle 2
      </button>
      <Modal {...modalProps}>
        <Box>
          Modal 1
          <br />
          <button onClick={toggle3} type="button">
            Toggle 3
          </button>
        </Box>
      </Modal>
      <Modal {...modalProps2}>
        <Box>Modal 2</Box>
      </Modal>
      <Modal {...modalProps3}>
        <Box>Modal 3</Box>
      </Modal>
    </div>
  );
};

export default Modals;
