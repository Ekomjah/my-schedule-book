import {
  format,
  differenceInDays,
  compareAsc,
  differenceInMinutes,
} from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
export default function NotesEl({ darkTheme, notesArr, setNotesArr }) {
  return (
    <>
      {notesArr.map(({ currDate, title, description }) => (
        <div
          className={`p-6 rounded shadow hover:shadow-lg transition cursor-pointer ${
            darkTheme
              ? "!bg-gray-900 text-gray-200"
              : "!bg-gray-200 !text-gray-900"
          }`}
        >
          <div className="font-semibold mb-2 text-lg">{title}</div>
          <div className="mb-3">{description}</div>
          <div className="flex justify-between items-center">
            <button
              onClick={(e) =>
                setNotesArr(
                  notesArr.filter((myItem) => myItem.currDate !== currDate)
                )
              }
              className="flex justify-start text-xs text-red-500"
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <div className="flex justify-end text-xs">
              {differenceInDays(new Date(), currDate) < 1
                ? `Edited ${differenceInMinutes(
                    new Date(),
                    currDate
                  )} minutes ago.`
                : `Edited ${differenceInDays(new Date(), currDate)} days ago.`}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
