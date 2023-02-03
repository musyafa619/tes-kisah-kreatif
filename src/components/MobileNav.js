import React from 'react';
import {
  IconButton,
  Avatar,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Box,
} from '@chakra-ui/react';
import { MenuIcon, ProfileIcon } from './Icons';

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 0 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={'space-between'}
      pos="fixed"
      w={'100%'}
      zIndex={1}
      {...rest}
    >
      <Box display="flex" alignItems={'center'}>
        <MenuIcon boxSize={8} />
        <Box>
          <img
            alt="logo"
            src="/logo.png"
            style={{ width: 120, marginLeft: 250 }}
          />
        </Box>
      </Box>
      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          //   icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}
            >
              <HStack>
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-end"
                  spacing="1px"
                  mr={4}
                  color={'#395897'}
                >
                  <Text fontSize="16px" fontWeight={500}>
                    Khevin Reinal G.
                  </Text>
                  <Text fontSize="xs">PIC PILOG</Text>
                </VStack>
                <ProfileIcon boxSize={10} />
              </HStack>
            </MenuButton>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default MobileNav;
