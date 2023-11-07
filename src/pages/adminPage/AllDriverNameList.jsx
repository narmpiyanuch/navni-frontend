import ButtonAllDriverAmin from "../../feature/auth/ButtonAllDriverAmin"

const namelist = [
    { id: 1, firstName: 'FirstName', lastName: 'LastName', idcard: 'ID Card', birthday: 'BirthDay', gender: 'Gender', tel: 'Tel.', email: 'Email' }
]

export default function AllDriverNameList() {
    return (
        <>
            <div className="">
                <div className="flex py-4 border border-Primary-dark rounded-3xl justify-center items-center" >
                    <img src="./src/assets/user2.png" className="w-20 h-20 m-5 d-5" />
                    {namelist.map(el => (
                            <ButtonAllDriverAmin key={el} />
                    ))}
                </div>


            </div>
        </>
    )
}