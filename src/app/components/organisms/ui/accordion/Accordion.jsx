'use client'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import { FAQ } from '@/utils/const'

const Accordion = styled(props => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: 'rgba(0,0,0,0)',
  border: `0px solid red`,
  '&:not(:last-child)': {
    borderBottom: '2px solid var(--screamin-green-400)',
  },
  '&::before': {
    display: 'none',
  },
}))

const AccordionSummary = styled(props => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: '0.9rem', color: 'var(--screamin-green-400)' }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, 0)',
}))

export const CustomizedAccordions = () => {
  return (
    <div>
      {FAQ.map(({ question, answer }) => (
        <Accordion key={question}>
          <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          // aria-controls="panel3-content"
          // id="panel3-header"
          >
            {question}
          </AccordionSummary>
          <AccordionDetails>{answer}</AccordionDetails>
        </Accordion>
      ))}
      {/* <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Collapsible Group Item #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Collapsible Group Item #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  )
}
