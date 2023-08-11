import axios from "axios";
import { useEffect, useState } from "react";

const Scrolling = () => {
    const [store, setStore] = useState([]);
    const [page, setPage] = useState(1);

    const fetching = async () => {
        try {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/posts?limit=9&_page=${page}`
            );

            if (response.data && response.data.length > 0) {
                setStore((prev) => [...prev, ...response.data]);
                setPage((prevPage) => prevPage + 1);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetching();
    }, []);

    const scrollDown = () => {
        if (
            window.innerHeight + window.scrollY >= document.body.offsetHeight
        ) {
            fetching();
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollDown);
        return () => {
            window.removeEventListener("scroll", scrollDown);
        };
    }, []);

    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {store.map((item) => {
                    const { userId, id, title, body } = item;
                    return (
                        <div
                            key={userId || id}
                            style={{
                                width: 200,
                                border: "1px solid black",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "8px",
                            }}
                        >
                            <h3>{title}</h3>
                            <p>{body}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Scrolling;
