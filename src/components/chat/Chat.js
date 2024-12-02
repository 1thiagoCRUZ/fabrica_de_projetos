import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import styles from './Chat.module.css';
import UserList from "./UserList";
import iconSend from '../../img/send.svg'
import talklog from '../../img/talkloglogo.svg'


const supabase = createClient(
    "https://shfwrnrhfemybjovlfpu.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNoZndybnJoZmVteWJqb3ZsZnB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4ODA1NzYsImV4cCI6MjA0MzQ1NjU3Nn0.wHbQHu7wyamEoXc6pJ_VJ3xp95VCLVK_ON9pLpjP10Y"
);

const Chat = () => {
    const user_id = localStorage.getItem("user_id");
    const user_avatar = localStorage.getItem("avatar_url");
    const [selectedUser, setSelectedUser] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        if (!selectedUser) return;

        const fetchMessages = async () => {
            const response = await fetch(
                `https://api-talklog.onrender.com/v1/chat/messages/${user_id}/${selectedUser.id}`
            );
            const data = await response.json();
            if (data.success === 1) {
                setMessages(data.data);
            }
        };

        fetchMessages();

        const channel = supabase
            .channel("chat_channel")
            .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages" }, (payload) => {
                if (
                    (payload.new.sender_id === user_id && payload.new.receiver_id === selectedUser.id) ||
                    (payload.new.sender_id === selectedUser.id && payload.new.receiver_id === user_id)
                ) {
                    setMessages(prevMessages => {
                        return [...prevMessages, payload.new];
                    });
                }
            })
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [user_id, selectedUser]);

    useEffect(() => {
        if (messages.length > 0) {
            setNewMessage("");
        }
    }, [messages]);

    const sendMessage = async () => {
        if (!newMessage.trim()) return;

        const response = await fetch("https://api-talklog.onrender.com/v1/chat/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                sender_id: user_id,
                receiver_id: selectedUser.id,
                message: newMessage,
            }),
        });

        const data = await response.json();

        if (data.success === 1 && data.data) {
            const newMessageData = data.data;

            if (!newMessageData.id) {
                console.error("ID da nova mensagem não encontrado!");
                return;
            }

            // Atualiza as mensagens
            setMessages(prevMessages => {
                return [
                    ...prevMessages,
                    {
                        id: newMessageData.id,
                        sender_id: user_id,
                        receiver_id: selectedUser.id,
                        message: newMessage,
                        created_at: new Date().toISOString(),
                    }
                ];
            });

            setNewMessage("");
        } else {
            console.error("Erro ao enviar mensagem:", data.message || "Mensagem não enviada");
        }
    };

    return (
        <div className={styles.main}>
            <div className={styles.chat_container}>
                <div className={styles.user_list}>
                    <UserList onUserSelect={(user) => setSelectedUser(user)} />
                </div>
                <div className={styles.chat_window}>
                    {selectedUser ? (
                        <div>
                            <div className={styles.info_user_chat}>
                                <span className={styles.span_name}>{selectedUser.name}</span>
                                <span><p>{selectedUser.email}</p></span>
                            </div>

                            <div className={styles.line_bottom_name}> </div>
                            <div className={styles.messages}>
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={msg.sender_id === user_id ? styles.message_from_user : styles.message_from_other}
                                    >
                                        <div className={styles.message_wrapper}>
                                            <div className={styles.avatar_and_message}>
                                                {msg.sender_id === user_id ? (
                                                    <img
                                                        src={user_avatar}
                                                        alt="User Avatar"
                                                        className={styles.user_avatar}
                                                    />
                                                ) : (
                                                    <img
                                                        src={selectedUser.avatar_url}
                                                        alt="Other User Avatar"
                                                        className={styles.user_avatar}
                                                    />
                                                )}
                                                <p>{msg.message}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.message_input_content}>
                                <input
                                    type="text"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    placeholder="Escrever"
                                    className={styles.search_user}
                                />
                                <button onClick={sendMessage}>
                                    <img src={iconSend} alt="Send" />
                                </button>
                            </div>
                        </div>
                    ) : (
                            <div className={styles.logo_container}>
                                <img src={talklog} alt="Logo" />
                            </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Chat;
