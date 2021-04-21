import Datepicker from 'react-datepicker'
<Datepicker
  required
  selected={appDate}
  onChange={handleChangeDate}
  showTimeSelect
  dateFormat="Pp"
  className="Datepicker pa2"
  minDate={new Date()}
  placeholderText="Select a date"
  calendarClassName="rasta-stripes"
  popperModifiers={{
    offset: {
      enabled: true,
      offset: '0px, 0px'
    },
    preventOverflow: {
      enabled: true,
      escapeWithReference: false,
      boundariesElement: 'scrollParent'
    }
  }}
/>
