import { Box, Typography } from '@mui/material'
import React from 'react'

const PrivacyConsentTab = () => {
  return (
    <Box>
      <Box sx={{height:'82px', backgroundColor:"#f1f4f6"}}>               
      </Box>
      <Typography sx={{fontSize:'15px',fontWeight:500,display:'flex', justifyContent:"center",mt:'40px'}}>개인정보 수집 및 이용에 대한 동의</Typography>
      <Typography sx={{mt:"29px"}}>개인정보 수집목적 및 이용목적</Typography>
      <Typography>쇼핑몰 회원 서비스 제공</Typography>
      <Typography sx={{mt:"32px"}}>수집하는 개인정보 항목</Typography>
      <Typography>성명, 이메일, 전화번호, 주소</Typography>
      <Typography sx={{mt:"32px"}}>개인정보의 보유기간 및 이용기간</Typography>
      <Typography>원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.</Typography>
    </Box>
  )
}  

export default PrivacyConsentTab 