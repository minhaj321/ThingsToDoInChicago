import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayIcon from './../../Assets/Media/Play.svg'
import './AccordianComp.css';

export default function AccordianComp() {
  return (
    <div>
      <Accordion className='accordianMain1'>
        <AccordionSummary
          expandIcon={<img src={PlayIcon} className='accordianIcon' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='accordianTypo'>GROUP AMANITIES</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {/* here is the content */}
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordianMain'>
        <AccordionSummary
          expandIcon={<img src={PlayIcon} className='accordianIcon' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='accordianTypo' >PAYMENT METHOD(S) ACCEPTED</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {/* here is the content */}
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordianMain'>
        <AccordionSummary
          expandIcon={<img src={PlayIcon} className='accordianIcon' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='accordianTypo' >FACILITY MEETING SPACE DETAILS</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {/* here is the content */}
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordianMain'>
        <AccordionSummary
          expandIcon={<img src={PlayIcon} className='accordianIcon' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='accordianTypo' >FACILITY AMANITIES</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {/* here is the content */}
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordianMainlast'>
        <AccordionSummary
        //   expandIcon={<img src={PlayIcon} className='accordianIcon' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='accordianTypo' >CERTIFICATIONS / RATINGS</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {/* here is the content */}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}