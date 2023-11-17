import { useState } from "react";
import ButtonAllDriverAmin from "../../feature/auth/ButtonAllDriverAmin";
import axios from "../../config/axios";

export default function AllDriver({
  firstName,
  lastName,
  idcard,
  gender,
  tel,
  email,
  platenumber,
  id,
  getAllDriver,
  status,
  image,
}) {
  const [isActive, setIsActive] = useState(null);

  const [input, setInput] = useState({
    id,
    status,
  });

  const handdleChangeStatus = async (e) => {
    try {
      e.preventDefault();
      await axios.post("/admin/change-status", input);
      getAllDriver();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <br />
      <div className="flex py-10 gap-4 w- border px-10 border-Primary-dark rounded-3xl justify-center items-center relative text-MonoColor-600">
        {image ? (
          <img
            src={image}
            className="aspect-square rounded-full object-cover w-[100px]"
          />
        ) : (
          <img src="./src/assets/user2.png" className="w-20 h-20" />
        )}

        <div className="flex flex-col-2 gap-6 pb-2">
          <div>
            <div className="flex gap-4">
              <p className="text-Primary-darker text-16px font-bold">
                First name
              </p>
              <p>{firstName}</p>
            </div>

            <div className="flex gap-9">
              <p className="text-Primary-darker text-16px font-bold">ID card</p>
              <p>{idcard}</p>
            </div>

            <div className="flex gap-9">
              <p className="text-Primary-darker text-16px font-bold">Gender</p>
              <p>{gender}</p>
            </div>

            <div className="flex gap-12">
              <p className="text-Primary-darker text-16px font-bold">Email</p>
              <p>{email}</p>
            </div>
          </div>

          <div>
            <div className="flex gap-11">
              <p className="text-Primary-darker text-16px font-bold">
                Last name
              </p>
              <p>{lastName}</p>
            </div>

            <div className="flex gap-24">
              <p className="text-Primary-darker text-16px font-bold">Tel.</p>
              <p>{tel}</p>
            </div>

            <div className="flex gap-4">
              <p className="text-Primary-darker text-16px font-bold">
                Plate Number
              </p>
              <p>{platenumber}</p>
            </div>
          </div>
        </div>

        <form
          className="absolute bottom-4 right-10"
          onSubmit={handdleChangeStatus}
        >
          <ButtonAllDriverAmin
            isActive={isActive}
            setIsActive={setIsActive}
            status={status}
            setInput={setInput}
            setStatusTrue={() => setInput.status(true)}
            setStatusFalse={() => setInput.status(false)}
          />
        </form>
      </div>
    </div>
  );
}
