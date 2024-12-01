import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from './Calendar.module.css'; // Importando o CSS Module
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
    { title: 'Reunião com a equipe', start: new Date(2024, 11, 2, 10, 0), end: new Date(2024, 11, 2, 11, 0) },
    { title: 'Feedback com cliente', start: new Date(2024, 11, 3, 14, 0), end: new Date(2024, 11, 3, 15, 0) }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleSelectSlot = ({ start, end }) => {
    setIsModalOpen(true);
  };

  const handleSaveEvent = () => {
    const newEvent = { title, start: new Date(start), end: new Date(end) };
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
  const [showModal, setShowModal] = useState(false);

  // Função para fechar o modal
  const handleClose = () => setShowModal(false);

  // Função para abrir o modal
  const handleShow = () => setShowModal(true);


  return (
    <main className={styles.main}>
      <div className={styles.text_welcome}>
        <h2>Organize-se</h2>
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
            components={
              {
                toolbar: () => null,
                header: () => null,
              }
            }
          />
        </div>


        {isModalOpen && (
          <div className={styles.modal}>
            <h3 className={styles.modal_title}>Adicionar Evento</h3>
            <div className={styles.modal_input}>
              <label>Título</label>
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className={styles.input_field}
              />
            </div>
            <div className={styles.modal_input}>
              <label>Data de Início</label>
              <input
                type="datetime-local"
                value={start}
                onChange={e => setStart(e.target.value)}
                className={styles.input_field}
              />
            </div>
            <div className={styles.modal_input}>
              <label>Data de Fim</label>
              <input
                type="datetime-local"
                value={end}
                onChange={e => setEnd(e.target.value)}
                className={styles.input_field}
              />
            </div>
            <div className={styles.modal_actions}>
              <button onClick={handleSaveEvent} className={styles.save_button}>Salvar</button>
              <button onClick={handleCloseModal} className={styles.cancel_button}>Cancelar</button>
            </div>
          </div>
        )}
      </div>

      <ModalTask show={showModal} handleClose={handleClose} />
    </main>
  );
};

export default MyCalendar;
