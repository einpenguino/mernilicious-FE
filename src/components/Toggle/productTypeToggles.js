import * as React from 'react';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Typography } from '@mui/material';

export default function ProductTypeToggles({parentFormat, setFormatsParent}) {
//   const [formats, setFormats] = React.useState(() => ['Cleanser']);

  const handleFormat = (event, newFormats) => {
    setFormatsParent(newFormats);
    // setFormats(formats)
  };
//   React.useEffect(()=>{console.log(formats)},[formats])
  return (
    <ToggleButtonGroup
      value={parentFormat}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      <ToggleButton value="Cleanser" aria-label="bold">
        {/* <FormatBoldIcon /> */}
        <Typography>
            Cleanser
        </Typography>
      </ToggleButton>
      <ToggleButton value="Treatment" aria-label="italic">
        {/* <FormatItalicIcon /> */}
        <Typography>
            Treatment
        </Typography>
      </ToggleButton>
      <ToggleButton value="Moisturiser" aria-label="underlined">
        {/* <FormatUnderlinedIcon /> */}
        <Typography>
            Moisturiser
        </Typography>
      </ToggleButton>
      <ToggleButton value="Sunscreen" aria-label="underlined">
        {/* <FormatUnderlinedIcon /> */}
        <Typography>
            Sunscreen
        </Typography>
      </ToggleButton>
      {/* <ToggleButton value="color" aria-label="color" disabled>
        <FormatColorFillIcon />
        <ArrowDropDownIcon />
      </ToggleButton> */}
    </ToggleButtonGroup>
  );
}