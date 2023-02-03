import React from 'react';
import { Box, Text, Grid, GridItem } from '@chakra-ui/react';
import VesselActivityCard from '../../components/vessel/VesselActivityCard';

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

export default function VesselActivity() {
  return (
    <Box
      flex
      flexDirection={'column'}
      justifyContent={'flex-start'}
      textAlign="left"
      minHeight={'100vh'}
      px={8}
    >
      <Text fontWeight={500} fontSize={'2xl'} color="primary" mb={12} mt={6}>
        Vessel Activity
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={12}>
        {vesselActivities.map((vessel) => (
          <GridItem w="100%">
            <VesselActivityCard vessel={vessel} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
