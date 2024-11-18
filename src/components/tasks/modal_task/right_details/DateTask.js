import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DateTask.module.css';


function DateTask({ finalDate, setFinalDate }) {
  const formatDate = (date) => {
    if (!date) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };



  return (
    <DatePicker
      selected={finalDate}
      onChange={(date) => setFinalDate(date)}
      dateFormat="dd-MM-yyyy"
      placeholderText="Data final"
      customInput={
        <input
          className={styles.date_input}
          value={finalDate ? formatDate(finalDate) : ''}
          readOnly
        />
      }
    />
  );
}

export default DateTask;
