import FindRoom from "../components/find-room";

export default function RoomPage() {
    return <>
        <div className="container m-auto h-screen flex flex-row">
            <div className="basis-1/2 content-center justify-center">
                <FindRoom/>
            </div>
            <div className="basis-1/2 content-center justify-center">
                <p>poner texto rando aqui</p>
            </div>
        </div>
    </>
}