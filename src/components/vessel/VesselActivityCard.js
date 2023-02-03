import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { VesselIcon } from '../Icons';
import { Link } from 'react-router-dom';

const VesselActivityCard = ({ vessel, small }) => {
  return (
    <Link to={`/vessel-activity/${vessel.replaceAll(' ', '-')}`}>
      <Flex
        cursor={'pointer'}
        alignItems="center"
        bg={'primary'}
        borderRadius={25}
        borderBottomWidth="1px"
        p={small ? '15px 30px' : '42px 30px'}
        gap={6}
        color="white"
        fontWeight={800}
        h={small ? 'fit-content' : 28}
      >
        <VesselIcon boxSize={8} />
        <Text fontSize={'sm'}>{vessel}</Text>
      </Flex>
    </Link>
  );
};

export default VesselActivityCard;
