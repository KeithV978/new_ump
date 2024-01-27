import { Chip, Container } from '@mui/material';
import PropType from 'prop-types';
import React from 'react';

const Badge = ({ count, children }) => (
    <Container>
        {children}
        {count >= 1 && <Chip color="primary" size='small'>{count}</Chip>}
    </Container>
)


Badge.propTypes = {
    count: PropType.number.isRequired,
    children: PropType.oneOfType([
      PropType.arrayOf(PropType.node),
      PropType.node
    ]).isRequired
  };

export default Badge;