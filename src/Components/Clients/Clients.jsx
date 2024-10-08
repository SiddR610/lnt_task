import Top from "./Top";

const Clients = () => {
    return (
        <div className="clients-section py-8">
            <Top />
            <h1 className="text-center text-3xl">Manage your bithv</h1>
            <h2 className="text-center text-sm">Description</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="card  overflow-hidden">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Client 1"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Client 1</h3>
                        <p className="text-gray-600">
                            Description for client 1.
                        </p>
                    </div>
                </div>
                <div className="card bg-white shadow-md rounded-lg overflow-hidden">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Client 2"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Client 2</h3>
                        <p className="text-gray-600">
                            Description for client 2.
                        </p>
                    </div>
                </div>
                <div className="card bg-white shadow-md rounded-lg overflow-hidden">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Client 3"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">Client 3</h3>
                        <p className="text-gray-600">
                            Description for client 3.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;
