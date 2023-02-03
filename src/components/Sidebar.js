import React, { useState } from 'react';
import { Box, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import {
  DashboardIcon,
  ScheduleIcon,
  VesselActivityIcon,
  VesselIcon,
  CrewlistIcon,
  MaintenanceIcon,
  UserIcon,
  BackIcon,
  WeatherCloudIcon,
  WeatherWindIcon,
  WeatherSunIcon,
} from './Icons';
import { Link, useLocation } from 'react-router-dom';

const LinkItems = [
  { name: 'Dashboard', icon: DashboardIcon, path: '/' },
  { name: 'Schedule', icon: ScheduleIcon, path: '/schedule' },
  {
    name: 'Vessel Activity',
    icon: VesselActivityIcon,
    path: '/vessel-activity',
  },
  { name: 'Vessel', icon: VesselIcon, path: '/vessel' },
  { name: 'Crewlist', icon: CrewlistIcon, path: '/crewlist' },
  { name: 'Maintenance', icon: MaintenanceIcon, path: '/maintenance' },
  { name: 'User', icon: UserIcon, path: '/user' },
];

const Sidebar = ({ onClose, ...rest }) => {
  const { pathname } = useLocation();
  const [selectedMenu, setSelectedMenu] = useState('/vessel-activity');

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('rgba(48, 82, 150, 0.92)')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: '280px' }}
      pos="fixed"
      h="full"
      py="30px"
      color="white"
      fontSize={'14px'}
      pt={'110px'}
      {...rest}
    >
      {LinkItems.map((link) => (
        <NavItem
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
          pathname={pathname}
          path={link.path}
          key={link.name}
          icon={link.icon}
        >
          {link.name}
        </NavItem>
      ))}

      <Box
        display={'flex'}
        flexDirection="column"
        justifyContent="flex-start"
        px={'27px'}
        gap="12px"
        position="fixed"
        w={'100%'}
        maxW={'280px'}
        bottom={3}
      >
        <Text textAlign={'left'} fontSize="14px" fontWeight={800}>
          Jakarta, Indonesia
        </Text>
        <WeatherCard />
        <Box
          backgroundColor={'secondary'}
          w="fit-content"
          borderRadius={'50%'}
          p={1}
        >
          <BackIcon boxSize={8} color="primary" />
        </Box>
      </Box>
    </Box>
  );
};

const NavItem = ({
  icon,
  children,
  path,
  pathname,
  setSelectedMenu,
  selectedMenu,
  ...rest
}) => {
  return (
    <Link
      onClick={() => setSelectedMenu(path)}
      to={path}
      style={{ textDecoration: 'none' }}
    >
      <Flex
        align="center"
        p="12px 22px"
        mx="27px"
        mb="5px"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        color={selectedMenu === path ? 'rgba(64, 96, 158, 1)' : 'white'}
        background={selectedMenu === path ? 'white' : 'rgba(64, 96, 158, 1)'}
        fontWeight="500"
        {...rest}
      >
        {icon && <Icon mr="4" fontSize="16" as={icon} />}
        {children}
      </Flex>
    </Link>
  );
};

const WeatherCard = () => {
  return (
    <Flex
      align="center"
      mb="5px"
      borderRadius="20px"
      role="group"
      cursor="pointer"
      fontWeight="500"
      bg="#C9E5FF"
      w="100%"
      boxShadow={'0px 34px 101px rgba(9, 0, 63, 0.38)'}
      flexDirection="column"
      p={2}
      pb={4}
      gap={1}
    >
      <Flex alignItems={'center'}>
        <img
          alt="weather"
          src="/weather.png"
          style={{ width: 120, marginLeft: -30 }}
        />
        <Box
          style={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 700,
          }}
        >
          <Text
            style={{
              background:
                '-webkit-linear-gradient(#296399 21.68%, rgba(255, 255, 255, 0) 187.46%)',
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent',
            }}
            fontSize={'2xl'}
          >
            32º
          </Text>
          <Text fontSize={'xs'} color="#658CAF">
            Sunny Cloud
          </Text>
        </Box>
      </Flex>
      <Flex
        style={{
          fontFamily: 'DM Sans',
          fontWeight: 700,
        }}
        justifyContent="space-around"
        width={'100%'}
      >
        <Box>
          <WeatherWindIcon />
          <Text fontSize={'xs'} color="#668CAF">
            16 km/h
          </Text>
        </Box>
        <Box>
          <WeatherCloudIcon />
          <Text fontSize={'xs'} color="#668CAF">
            83%
          </Text>
        </Box>
        <Box>
          <WeatherSunIcon />
          <Text fontSize={'xs'} color="#668CAF">
            2 of 10
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
