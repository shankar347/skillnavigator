import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import goldstar from '../../assets/medal.png'
import silverstar from '../../assets/silver.png'
import bronzestar from '../../assets/bronze.png'

const Mcqrestult = () => {
  
      
        // const downloadReport = async () => {
        //   setLoading(true);
        //   try {
        //     // Send request to generate the report and get PDF
        //     const response = await axios.post('/api/generate-report-pdf', {
        //       candidateId,
        //       courseData,
        //     }, {
        //       responseType: 'blob', // Important for file downloads
        //     });
      
        //     // Create a link to download the PDF
        //     const blob = new Blob([response.data], { type: 'application/pdf' });
        //     const url = window.URL.createObjectURL(blob);
        //     const link = document.createElement('a');
        //     link.href = url;
        //     link.setAttribute('download', 'report.pdf'); // Name the file
        //     document.body.appendChild(link);
        //     link.click();
        //     link.remove(); // Clean up
        //   } catch (error) {
        //     console.error('Error downloading report:', error);
        //   } finally {
        //     setLoading(false);
        //   }
        // };
    return (
     <Flex flexDir={'column'}>
       <Flex 
       mt={'5'}
       fontFamily={'sans-serif'}
       fontSize={'42px'}
       color={'blue.700'}
       alignSelf={'center'}
       textShadow={'2px 3px 4px gray'}
       fontWeight={'550'}
       >
       Congrulations!
       </Flex>
       <Flex 
    mt={'16'}
    gap={'5'}
    alignSelf={'center'}
    >
     <Flex flexDir={'column'}
     alignItems={'center'}
     >
     <Image src={goldstar} 
      width={'150px'}
      height={'150px'}
      transform={'rotate(-20deg)'}
     />
     </Flex>
     <Flex flexDir={'column'}
     alignItems={'center'}
     mt={'-10'}
     >
     <Image src={goldstar} 
      width={'150px'}
      height={'150px'}
     />
     
     </Flex>
     <Flex flexDir={'column'}
     alignItems={'center'}
     >
     <Image src={goldstar} 
      width={'150px'}
      height={'150px'}
     transform={'rotate(20deg)'}
     />
    </Flex>
    </Flex>
    <Flex
    fontSize={'19px'}
    fontWeight={'550'}
    alignSelf={'center'}
    mt={'5'}
    >
    You scored 9 out of 10
    </Flex>
    <Flex 
    mt={'4'}
    cursor={'pointer'}
    _hover={{
        textDecoration:'underline'
    }}
    alignSelf={'center'}
    fontSize={'15px'}
    fontWeight={'550'}
    color={'blue.700'}
    textAlign={'center'}
    >
        Proivde Feedback
    </Flex>
     </Flex>
  )
}

export default Mcqrestult