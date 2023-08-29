import { useEffect, useState } from "react";
import axios from "axios";

const ListDataAnkit = () => {
    const [name, setName] = useState([]);

    useEffect(() => {
        let intialArray = [];
        let peopleData = [];
        const result = async () => {
            const multiAPICalls = async (data) => {
                const promises = data.map((u) => axios.get(u));
                const results = await Promise.allSettled(promises);

                return results.map((result) =>
                    result.status === "fulfilled" ? result.value : null
                );
            };

            // API Logic
            let i = 1;
            const getAPIUrl = (id) => `https://swapi.dev/api/species/?page=${id}`;
            let species = [];
            (async () => {
                const apiResponse = await axios.get(getAPIUrl(i));
                const { results, next, count } = apiResponse.data;

                console.log({ results });
                if (results) {
                    species = [...species, ...results];
                }

                if (!next) {
                    return;
                }

                // Find dynamic pages

                const totalPages = Math.ceil(count / results.length);
                const dynamicAPIs = [];
                i++;
                while (i <= totalPages) {
                    dynamicAPIs.push(getAPIUrl(i));
                    i++;
                }

                console.log({ dynamicAPIs, totalPages });

                const dynamicSpecies = await multiAPICalls(dynamicAPIs);
                //console.log("dynamicSpecies: ", dynamicSpecies);

                dynamicSpecies.forEach((item) => {
                    species = [...species, ...item.data.results];
                });

                let peoples = [];

                species.forEach((item) => {
                    peoples = [...peoples, ...item.people];
                });

                for (let i = 0; i < peoples.length; i++) {
                    const apiResponse = await axios.get(peoples[i]);
                    setName((prevState) => [...prevState, apiResponse.data.name]);
                }
            })();
        };
        result();
    }, []);

    console.log({ name });
    return (
        <div>
            {name.map((items, id) => {
                return <div key={id}>Name: {items}</div>;
            })}
        </div>
    );
};

export default ListDataAnkit;
