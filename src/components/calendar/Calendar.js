import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from './Calendar.module.css';
import Filter from '../layout/filter/Filter';
import ModalTask from '../tasks/modal_task/ModalTask';

const localizer = momentLocalizer(moment);

const injectStyles = () => {
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = `
    .rbc-month-view {
      border: none !important;
      background: transparent !important;
    }

    .rbc-day-bg {
      border: none !important;
      background: #242424 !important;
    }

    .rbc-month-row {
      margin: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    .rbc-row {
      margin: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    .rbc-header {
    border: none !important;
    }
  `;
  document.head.appendChild(styleSheet);
};

const MyCalendar = () => {
  useEffect(() => {
    injectStyles();
  }, []);

  const [events, setEvents] = useState([
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [description, setDescription] = useState('');  // Nova variável para a descrição
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleSelectSlot = ({ start, end }) => {
    setStart(start);
    setEnd(end);
    setIsModalOpen(true);
  };

  const handleSaveEvent = () => {
    const newEvent = { title, start: new Date(start), end: new Date(end), description };
    setEvents([...events, newEvent]);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(currentDate);
    prevMonth.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(nextMonth);
  };

  const monthYear = moment(currentDate).format('MMMM YYYY');

  const dayPropGetter = () => {
    return {
      style: {
        border: 'none',
        backgroundColor: '#252525',
        marginLeft: '10px',
        marginBottom: '10px',
      },
    };
  };

  const eventPropGetter = (event) => {
    return {
      style: {
        backgroundColor: '#FFCC00',
        color: '#000',
        borderRadius: '4px',
        width: 'auto',
        height: 'auto',
        marginLeft: '10px',
      },
    };
  };


  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const handleShow = () => setShowModal(true);

  const formattedDate = moment(start).format('dddd, MMMM D, YYYY');

  return (
    <main className={styles.main}>
      <div className={styles.text_welcome}>
        <h2 style={{ color: 'white' }}>Organize-se</h2>
        <Filter btnText={"New task"} handleShow={handleShow} />
      </div>
      <div className={styles.calendar_container}>
        <div className={styles.header}>
          <div className={styles.header_year}>
            <h2 className={styles.month_year}>{monthYear}</h2>
            <button onClick={handlePrevMonth} className={styles.nav_button}>
              {'<'}
            </button>
            <button onClick={handleNextMonth} className={styles.nav_button}>
              {'>'}
            </button>
          </div>

          <div>
            <p>
              Veja seu planejamento nesse mês e adicione <br /> mais compromissos
            </p>
          </div>
        </div>

        {/* Calendário */}
        <div className={styles.calendar}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{
              height: 1100,
              border: 'none',
              background: 'transparent',
            }}
            views={['month']}
            selectable
            onSelectSlot={handleSelectSlot}
            date={currentDate}
            className={styles.calendar_content}
            dayPropGetter={dayPropGetter}
            eventPropGetter={eventPropGetter} 
            components={{
              toolbar: () => null,
              header: () => null,
            }}
          />

        </div>


        {isModalOpen && (
          <div className={styles.modal} style={{ backgroundColor: '#353535' }}>
            <h3 className={styles.modal_title} style={{ color: 'white' }}>
              {formattedDate}
            </h3>
            <div className={styles.modal_input}>
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Título"
                className={styles.input_field}
                style={{ backgroundColor: '#242424', border: 'none', color: '#fff' }}
              />
            </div>
            <div className={styles.modal_input}>
              <input
                type="datetime-local"
                value={start}
                onChange={e => setStart(e.target.value)}
                className={styles.input_field}
                style={{ backgroundColor: '#242424', border: 'none', color: '#fff' }}
                placeholder="Data de Início"
              />
            </div>
            <div className={styles.modal_input}>
              <input
                type="datetime-local"
                value={end}
                onChange={e => setEnd(e.target.value)}
                className={styles.input_field}
                style={{ backgroundColor: '#242424', border: 'none', color: '#fff' }}
                placeholder="Data de Fim"
              />
            </div>
            <div className={styles.modal_input}>
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                className={styles.input_field}
                style={{ backgroundColor: '#242424', border: 'none', color: '#fff' }}
                placeholder="Descrição"
              />
            </div>
            <div className={styles.modal_actions}>
              <button
                onClick={handleCloseModal}
                className={styles.cancel_button}
                style={{ backgroundColor: '#242424', color: '#fff' }}
              >
                Cancelar
              </button>
              <button
                onClick={handleSaveEvent}
                className={styles.save_button}
                style={{ backgroundColor: '#FFCC00', color: '#000' }}
              >
                Criar
              </button>
            </div>
          </div>
        )}
      </div>

      <ModalTask show={showModal} handleClose={handleClose} />
    </main>
  );
};

export default MyCalendar;
