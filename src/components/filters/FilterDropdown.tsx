
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { ChevronUp } from 'lucide-react';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  padding: 0,
  backgroundColor: '#fff',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ChevronUp/>}
    {...props}
  />
  ))(({ theme }) => ({
    padding: 0,
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(180deg)',
    },
    '& .MuiAccordionSummary-content': {
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
}));

export type AccordionElem = {
  title: string, 
  id: string,
  body: React.JSX.Element;
}

type FilterDropdownLayoutProps = {
  content: AccordionElem[]
}

export default function FilterDropdownLayout( { content }: FilterDropdownLayoutProps ) {
  const [expanded, setExpanded] = useState<string | false>(content[0].id);

  if (!content.length) return null

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      {content.map(e=> (
      <Accordion key={e.id} expanded={expanded === e.id} onChange={handleChange(e.id)}>
        <AccordionSummary aria-controls={`${e.id}-content`} id={`${e.id}-header`}>
          <Typography variant="h4">
            {e.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {e.body}
        </AccordionDetails>
      </Accordion>
      ))}
    </div>
  );
}