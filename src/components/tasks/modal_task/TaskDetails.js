import styles from './TaskDetails.module.css'
import { FaPaperclip } from 'react-icons/fa';
import { FaRegFaceGrin } from "react-icons/fa6";
import { RiImageAddFill } from "react-icons/ri";

function TaskDetailsInput() {
  return (
    <div className={styles.textareaContainer}>
      <textarea
        className={styles.textarea}
        placeholder="Detalhes da task..."
      />
      <div className={styles.iconBar}>
        <FaPaperclip className={styles.icon} title="Anexar arquivo" />
        <RiImageAddFill  className={styles.icon} title="Adicionar imagem" />
        <FaRegFaceGrin className={styles.icon} title="Adicionar emoji" />
      </div>
    </div>
  );
}


export default TaskDetailsInput;
