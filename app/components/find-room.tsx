import { redirect } from "next/navigation";

export default function FindRoom(){
    async function onSubmit(fromData: FormData) {
        'use server'
        console.log('data del server: ', fromData.get('code'));
        redirect('room/table');
      }

    return (<>
        <form action={onSubmit}>
            <label className="block">
                <span className="block text-sm font-medium">Ponga el id del room</span>
                <input className="" name="code" type="number" pattern="\d*" maxLength={4} />
                <p className="mt-2 text-sm">
                    654321
                </p>
                <button className="bg-sky-500 hover:bg-sky-700 ..." type="submit">
                    Save changes
                </button>
            </label>
        </form>
    </>);
}