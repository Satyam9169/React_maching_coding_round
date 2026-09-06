import useFetchData from "./useFetchData";

const DisplayData = () => {
    const web_url = 'https://jsonplaceholder.typicode.com/posts'
    const { data, loading, error } = useFetchData(web_url);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Not Found data</p>
    return (
        <div>
            <h1>Data Fetching</h1><hr />
            {
                data.length > 0 ? (
                    <ul>{
                        data.map((item) => (
                            <>
                                <div key={item.id}>
                                    <li>Id : {item.id}</li>
                                    <li>Title: {item.title}</li>
                                    <li>Body: {item.body}</li>
                                </div>
                            </>
                        ))
                    }
                    </ul>
                ) : (
                    <p>data not found</p>
                )
            }
        </div>
    )
}

export default DisplayData;