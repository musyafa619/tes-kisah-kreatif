import React from 'react';
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  Text,
  Grid,
  GridItem,
  Flex,
  Button,
} from '@chakra-ui/react';
import MobileNav from '../../../components/MobileNav';
import Sidebar from '../../../components/Sidebar';
import VesselActivityCard from '../../../components/vessel/VesselActivityCard';
import { Link, useLocation, useParams } from 'react-router-dom';
import { BackIcon, ExportIcon } from '../../../components/Icons';

const vesselActivities = [
  'KM Abusamah',
  'KM Ibrahim Zahier',
  'KM Ibrahim Zahier',
  'KM Mochtar Prabu Mangkunegara',
  'KM Pusri Indonesia',
  'SPUB PI 1',
  'KM Soemantri Brodjonegoro',
  'MT Salmon Mustofa',
  'MT Sultan Mahmud Badaruddin II',
];

export default function VesselActivityDetail() {
  const { username } = useParams();

  return (
    <Box
      flex
      flexDirection={'column'}
      justifyContent={'flex-start'}
      textAlign="left"
      minHeight={'100vh'}
      px={8}
    >
      <Text fontWeight={500} fontSize={'2xl'} color="primary" mb={4} mt={6}>
        Vessel Activity
      </Text>
      <Flex alignItems="center" gap={4}>
        <Link to="/vessel-activity">
          <BackIcon boxSize={8} color="primary" cursor="pointer" />
        </Link>
        <VesselActivityCard small vessel={username.replaceAll('-', ' ')} />
      </Flex>
      <Grid templateColumns="repeat(2, 1fr)" gap={12} mt={6}>
        <GridItem w="100%">
          <Flex flexDirection={'column'} gap={4}>
            <ContentCard title={'Voyage'}>
              <Text textAlign={'center'} fontWeight={700}>
                19
              </Text>
            </ContentCard>
            <ContentCard title={'Position'}>
              <Text textAlign={'center'} fontWeight={700}>
                Surabaya
              </Text>
            </ContentCard>
            <ContentCard title={'Activity'}>
              <Text textAlign={'center'} fontWeight={700}>
                Discharge
              </Text>
            </ContentCard>
            <Grid templateColumns="repeat(2, 1fr)" gap={12}>
              <GridItem w="100%">
                <ContentCard title={'ETA'}>
                  <Text textAlign={'center'} fontWeight={700}>
                    29/10/2022
                  </Text>
                </ContentCard>
              </GridItem>
              <GridItem w="100%">
                <ContentCard title={'ETD'}>
                  <Text textAlign={'center'} fontWeight={700}>
                    02/12/2022
                  </Text>
                </ContentCard>
              </GridItem>
            </Grid>
            <ContentCard title={'Cargo BL'} padding={'0px'}>
              <Flex>
                <Box flex={1} backgroundColor="primary" p={2}>
                  <Text textAlign={'center'} fontWeight={700} color="white">
                    PSP
                  </Text>
                </Box>
                <Box flex={3} p={2}>
                  <Text textAlign={'center'} fontWeight={700}>
                    0,00
                  </Text>
                </Box>
              </Flex>
            </ContentCard>
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Flex flexDirection={'column'} gap={4}>
            <ContentCard title={'RoB'} padding={'0px'}>
              <Flex>
                <Box flex={1} backgroundColor="#E4E4E7" p={2}>
                  <Text textAlign={'center'} fontWeight={700} color="primary">
                    COB
                  </Text>
                </Box>
                <Box flex={3} p={2}>
                  <Text textAlign={'center'} fontWeight={700}>
                    0,00
                  </Text>
                </Box>
              </Flex>
            </ContentCard>
            <ContentCard padding={'0px'}>
              <Flex>
                <Box flex={1} backgroundColor="#E4E4E7" p={2}>
                  <Text textAlign={'center'} fontWeight={700} color="primary">
                    Fuel
                  </Text>
                </Box>
                <Box flex={3} p={2}>
                  <Text textAlign={'center'} fontWeight={700}>
                    254
                  </Text>
                </Box>
              </Flex>
            </ContentCard>
            <ContentCard padding={'0px'}>
              <Flex>
                <Box flex={1} backgroundColor="#E4E4E7" p={2}>
                  <Text textAlign={'center'} fontWeight={700} color="primary">
                    LO
                  </Text>
                </Box>
                <Box flex={3} p={2}>
                  <Text textAlign={'center'} fontWeight={700}>
                    528
                  </Text>
                </Box>
              </Flex>
            </ContentCard>
            <ContentCard padding={'0px'}>
              <Flex>
                <Box flex={1} backgroundColor="#E4E4E7" p={2}>
                  <Text textAlign={'center'} fontWeight={700} color="primary">
                    LW
                  </Text>
                </Box>
                <Box flex={3} p={2}>
                  <Text textAlign={'center'} fontWeight={700}>
                    170
                  </Text>
                </Box>
              </Flex>
            </ContentCard>
            <ContentCard title={'NOTE'}>
              <Text textAlign={'left'} ml={1}>
                Proses Perencanaan Perbaikan
              </Text>
            </ContentCard>
            <ContentCard title={'Next Port'}>
              <Text textAlign={'center'} fontWeight={700}>
                Shipyard
              </Text>
            </ContentCard>
          </Flex>
        </GridItem>
      </Grid>
      <Flex alignItems="center" justifyContent="flex-end" gap={4} mt={8}>
        <Button
          variant="unstyled"
          color="white"
          background="primary"
          rightIcon={<ExportIcon boxSize={6} color="white" />}
          px={6}
          py={2}
          display="flex"
          alignItems="center"
          gap={2}
        >
          Export PDF
        </Button>
        <Button
          variant="unstyled"
          color="primary"
          background="#E4E4E7"
          rightIcon={<ExportIcon boxSize={6} color="primary" />}
          px={6}
          py={2}
          display="flex"
          alignItems="center"
          gap={2}
        >
          Export Excel
        </Button>
      </Flex>
    </Box>
  );
}

const ContentCard = ({ children, title, padding }) => (
  <Flex flexDirection={'column'} gap={2}>
    {title && (
      <Text color="primary" fontWeight={500} fontSize="sm">
        {title}
      </Text>
    )}

    <Box
      p={padding ? padding : 2}
      borderRadius={'15px'}
      border="3px solid #40609E"
      color="primary"
      fontSize={'md'}
      overflow="hidden"
    >
      {children}
    </Box>
  </Flex>
);
